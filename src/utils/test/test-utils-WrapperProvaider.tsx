import { Provider } from "react-redux";
import { store } from "../../app/store";
import { WrapperProps } from "../../Types/interfaceTest";

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
