import DOMPropertyHandle from "creator/general/propertyHandlers/DOMPropertyHandle";
import StringPropertyHandle from "creator/general/propertyHandlers/StringPropertyHandle";
import React from "react";
import { PageStateProps } from "./Page/PageRenderer/PageRenderer";
import PropertyHandle from "./PropertyHandle";

type PlaceableComponentProps = {
    parentHandle?: DOMPropertyHandle;
    parentComponent?: PlaceableComponent;
    id: number;
} & PageStateProps;

class PlaceableComponent extends React.Component<PlaceableComponentProps> {
    name: string;

    defaultPropertyHandles: PropertyHandle<any>[] = [];
    propertyHandles: PropertyHandle<any>[] = [];
    domHandles: DOMPropertyHandle[] = [];

    // TODO - Add functions for adding/removing callbacks
    onPropertyUpdateCallbacks: ((
        propertyHandle: PropertyHandle<any>
    ) => void)[] = [];

    constructor(props: any, defaultName: string = "Element") {
        super(props);

        this.onPropertyUpdate = this.onPropertyUpdate.bind(this);

        this.name = defaultName;
        let nameHandle = new StringPropertyHandle("Name", this, defaultName);
        nameHandle.addOnPropertyChangeCallback(
            (handle: PropertyHandle<string>) => {
                this.name = handle.getPropertyValue();
                this.onPropertyUpdate(handle);
            }
        );
        this.defaultPropertyHandles.push(nameHandle);
    }

    componentDidMount(): void {
        this.registerComponent();
    }

    componentWillUnmount(): void {
        if (this.props.parentHandle) {
            this.props.parentHandle.unregisterComponent(this);
        }
    }

    registerComponent() {
        if (this.props.parentHandle) {
            this.props.parentHandle.registerComponent(this);

            // Awful way to update tree
            // TODO find better way to force DOM update
            this.props.dispatch({
                rootComponent: this.props.state.rootComponent,
            });
        }
    }

    addHandle(handle: PropertyHandle<any>) {
        this.propertyHandles.push(handle);
        handle.addOnPropertyChangeCallback(this.onPropertyUpdate);

        if (handle instanceof DOMPropertyHandle) {
            let domHandle = handle as DOMPropertyHandle;
            this.domHandles.push(domHandle);
        }
    }

    onPropertyUpdate(propertyHandle: PropertyHandle<any>) {
        this.forceUpdate();

        for (const call of this.onPropertyUpdateCallbacks) call(propertyHandle);
    }

    get parentHandle() {
        return this.props.parentHandle;
    }

    get parentComponent() {
        return this.props.parentComponent;
    }

    get id() {
        return this.props.id;
    }
}

export let placeableComponents: { [name: string]: any } = {};

export default PlaceableComponent;
