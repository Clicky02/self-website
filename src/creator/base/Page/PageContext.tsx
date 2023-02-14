import React from "react";
import PlaceableComponent from "../PlaceableComponent";

export type PageState = {
    currentId: number;
    rootComponent?: PlaceableComponent;
    currentComponent?: PlaceableComponent;
};

export const defaultPageState: PageState = {
    currentId: 1,
    rootComponent: undefined,
    currentComponent: undefined,
};

export const pageStateContext = React.createContext(defaultPageState);
export const dispatchStateContext = React.createContext<any>(undefined);

export const withPageState =
    (Component: typeof React.Component) => (props: any) => {
        let state = React.useContext(pageStateContext);
        let dispatch = React.useContext(dispatchStateContext);

        return <Component {...props} {...{ state, dispatch }} />;
    };

export const withUseReducer =
    (...useReducerArgs: [any, any]) =>
    (Component: typeof React.Component) =>
    (props: any) => {
        const [state, dispatch] = React.useReducer(...useReducerArgs);

        return <Component {...props} {...{ state, dispatch }} />;
    };
