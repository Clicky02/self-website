import React from "react";
import PropertyHandle from "creator/base/PropertyHandle";
import InspectorRow from "creator/base/Inspector/Row/InspectorRow";
import PlaceableComponent from "creator/base/PlaceableComponent";
import "./StringPropertyHandle.css";

class StringPropertyHandle extends PropertyHandle<string> {
    inspectorElement: React.ReactNode;
    inspectorElementRef: React.RefObject<any>;

    focused: boolean = false;
    allowNewLine: boolean;

    constructor(
        propertyName: string,
        attachedComponent: PlaceableComponent,
        initialValue: string | undefined = undefined,
        allowNewLine: boolean = false
    ) {
        super("string", propertyName, attachedComponent, initialValue || "");

        this.allowNewLine = allowNewLine;

        this.inspectorElementRef = React.createRef();
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeDOMText = this.onChangeDOMText.bind(this);
        this.onDOMFocus = this.onDOMFocus.bind(this);
    }

    getInspectorElement(): React.ReactNode | null {
        return (
            <InspectorRow
                title={this.propertyName}
                key={this.getKey()}
                inline={!this.allowNewLine}
            >
                {!this.allowNewLine ? (
                    <input
                        type="text"
                        className="textInput"
                        onChange={this.onChangeText}
                        defaultValue={this.value}
                    />
                ) : (
                    <div
                        className="editableText textInput"
                        contentEditable
                        suppressContentEditableWarning={true}
                        onInput={this.onChangeDOMText}
                        onFocus={this.onDOMFocus}
                        onBlur={this.onPropertyChange.bind(this)}
                        dangerouslySetInnerHTML={{
                            __html: this.value,
                        }}
                    ></div>
                )}
            </InspectorRow>
        );
    }

    getDOMElement(): React.ReactNode {
        return (
            <div
                className="editableText"
                contentEditable
                suppressContentEditableWarning={true}
                onInput={this.onChangeDOMText}
                onFocus={this.onDOMFocus}
                onBlur={this.onPropertyChange.bind(this)}
                dangerouslySetInnerHTML={{
                    __html:
                        this.value == ""
                            ? "Click Here to Edit Text"
                            : this.value,
                }}
            ></div>
        );
    }

    onChangeText(e: any): void {
        console.log(8);
        this.value = e.target.value;
        this.onPropertyChange();
    }

    onChangeDOMText(e: any): void {
        this.value = e.target.innerHTML;
        //
    }

    onDOMFocus(e: any): void {
        let a = document.getElementById("");

        if (this.value === "") {
            e.target.innerHTML = "";

            setTimeout(() => {
                e.target.focus();

                var range = document.createRange();
                var sel = window.getSelection();

                if (sel) {
                    range.setStart(e.target, 0);
                    range.collapse(true);

                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            });
        }
    }
}

export default StringPropertyHandle;
