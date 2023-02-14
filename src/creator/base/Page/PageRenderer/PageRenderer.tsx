import React from "react";
import Inspector from "creator/base/Inspector/Inspector";
import "./PageRenderer.css";
import Page from "../Page";
import {
    defaultPageState,
    withUseReducer,
    pageStateContext,
    dispatchStateContext,
    PageState,
} from "../PageContext";

export type PageStateProps = {
    state: PageState;
    dispatch: React.Dispatch<any>;
};

class PageRenderer extends React.Component<PageStateProps> {
    // constructor(props: any) {
    //     super(props);
    // }

    render() {
        return (
            <pageStateContext.Provider value={this.props.state}>
                <dispatchStateContext.Provider value={this.props.dispatch}>
                    <Inspector />
                    <Page />
                </dispatchStateContext.Provider>
            </pageStateContext.Provider>
        );
    }
}

export default withUseReducer(
    (state: any, newValue: any) => ({ ...state, ...newValue }),
    defaultPageState
)(PageRenderer);
