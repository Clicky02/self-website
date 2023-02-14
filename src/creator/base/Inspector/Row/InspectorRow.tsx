import React from "react";
import "./InspectorRow.css";

type InspectorRowProps = {
    children?: React.ReactNode;
    title: string;
    inline?: boolean;
};

class InspectorRow extends React.Component<InspectorRowProps> {
    render() {
        return (
            <div
                className={
                    "InspectorRow" + (this.props.inline ? " Inline" : "")
                }
            >
                <h4 className={this.props.inline ? "InlineHeader" : ""}>
                    {this.props.title}
                </h4>
                <div className="InspectorRowContent">{this.props.children}</div>
            </div>
        );
    }
}

export default InspectorRow;
