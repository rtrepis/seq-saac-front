import Navigation from "../../components/Navigation/Navigation";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation page="Registrar-se" linkPage="register" />
      <RegisterForm />
    </>
  );
};
export default RegisterFormPage;
