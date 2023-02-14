import React from "react";
import PropertyHandle from "creator/base/PropertyHandle";
import InspectorRow from "creator/base/Inspector/Row/InspectorRow";
import PlaceableComponent from "creator/base/PlaceableComponent";
import "./StringPropertyHandle.css";

class EnumPropertyHandle extends PropertyHandle<number> {
    inspectorElement: React.ReactNode;

    selectionEnum: { [key: string]: number };
    displayNameFunction: ((value: number) => string) | undefined;

    constructor(
        propertyName: string,
        attachedComponent: PlaceableComponent,
        selectionEnum: { [key: string]: number } = {},
        initialValue: number = 0,
        displayNameFunction: ((value: number) => string) | undefined = undefined
    ) {
        super("enum", propertyName, attachedComponent, initialValue);

        this.selectionEnum = selectionEnum;
        this.displayNameFunction = displayNameFunction;
    }

    getInspectorElement(): React.ReactNode | null {
        let enumOptions = [];

        for (const key in this.selectionEnum) {
            let value = this.selectionEnum[key];
            let name = this.displayNameFunction
                ? this.displayNameFunction(value)
                : key;

            enumOptions.push(
                <option key={value} value={value}>
                    {name}
                </option>
            );
        }

        return (
            <InspectorRow
                title={this.propertyName}
                key={this.getKey()}
                inline={false}
            >
                <select>{enumOptions}</select>
            </InspectorRow>
        );
    }

    onSelect(e: any): void {}
}

export default EnumPropertyHandle;
