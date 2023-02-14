import React from "react";
import { placeableComponents } from "creator/base/PlaceableComponent";
import InspectorRow from "creator/base/Inspector/Row/InspectorRow";
import PlaceableComponent from "creator/base/PlaceableComponent";
import PropertyHandle from "creator/base/PropertyHandle";
import InspectorButton from "creator/helper/Button/InspectorButton";
import List from "creator/helper/List/List";

type DOMPropertyComponentProps = {
    children?: React.ReactNode;
};

class DOMPropertyComponent extends React.Component<DOMPropertyComponentProps> {
    render(): React.ReactNode {
        return <div>{this.props.children}</div>;
    }
}

class DOMPropertyHandle extends PropertyHandle<PlaceableComponent[]> {
    currentNodes: { [id: number]: React.ReactNode };
    unregisteredNodes: number[] = [];

    selectedComponent: string;
    options: React.ReactNode[];

    constructor(
        propertyName: string = "children",
        attachedComponent: PlaceableComponent
    ) {
        super("ReactNode", propertyName, attachedComponent, []);

        this.currentNodes = {};

        this.options = [];
        this.selectedComponent = "";

        let first = true;
        for (const componentName in placeableComponents) {
            if (first) {
                this.selectedComponent = componentName;
                first = false;
            }

            this.options.push(
                <option key={componentName} value={componentName}>
                    {componentName}
                </option>
            );
        }

        this.changeComponentSelection =
            this.changeComponentSelection.bind(this);

        this.reorderComponents = this.reorderComponents.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
    }

    getInspectorElement(): React.ReactNode {
        return (
            <InspectorRow title={this.propertyName} key={this.propertyName}>
                <List
                    names={this.value.map((val) => val.name)}
                    elements={this.value}
                    reorderFunction={this.reorderComponents}
                    deleteFunction={this.deleteComponent}
                />
                <div>
                    <select
                        name="componentType"
                        onChange={this.changeComponentSelection}
                        defaultValue={this.selectedComponent}
                    >
                        {this.options}
                    </select>
                    <InspectorButton onClick={this.createComponent.bind(this)}>
                        Add Component
                    </InspectorButton>
                </div>
            </InspectorRow>
        );
    }

    getDOMElement(): React.ReactNode {
        let nodes = [];
        for (let i = 0; i < this.value.length; i++) {
            nodes.push(this.currentNodes[this.value[i].id]);
        }

        for (let i = 0; i < this.unregisteredNodes.length; i++) {
            nodes.push(this.currentNodes[this.unregisteredNodes[i]]);
        }

        return (
            <DOMPropertyComponent key={this.propertyName}>
                {nodes}
            </DOMPropertyComponent>
        );
    }

    changeComponentSelection(e: any) {
        this.selectedComponent = e.target.value;
    }

    deleteComponent(index: number) {
        this.value.splice(index, 1);

        this.onPropertyChange();
    }

    reorderComponents(fromIndex: number, toIndex: number) {
        let temp = this.value.splice(fromIndex, 1)[0];

        this.value.splice(toIndex, 0, temp);

        this.onPropertyChange();
    }

    createComponent() {
        let Comp = placeableComponents[this.selectedComponent];
        let id = this.attachedComponent.props.state.currentId;

        this.currentNodes[id] = (
            <Comp
                key={id}
                id={id}
                parentHandle={this}
                parentComponent={this.attachedComponent}
            ></Comp>
        );
        this.unregisteredNodes.push(id);

        this.attachedComponent.props.dispatch({ currentId: id + 1 });

        this.onPropertyChange();
    }

    removeComponent(comp: PlaceableComponent) {
        if (comp.props.id in this.currentNodes) {
            delete this.currentNodes[comp.props.id];
        }
    }

    registerComponent(comp: PlaceableComponent) {
        let index = this.unregisteredNodes.indexOf(comp.id);
        if (index >= 0) {
            this.unregisteredNodes.splice(index, 1);
        }

        if (comp.props.id in this.currentNodes) {
            this.value.push(comp);
        }
    }

    unregisterComponent(comp: PlaceableComponent) {
        let index = this.value.indexOf(comp);
        if (index >= 0) {
            this.value.splice(index, 1);
        }
    }
}

export default DOMPropertyHandle;
