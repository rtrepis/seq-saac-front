import FormFormik from "../../components/FormFormik/FormFormik";
import Navigation from "../../components/Navigation/Navigation";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation page="Registrar-se" linkPage="register" />
      <RegisterForm />
      <FormFormik />
    </>
  );
};
export default RegisterFormPage;
