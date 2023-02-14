import React from "react";
import "../Helper.css";
import "./Tree.css";

export class CategorizedTreeNode<ElementType> {
    name: string;
    element: ElementType;
    categories: {
        [category: string]: CategorizedTreeNode<ElementType>[];
    };
    id: number;

    constructor(
        name: string,
        element: ElementType,
        id: number = 0,
        categories: {
            [category: string]: CategorizedTreeNode<ElementType>[];
        } = {}
    ) {
        this.name = name;
        this.element = element;
        this.id = id;
        this.categories = categories;
    }

    addCategory(category: string) {
        this.categories[category] = [];
    }

    addChildToCategory(
        treeNode: CategorizedTreeNode<ElementType>,
        category: string
    ) {
        this.categories[category].push(treeNode);
    }

    removeChildNode(treeNode: CategorizedTreeNode<ElementType>) {
        for (const category in this.categories) {
            this.removeChildNodeFromCategory(treeNode, category);
        }
    }

    removeChildNodeFromCategory(
        treeNode: CategorizedTreeNode<ElementType>,
        category: string
    ) {
        let categoryEls = this.categories[category];
        if (categoryEls) {
            let index = categoryEls.indexOf(treeNode);
            if (index >= 0) {
                categoryEls.splice(index, 1);
            }
        }
    }
}

type CategorizedTreeProps<ElementType> = {
    rootNode: CategorizedTreeNode<ElementType>;
    onElementSelect?: (node: CategorizedTreeNode<ElementType>, e: any) => void;
};

class CategorizedTree<ElementType> extends React.Component<
    CategorizedTreeProps<ElementType>
> {
    render() {
        return (
            <div className="ResizableVerticalContainer">
                {this.createTreeDOM(this.props.rootNode)}
            </div>
        );
    }

    createTreeDOM(currentNode: CategorizedTreeNode<ElementType>) {
        let categoryElements: React.ReactNode[] = [];
        let categoryCount = Object.keys(currentNode.categories).length;

        for (const category in currentNode.categories) {
            let childElements = [];

            for (const child of currentNode.categories[category]) {
                childElements.push(this.createTreeDOM(child));
            }

            if (categoryCount > 1) {
                categoryElements.push(
                    <CategorizedTreeElement
                        key={currentNode.id + "." + category}
                        node={currentNode}
                        category={category}
                    >
                        {childElements}
                    </CategorizedTreeElement>
                );
            } else {
                categoryElements = childElements;
            }
        }

        return (
            <CategorizedTreeElement
                onElementSelect={this.props.onElementSelect}
                key={currentNode.id}
                node={currentNode}
            >
                {categoryElements}
            </CategorizedTreeElement>
        );
    }
}

type CategorizedTreeElementProps<ElementType> = {
    children?: React.ReactNode;
    node: CategorizedTreeNode<ElementType>;
    category?: string;
    onElementSelect?: (node: CategorizedTreeNode<ElementType>, e: any) => void;
};

type CategorizedTreeElementState = {
    expanded: boolean;
};

class CategorizedTreeElement<ElementType> extends React.Component<
    CategorizedTreeElementProps<ElementType>,
    CategorizedTreeElementState
> {
    constructor(props: CategorizedTreeElementProps<ElementType>) {
        super(props);

        this.toggleExpand = this.toggleExpand.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            expanded: true,
        };
    }

    render() {
        let classExtension = this.state.expanded ? " Expanded" : " Collapsed";
        let nameclassExtension =
            (this.props.onElementSelect ? " PointerCursor" : "") +
            (this.props.category ? " Unselectable" : "");

        let name = this.props.category
            ? this.props.category
            : this.props.node.name;

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
                        {name}
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

export default CategorizedTree;
