import React from "react";
import "./Module.css";
import HeadshotLinks from "componenets/about/HeadshotLinks/HeadshotLinks";
import PlaceableComponent from "creator/base/PlaceableComponent";
import DOMPropertyHandle from "creator/general/propertyHandlers/DOMPropertyHandle";
import { withPageState } from "creator/base/Page/PageContext";

type ModuleProperties = {
    children?: React.ReactNode;
};

class Module extends PlaceableComponent {
    headerProperty: DOMPropertyHandle;
    childrenProperty: DOMPropertyHandle;
    footerProperty: DOMPropertyHandle;

    constructor(props: any) {
        super(props, "Module");

        this.headerProperty = new DOMPropertyHandle("header", this);
        this.addHandle(this.headerProperty);

        this.childrenProperty = new DOMPropertyHandle("children", this);
        this.addHandle(this.childrenProperty);

        this.footerProperty = new DOMPropertyHandle("footer", this);
        this.addHandle(this.footerProperty);
    }

    render() {
        console.log(React.Children);
        return (
            <div className="Module">
                <h2 className="ModuleHeader">
                    {this.headerProperty.getDOMElement()}
                </h2>

                <div className="ModuleContent">
                    {this.childrenProperty.getDOMElement()}
                </div>

                <div className="ModuleFooter">
                    {this.footerProperty.getDOMElement()}
                </div>
            </div>
        );
    }
}

export default withPageState(Module);
