import LoginFormik from "../../components/LoginFormik/LoginFormik";
import Navigation from "../../components/Navigation/Navigation";

const LoginFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation page="Inicia sessió" linkPage="login" />
      <LoginFormik />
    </>
  );
};
export default LoginFormPage;
