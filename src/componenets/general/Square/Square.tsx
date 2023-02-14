import React from "react";
import "./Square.css";

type SquareProps = {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

class Square extends React.Component<SquareProps> {
    render() {
        return (
            <div
                id="container"
                style={this.props.style}
                className={this.props.className}
            >
                <div id="dummy"></div>
                <div id="element">{this.props.children}</div>
            </div>
        );
    }
}

export default Square;
