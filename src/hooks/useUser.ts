import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import {
  userLoginActionCreator,
  userLogOutActionCreator,
} from "../app/slice/userSlice";
import { NamePasswordUserData } from "../models/userInterface";
import { ModalPayload, ModalType } from "../Types/interface";
import { decodeToken } from "../utils/auth";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalShow = (
    setShow: boolean,
    setMessage: string,
    setType: ModalType
  ) => {
    const modal: ModalPayload = {
      show: setShow,
      message: setMessage,
      type: setType,
    };

    dispatch(uiModalShowActionCreator(modal));
  };

  const postRegister = async (dataForm: NamePasswordUserData) => {
    let isUserCreate;

    try {
      await axios.post(`${apiUrl}users/register`, dataForm);
      navigate("/login");
      isUserCreate = true;
      modalShow(true, "Usuari creat correctament", "ok");
    } catch (error) {
      modalShow(true, "Usuari o contrasenya invàlids", "error");
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
      navigate("/home");
    } catch (error) {
      modalShow(true, "Usuari o contrasenya invàlids", "error");
      isUserLogin = false;
      return isUserLogin;
    }

    return isUserLogin;
  };

  const userLogout = () => {
    dispatch(userLogOutActionCreator());
    localStorage.clear();
    navigate("/home");
  };

  return { postRegister, postLogin, userLogout };
};

export default useUser;
