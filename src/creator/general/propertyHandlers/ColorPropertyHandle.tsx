import React from "react";
import PropertyHandle from "creator/base/PropertyHandle";
import InspectorRow from "creator/base/Inspector/Row/InspectorRow";
import PlaceableComponent from "creator/base/PlaceableComponent";
import { HexColorInput, HexAlphaColorPicker } from "react-colorful";
import "./StringPropertyHandle.css";

class ColorPropertyHandle extends PropertyHandle<string> {
    inspectorElement: React.ReactNode;
    inspectorElementRef: React.RefObject<any>;

    color: string;

    constructor(propertyName: string, attachedComponent: PlaceableComponent, initialValue: string | undefined = undefined) {
        super("color", propertyName, attachedComponent, initialValue || "");

        this.color = initialValue || "";

        this.inspectorElementRef = React.createRef();
        this.onChangeColor = this.onChangeColor.bind(this);
    }

    getInspectorElement(): React.ReactNode | null {
        return (
            <InspectorRow title={this.propertyName} key={this.getKey()} inline={false}>
                <HexAlphaColorPicker color={this.color} onChange={this.onChangeColor} style={{ width: "unset" }} />
                <HexColorInput color={this.color} onChange={this.onChangeColor} prefixed alpha />
            </InspectorRow>
        );
    }

    onChangeColor(color: any): void {
        this.value = color;
        this.color = color;
        this.onPropertyChange();
    }
}

export default ColorPropertyHandle;
