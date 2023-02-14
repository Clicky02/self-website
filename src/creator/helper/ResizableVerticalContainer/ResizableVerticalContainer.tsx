import React from "react";
import "../Helper.css";
import "./ResizableVerticalContainer.css";

export type TaskBarButtonProperties = {
    name: string;
    onClick: (e: any) => void;
};

type ResizableVerticalContainerProps = {
    children?: React.ReactNode;
    small?: boolean;
    useTaskBar?: boolean;
    taskBarButtons?: TaskBarButtonProperties[];
};

class ResizableVerticalContainer extends React.Component<ResizableVerticalContainerProps> {
    render() {
        let taskbar = undefined;
        if (
            this.props.useTaskBar &&
            this.props.taskBarButtons &&
            this.props.taskBarButtons.length > 0
        ) {
            let taskBarButtons = [];
            for (const props of this.props.taskBarButtons) {
                taskBarButtons.push(
                    <button
                        className="TaskBarElement TaskBarButton"
                        onClick={props.onClick}
                        key={props.name}
                    >
                        {props.name}
                    </button>
                );
            }

            taskbar = <div className="TaskBar">{taskBarButtons}</div>;
        }

        return (
            <div className="ResizableVerticalContainer">
                <div
                    className={
                        "ResizableVerticalContainerContent" +
                        (this.props.small ? " Small" : "")
                    }
                >
                    {this.props.children}
                </div>
                {taskbar}
            </div>
        );
    }
}

export default ResizableVerticalContainer;
