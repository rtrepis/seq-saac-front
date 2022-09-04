import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { userLoginActionCreator } from "../app/userSlice";
import { NamePasswordUserData } from "../models/userInterface";
import { decodeToken } from "../utils/auth";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const dispatch = useDispatch();

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

  const postLogin = async (dataForm: NamePasswordUserData) => {
    let isUserLogin;

    try {
      const {
        data: { user },
      }: AxiosResponse = await axios.post(`${apiUrl}users/login`, dataForm);

      localStorage.setItem("userToken", user.token);

      const userLogged = decodeToken(user.token);
      dispatch(userLoginActionCreator(userLogged));
      isUserLogin = true;
    } catch (error) {
      isUserLogin = false;
      return isUserLogin;
    }

    return isUserLogin;
  };

  return { postRegister, postLogin };
};

export default useUser;
