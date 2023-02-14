import React from "react";
import PropertyHandle from "creator/base/PropertyHandle";
import InspectorRow from "creator/base/Inspector/Row/InspectorRow";
import PlaceableComponent from "creator/base/PlaceableComponent";

export class OptionMap<ValueType> {
    options: string[];
    values: ValueType[];

    constructor(options: { [key: string]: ValueType });
    constructor(options: string[], values: ValueType[]);

    constructor(
        options: { [key: string]: ValueType } | string[],
        values?: ValueType[]
    ) {
        if (values === undefined) {
            // assert(options instanceof Object);

            this.options = Object.keys(options as { [key: string]: ValueType });
            this.values = Object.values(
                options as { [key: string]: ValueType }
            );
        } else {
            // assert(options instanceof Array);
            // assert(values instanceof Array);
            // assert(options.length == values.length);

            this.options = options as string[];
            this.values = values as ValueType[];
        }
    }

    get(i: number): [string, ValueType] {
        return [this.options[i], this.values[i]];
    }

    getOption(i: number): string {
        return this.options[i];
    }

    getValue(i: number): ValueType {
        return this.values[i];
    }

    get length(): number {
        return this.options.length;
    }
}

class OptionMapPropertyHandler<ValueType> extends PropertyHandle<ValueType> {
    inspectorElement: React.ReactNode;

    optionMap: OptionMap<ValueType>;
    selection: number;

    constructor(
        propertyName: string,
        attachedComponent: PlaceableComponent,
        optionMap: OptionMap<ValueType>,
        initialSelection: number = 0
    ) {
        super(
            "enum",
            propertyName,
            attachedComponent,
            optionMap.getValue(initialSelection)
        );

        this.onSelect = this.onSelect.bind(this);

        this.optionMap = optionMap;
        this.selection = initialSelection;
    }

    getInspectorElement(): React.ReactNode | null {
        let selectOptions = [];

        for (let i = 0; i < this.optionMap.length; i++) {
            let name = this.optionMap.getOption(i);

            selectOptions.push(
                <option key={i} value={i}>
                    {name}
                </option>
            );
        }

        return (
            <InspectorRow
                title={this.propertyName}
                key={this.getKey()}
                inline={true}
            >
                <select onChange={this.onSelect}>{selectOptions}</select>
            </InspectorRow>
        );
    }

    onSelect(e: any): void {
        this.selection = e.target.value;
        this.setPropertyValue(this.optionMap.getValue(this.selection));
    }
}

export default OptionMapPropertyHandler;
