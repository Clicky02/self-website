import React from "react";
import { withPageState } from "../Page/PageContext";
import { PageStateProps } from "../Page/PageRenderer/PageRenderer";
import ContentTreeDisplay from "../Page/Tree/ContentTreeDisplay";
import PlaceableComponent from "../PlaceableComponent";
import PropertyHandle from "../PropertyHandle";
import "./Inspector.css";

type InspectorState = {
    expanded: boolean;
};

type InspectorProps = PageStateProps;

class Inspector extends React.Component<InspectorProps, InspectorState> {
    suscribedHandles: PropertyHandle<any>[];

    constructor(props: InspectorProps) {
        super(props);
        this.state = {
            expanded: false,
        };

        this.focusElement = this.focusElement.bind(this);
        this.refreshInspector = this.refreshInspector.bind(this);
        this.suscribedHandles = [];
    }

    render() {
        let defaultPropertyEls: React.ReactNode[] = [];

        if (this.props.state.currentComponent != null) {
            for (const propHandle of this.props.state.currentComponent
                .defaultPropertyHandles) {
                defaultPropertyEls.push(propHandle.getInspectorElement());

                propHandle.onPropertyChangeCallbacks.push(
                    this.refreshInspector
                );
                this.suscribedHandles.push(propHandle);
            }
        }

        let customPropertyEls: React.ReactNode[] = [];

        if (this.props.state.currentComponent != null) {
            for (const propHandle of this.props.state.currentComponent
                .propertyHandles) {
                customPropertyEls.push(propHandle.getInspectorElement());

                propHandle.onPropertyChangeCallbacks.push(
                    this.refreshInspector
                );
                this.suscribedHandles.push(propHandle);
            }
        }

        if (this.props.state.rootComponent) {
            return (
                <React.Fragment>
                    <div
                        id="Inspector"
                        className={
                            this.state.expanded
                                ? "Inspector Expanded"
                                : "Inspector"
                        }
                    >
                        <h1>Inspector</h1>
                        <h2>Tree</h2>
                        <ContentTreeDisplay />
                        <h2>Component </h2>
                        {defaultPropertyEls}
                        <h3>Properties</h3>
                        {customPropertyEls}
                    </div>
                    <div
                        id="InspectorExpand"
                        className="NoSelect"
                        onClick={this.toggleExpand.bind(this)}
                    >
                        {"<"}
                    </div>
                </React.Fragment>
            );
        }
    }

    toggleExpand() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    refreshInspector() {
        this.forceUpdate();
    }

    resetHandles() {
        for (const handle of this.suscribedHandles) {
            let index = handle.onPropertyChangeCallbacks.indexOf(
                this.refreshInspector
            );

            if (index >= 0) {
                handle.onPropertyChangeCallbacks.splice(index, 1);
            }
        }

        this.suscribedHandles = [];
    }

    focusElement(comp: PlaceableComponent, e: any) {
        this.props.dispatch({ currentComponent: comp });
    }

    /*getPlaceableTree(c) {
        function getNodeChildren(currentNode: TreeNode<PlaceableComponent>) {
            for (const handle of currentNode.element.componentInfo
                .propertyHandles) {
                if (handle instanceof DOMPropertyHandle) {
                    let node = new TreeNode<PlaceableComponent>(
                        "Element",
                        handle.
                    );
                }
            }
        }
        let currentInfo = this.props.state.rootComponent.componentInfo;

        getNodeChildren(
            new TreeNode<PlaceableComponent>(
                "Element",
                this.props.state.rootComponent
            )
        );
    }*/
}

export default withPageState(Inspector);
