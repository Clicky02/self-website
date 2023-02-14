import { placeableComponents } from "creator/base/PlaceableComponent";
import Module from "./Module/Module";
import TestButton from "./test/TestButton/TestButton";
import PlaceableLinkButton from "./Buttons/LinkButton/PlaceableLinkButton";

placeableComponents["Test Button"] = TestButton;
placeableComponents["Link Button"] = PlaceableLinkButton;
placeableComponents["Module"] = Module;
