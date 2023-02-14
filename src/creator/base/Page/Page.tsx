import DOMPropertyHandle from "creator/general/propertyHandlers/DOMPropertyHandle";
import React, { ReactNode } from "react";
import PlaceableComponent from "../PlaceableComponent";
import { withPageState } from "./PageContext";

class Page extends PlaceableComponent {
    DOMProperty: DOMPropertyHandle;

    constructor(props: any) {
        super(props, "Page");

        this.DOMProperty = new DOMPropertyHandle("children", this);
        this.addHandle(this.DOMProperty);
    }

    componentDidMount(): void {
        super.componentDidMount();

        this.props.dispatch({
            currentComponent: this,
            rootComponent: this,
        });
    }

    render(): ReactNode {
        return (
            <React.Fragment>{this.DOMProperty.getDOMElement()}</React.Fragment>
        );
    }
}

export default withPageState(Page);
