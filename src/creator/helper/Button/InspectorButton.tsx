import React from "react";
import "./InspectorButton.css";

type InspectorButtonProps = {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
};

class InspectorButton extends React.Component<InspectorButtonProps> {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className="InspectorButton AccentText NoSelect"
            >
                {this.props.children}
            </button>
        );
    }
}

export default InspectorButton;
