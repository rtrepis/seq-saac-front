import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "../../app/slice/userSlice";
import { BrowserRouter } from "react-router-dom";
import { uiReducer } from "../../app/slice/uiSlice";
import { PreloadedState, WrapperProps } from "../../Types/interfaceTest";
import { sequencesReducer } from "../../app/slice/sequencesSlice";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "react-bootstrap";
import { showPictogramsReducer } from "../../app/slice/showPictogramsSlice";
import { selectPictogramsReducer } from "../../app/slice/selectPictogramsSlice";

const renderUser = (
  ui: JSX.Element,
  {
    store = configureStore({
      reducer: {
        user: userReducer,
        ui: uiReducer,
        sequences: sequencesReducer,
        showPictograms: showPictogramsReducer,
        selectPictograms: selectPictogramsReducer,
      },
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
        <BrowserRouter>
          <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
          >
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  };
  return act(() => {
    rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  });
};

export * from "@testing-library/react";
export { renderUser, rtlRender };
