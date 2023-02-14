import React from "react";
import PlaceableComponent from "./PlaceableComponent";

class PropertyHandle<PropertyType> {
    type: string;
    propertyName: string;
    attachedComponent: PlaceableComponent;
    value: PropertyType;

    onPropertyChangeCallbacks:
        | ((propertyHandle: PropertyHandle<PropertyType>) => void)[] = [];

    constructor(
        type: string,
        propertyName: string,
        attachedComponent: PlaceableComponent,
        initialValue: PropertyType
    ) {
        this.type = type;
        this.propertyName = propertyName;
        this.attachedComponent = attachedComponent;
        this.value = initialValue;
    }

    getInspectorElement(): React.ReactNode | null {
        return null;
    }

    getDOMElement(children: React.ReactNode): React.ReactNode | null {
        return null;
    }

    setPropertyValue(value: PropertyType): void {
        this.value = value;
        this.onPropertyChange();
    }

    getPropertyValue(): PropertyType {
        return this.value;
    }

    addOnPropertyChangeCallback(
        callback: (propertyHandle: PropertyHandle<PropertyType>) => void
    ): void {
        this.onPropertyChangeCallbacks.push(callback);
    }

    onPropertyChange() {
        for (const call of this.onPropertyChangeCallbacks) call(this);
    }

    getKey(): string {
        return this.attachedComponent.props.id + "." + this.propertyName;
    }
}

export default PropertyHandle;
