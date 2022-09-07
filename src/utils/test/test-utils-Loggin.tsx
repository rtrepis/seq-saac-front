import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "../../app/slice/userSlice";
import { BrowserRouter } from "react-router-dom";
import { uiReducer } from "../../app/slice/uiSlice";
import { PreloadedState, WrapperProps } from "../../Types/interfaceTest";

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
  }: { preloadedState?: PreloadedState; store?: any } = {}
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
export { renderUser };
