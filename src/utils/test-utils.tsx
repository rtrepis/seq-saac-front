import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "../app/userSlice";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const render = (
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: { user: userReducer },
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

export * from "@testing-library/react";
export { render, Wrapper };
