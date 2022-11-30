import RegisterFormik from "../../components/RegisterFormik/RegisterFormik";
import Navigation from "../../components/Navigation/Navigation";

const RegisterFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation page="Registrar-se" linkPage="register" />
      <RegisterFormik />
    </>
  );
};
export default RegisterFormPage;
