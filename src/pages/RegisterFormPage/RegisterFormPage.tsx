import FormFormik from "../../components/FormFormik/FormFormik";
import Navigation from "../../components/Navigation/Navigation";

const RegisterFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation page="Registrar-se" linkPage="register" />
      <FormFormik />
    </>
  );
};
export default RegisterFormPage;
