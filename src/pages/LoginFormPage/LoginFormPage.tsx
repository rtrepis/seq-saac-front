import LoginFormik from "../../components/user/LoginFormik/LoginFormik";
import Navigation from "../../components/ui/Navigation/Navigation";

const LoginFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation linkPage="login" />
      <LoginFormik />
    </>
  );
};
export default LoginFormPage;
