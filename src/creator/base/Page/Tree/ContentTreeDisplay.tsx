import PlaceableComponent from "creator/base/PlaceableComponent";
import React from "react";
import "creator/helper/Helper.css";
import "./ContentTreeDisplay.css";
import { withPageState } from "../PageContext";
import { PageStateProps } from "../PageRenderer/PageRenderer";
import PropertyHandle from "creator/base/PropertyHandle";
import ResizableVerticalContainer from "creator/helper/ResizableVerticalContainer/ResizableVerticalContainer";

class ContentTreeDisplay extends React.Component<PageStateProps> {
    render() {
        return (
            <ResizableVerticalContainer>
                {this.props.state.rootComponent
                    ? this.createTreeDOM(this.props.state.rootComponent)
                    : ""}
            </ResizableVerticalContainer>
        );
    }

    createTreeDOM(currentComp: PlaceableComponent) {
        let categoryElements: React.ReactNode[] = [];
        let categoryCount = currentComp.domHandles.length;

        for (const handle of currentComp.domHandles) {
            let childElements = [];

            for (const child of handle.getPropertyValue()) {
                childElements.push(this.createTreeDOM(child));
            }

            if (categoryCount > 1) {
                categoryElements.push(
                    <ContentTreeElement
                        key={currentComp.id + "." + handle.propertyName}
                        comp={currentComp}
                        category={handle.propertyName}
                        selected={false}
                    >
                        {childElements}
                    </ContentTreeElement>
                );
            } else {
                categoryElements = childElements;
            }
        }

        return (
            <ContentTreeElement
                onElementSelect={this.nodeSelect.bind(this)}
                key={currentComp.id}
                comp={currentComp}
                selected={this.props.state.currentComponent == currentComp}
            >
                {categoryElements}
            </ContentTreeElement>
        );
    }

    nodeSelect(comp: PlaceableComponent, e: any) {
        this.props.dispatch({ currentComponent: comp });
    }
}

type ContentTreeElementProps = {
    children?: React.ReactNode;
    comp: PlaceableComponent;
    category?: string;
    selected: boolean;
    onElementSelect?: (comp: PlaceableComponent, e: any) => void;
};

type ContentTreeElementState = {
    expanded: boolean;
};

class ContentTreeElement extends React.Component<
    ContentTreeElementProps,
    ContentTreeElementState
> {
    constructor(props: ContentTreeElementProps) {
        super(props);

        this.toggleExpand = this.toggleExpand.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.onComponentUpdate = this.onComponentUpdate.bind(this);

        this.state = {
            expanded: true,
        };
    }

    render() {
        let classExtension = this.state.expanded ? " Expanded" : " Collapsed";
        let nameclassExtension =
            (this.props.onElementSelect ? " PointerCursor" : "") +
            (this.props.category ? " Unselectable" : "");
        let barClassExtension = this.props.selected ? " Selected" : "";

        let name = this.props.category
            ? this.props.category
            : this.props.comp.name;

        return (
            <div className="TreeElement">
                <div className={"TreeElementBar" + barClassExtension}>
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

    componentDidMount(): void {
        this.props.comp.onPropertyUpdateCallbacks.push(this.onComponentUpdate);
    }

    onComponentUpdate(handle: PropertyHandle<any>) {
        this.forceUpdate();
    }

    toggleExpand() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    handleSelect(e: any) {
        if (this.props.onElementSelect) {
            this.props.onElementSelect(this.props.comp, e);
        }
    }
}

export default withPageState(ContentTreeDisplay);
