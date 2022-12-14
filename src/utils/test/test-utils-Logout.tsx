import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "../../app/slice/userSlice";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { uiReducer } from "../../app/slice/uiSlice";
import { PreloadedState, WrapperProps } from "../../Types/interfaceTest";
import { sequencesReducer } from "../../app/slice/sequencesSlice";
import { showPictogramsReducer } from "../../app/slice/showPictogramsSlice";
import { selectPictogramsReducer } from "../../app/slice/selectPictogramsSlice";

const render = (
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        user: userReducer,
        ui: uiReducer,
        sequences: sequencesReducer,
        showPictograms: showPictogramsReducer,
        selectPictograms: selectPictogramsReducer,
      },
      preloadedState,
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

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default Wrapper;

export * from "@testing-library/react";
export { render, Wrapper, rtlRender };
