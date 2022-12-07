import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import {
  userLoginActionCreator,
  userLogOutActionCreator,
} from "../app/slice/userSlice";
import {
  NamePasswordUserData,
  PasswordCodeData,
} from "../models/userInterface";
import { UiPayload, ModalType } from "../Types/interface";
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
    const modal: UiPayload = {
      modal: {
        show: setShow,
        message: setMessage,
        type: setType,
      },
      loading: false,
    };

    dispatch(uiModalShowActionCreator(modal));
  };

  const postRegister = async (dataForm: NamePasswordUserData) => {
    let isUserCreate;

    try {
      await axios.post(`${apiUrl}users/register`, dataForm);
      navigate("/login");
      isUserCreate = true;
      modalShow(true, "Si us plau, valideu el vostre correu electrònic.", "ok");
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

  const getConfirmationCode = async (code: string) => {
    let isValidConfirmationCode;
    try {
      await axios.get(`${apiUrl}users/email-verify/${code}`);
      modalShow(true, "El correu electònic s'ha validat correctament", "ok");
      navigate("/login");
      isValidConfirmationCode = true;
    } catch (error) {
      modalShow(true, "Error en la validació del correu", "error");
      navigate("/home");
      isValidConfirmationCode = false;
    }
    return isValidConfirmationCode;
  };

  const postForgot = async (dataForgot: { email: string }) => {
    let isForgot;
    try {
      await axios.post(`${apiUrl}users/forgot`, dataForgot);
      modalShow(
        true,
        "Si us plau, restabliu la vostra contrasenya desde l'enllaç al vostre correu electrònic.",
        "ok"
      );
      navigate("/login");
      isForgot = true;
    } catch (error) {
      modalShow(true, "Error en restablir", "error");
      navigate("/home");
      isForgot = false;
    }
    return isForgot;
  };

  const patchReset = async (dataForgot: PasswordCodeData) => {
    let isReset;
    try {
      await axios.patch(`${apiUrl}users/reset`, dataForgot);
      modalShow(true, "Contrasenya restablerta correctament", "ok");
      navigate("/login");
      isReset = true;
    } catch (error) {
      modalShow(true, "Error en restablir la contrasenya", "error");
      navigate("/home");
      isReset = false;
    }
    return isReset;
  };
  return {
    postRegister,
    getConfirmationCode,
    postLogin,
    userLogout,
    putReset: patchReset,
    postForgot,
  };
};

export default useUser;
