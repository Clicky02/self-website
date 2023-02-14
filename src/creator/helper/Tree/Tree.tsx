import React from "react";
import "../Helper.css";
import "./Tree.css";

export class TreeNode<ElementType> {
    name: string;
    element: ElementType;
    children: TreeNode<ElementType>[];
    id: number;

    constructor(
        name: string,
        element: ElementType,
        id: number = 0,
        children: TreeNode<ElementType>[] = []
    ) {
        this.name = name;
        this.element = element;
        this.id = id;
        this.children = children;
    }
}

type TreeProps<ElementType> = {
    rootNode: TreeNode<ElementType>;
    onElementSelect?: (node: TreeNode<ElementType>, e: any) => void;
};

class Tree<ElementType> extends React.Component<TreeProps<ElementType>> {
    render() {
        return (
            <div className="ResizableVerticalContainer">
                {this.createTreeDOM(this.props.rootNode)}
            </div>
        );
    }

    createTreeDOM(currentNode: TreeNode<ElementType>) {
        let childElements = [];

        for (const child of currentNode.children) {
            childElements.push(this.createTreeDOM(child));
        }

        return (
            <TreeElement
                onElementSelect={this.props.onElementSelect}
                key={currentNode.id}
                node={currentNode}
            >
                {childElements}
            </TreeElement>
        );
    }
}

type TreeElementProps<ElementType> = {
    children?: React.ReactNode;
    node: TreeNode<ElementType>;
    onElementSelect?: (node: TreeNode<ElementType>, e: any) => void;
};

type TreeElementState = {
    expanded: boolean;
};

class TreeElement<ElementType> extends React.Component<
    TreeElementProps<ElementType>,
    TreeElementState
> {
    constructor(props: TreeElementProps<ElementType>) {
        super(props);

        this.toggleExpand = this.toggleExpand.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            expanded: true,
        };
    }

    render() {
        let classExtension = this.state.expanded ? " Expanded" : " Collapsed";
        let nameclassExtension = this.props.onElementSelect
            ? " PointerCursor"
            : "";

        return (
            <div className="TreeElement">
                <div className="TreeElementBar">
                    <div
                        className={"TreeElementArrow NoSelect" + classExtension}
                        onClick={this.toggleExpand}
                    >
                        ▶
                    </div>
                    <div
                        className={"TreeElementName" + nameclassExtension}
                        onClick={this.handleSelect}
                    >
                        {this.props.node.name}
                    </div>
                </div>
                <div className={"TreeElementChildren" + classExtension}>
                    {this.state.expanded ? this.props.children : null}
                </div>
            </div>
        );
    }

    toggleExpand() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    handleSelect(e: any) {
        if (this.props.onElementSelect) {
            this.props.onElementSelect(this.props.node, e);
        }
    }
}

export default Tree;
