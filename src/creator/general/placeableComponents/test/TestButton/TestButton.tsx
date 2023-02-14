import { withPageState } from "creator/base/Page/PageContext";
import PlaceableComponent from "creator/base/PlaceableComponent";
import ColorPropertyHandle from "creator/general/propertyHandlers/ColorPropertyHandle";
import OptionMapPropertyHandler, { OptionMap } from "creator/general/propertyHandlers/OptionMapPropertyHandler";
import StringPropertyHandle from "creator/general/propertyHandlers/StringPropertyHandle";
import "./TestButton.css";

class TestButton extends PlaceableComponent {
    textProp: StringPropertyHandle;
    colorProp: ColorPropertyHandle;

    constructor(props: any) {
        super(props, "Test Button");

        this.textProp = new StringPropertyHandle("Button Text", this, "", true);
        this.addHandle(this.textProp);

        this.colorProp = new ColorPropertyHandle("Text Color", this, "#000000");
        this.addHandle(this.colorProp);

        // let colorOptionMap = new OptionMap({
        //     Red: "#ff0000",
        //     Green: "#00ff00",
        //     Blue: "#0000ff",
        // });
        // this.colorProp = new OptionMapPropertyHandler(
        //     "buttonColor",
        //     this,
        //     colorOptionMap
        // );
        // this.addHandle(this.colorProp);
    }

    render() {
        return (
            <button className="StylizedButton AccentText NoSelect" style={{ color: this.colorProp.getPropertyValue() }}>
                {this.textProp.getDOMElement()}
            </button>
        );
    }
}

export default withPageState(TestButton);
