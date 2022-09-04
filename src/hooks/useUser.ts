import axios from "axios";
import NamePasswordUserData from "../types/userInterface";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const postRegister = async (dataForm: NamePasswordUserData) => {
    let isUserCreate;

    try {
      await axios.post(`${apiUrl}users/register`, dataForm);
      isUserCreate = true;
    } catch (error) {
      isUserCreate = false;
      return isUserCreate;
    }
    return isUserCreate;
  };

  const postLogIn = async (dataForm: NamePasswordUserData) => {
    let isUserLogin;

    try {
      await axios.post(`${apiUrl}users/login`, dataForm);
      isUserLogin = true;
    } catch (error) {
      isUserLogin = false;
    }
    return isUserLogin;
  };

  return { postRegister, postLogIn };
};

export default useUser;
