import React from "react";
import "../Helper.css";
import ResizableVerticalContainer, {
    TaskBarButtonProperties,
} from "../ResizableVerticalContainer/ResizableVerticalContainer";
import "./List.css";

type ListProps<ElementType> = {
    names: string[];
    elements: ElementType[];
    keys?: string[];
    onElementSelect?: (name: string, element: ElementType, e: any) => void;
    reorderFunction: (fromIndex: number, toIndex: number) => void;
    deleteFunction: (index: number) => void;
};

type ListState = {
    selectedIndex: number;
};

class List<ElementType> extends React.Component<
    ListProps<ElementType>,
    ListState
> {
    constructor(props: ListProps<ElementType>) {
        super(props);

        this.state = {
            selectedIndex: -1,
        };

        this.moveSelectedUp = this.moveSelectedUp.bind(this);
        this.moveSelectedDown = this.moveSelectedDown.bind(this);
        this.deleteSelected = this.deleteSelected.bind(this);
    }

    render() {
        const els = [];

        for (let i = 0; i < this.props.elements.length; i++) {
            const element = this.props.elements[i];
            const key = this.props.keys ? this.props.keys[i] : i;

            els.push(
                <div
                    className={
                        "ListElement PointerCursor" +
                        (this.state.selectedIndex == i ? " Selected" : "")
                    }
                    key={key}
                    onClick={this.handleSelect.bind(this, i)}
                >
                    {this.props.names[i]}
                </div>
            );
        }

        const buttons: TaskBarButtonProperties[] = [
            {
                name: "▲",
                onClick: this.moveSelectedUp,
            },
            {
                name: "▼",
                onClick: this.moveSelectedDown,
            },
            {
                name: "Delete",
                onClick: this.deleteSelected,
            },
        ];

        return (
            <ResizableVerticalContainer
                useTaskBar={true}
                taskBarButtons={buttons}
                small={true}
            >
                {els}
            </ResizableVerticalContainer>
        );
    }

    handleSelect(listIndex: number, e: any) {
        if (this.props.onElementSelect) {
            this.props.onElementSelect(
                this.props.names[listIndex],
                this.props.elements[listIndex],
                e
            );
        }

        this.setState({
            selectedIndex: listIndex,
        });
    }

    moveSelectedUp() {
        this.reorder(this.state.selectedIndex, this.state.selectedIndex - 1);
    }

    moveSelectedDown() {
        this.reorder(this.state.selectedIndex, this.state.selectedIndex + 1);
    }

    reorder(from: number, to: number) {
        if (
            from >= 0 &&
            from < this.props.elements.length &&
            to >= 0 &&
            to < this.props.elements.length &&
            from != to
        ) {
            this.onReorder(from, to);
        }
    }

    onReorder(from: number, to: number) {
        this.props.reorderFunction(from, to);
        this.setState({ selectedIndex: to });
    }

    deleteSelected() {
        this.onDelete(this.state.selectedIndex);
    }

    onDelete(index: number) {
        this.props.deleteFunction(index);
        this.setState({ selectedIndex: index - 1 });
    }
}

export default List;
