import LoginForm from "../../components/LoginForm/LoginForm";
import Navigation from "../../components/Navigation/Navigation";

const LoginFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation page="Inicia sessió" linkPage="login" />
      <LoginForm />
    </>
  );
};
export default LoginFormPage;
