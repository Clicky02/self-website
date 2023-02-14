import StylizedButton from "componenets/general/buttons/StylizedButton/StylizedButton";
import { withPageState } from "creator/base/Page/PageContext";
import PlaceableComponent from "creator/base/PlaceableComponent";
import StringPropertyHandle from "creator/general/propertyHandlers/StringPropertyHandle";
import React from "react";
import { Link } from "react-router-dom";

class PlaceableLinkButton extends PlaceableComponent {
    linkProperty: StringPropertyHandle;

    constructor(props: any) {
        super(props, "Link Button");

        this.linkProperty = new StringPropertyHandle("Link", this);
        this.addHandle(this.linkProperty);
    }

    render() {
        return (
            <Link
                to={
                    process.env.REACT_APP_ROOT_PATH +
                    this.linkProperty.getPropertyValue()
                }
            >
                <StylizedButton></StylizedButton>
            </Link>
        );
    }
}

export default withPageState(PlaceableLinkButton);
