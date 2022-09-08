import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PreloadedState, WrapperProps } from "../../Types/interfaceTest";

const renderUserStore = (
  ui: JSX.Element,
  {
    store,
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
export { renderUserStore };
