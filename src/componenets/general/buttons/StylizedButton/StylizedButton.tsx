import React from "react";
import "./StylizedButton.css";

type StylizedButtonProps = {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
};

class StylizedButton extends React.Component<StylizedButtonProps> {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className="StylizedButton AccentText NoSelect"
            >
                {this.props.children}
            </button>
        );
    }
}

export default StylizedButton;