import RegisterFormik from "../../components/user/RegisterFormik/RegisterFormik";
import Navigation from "../../components/ui/Navigation/Navigation";

const RegisterFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation linkPage="register" />
      <RegisterFormik />
    </>
  );
};
export default RegisterFormPage;
