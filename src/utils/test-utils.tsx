import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "../app/userSlice";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import { uiReducer } from "../app/uiSlice";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const render = (
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: { user: userReducer, ui: uiReducer },
      preloadedState,
    }),
    ...renderOptions
  }: { preloadedState?: any; store?: any } = {}
) => {
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default Wrapper;

const renderUser = (
  ui: JSX.Element,
  {
    store = configureStore({
      reducer: { user: userReducer, ui: uiReducer },
      preloadedState: {
        user: {
          id: "",
          userName: "UserTest",
          token: "456356",
        },
      },
    }),
    ...renderOptions
  }: { preloadedState?: any; store?: any } = {}
) => {
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render, Wrapper, renderUser };
