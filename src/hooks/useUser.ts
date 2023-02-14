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
import { ModalType, ModalI } from "../Types/interface";
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
    const modal: ModalI = {
      show: setShow,
      message: setMessage,
      type: setType,
    };

    dispatch(uiModalShowActionCreator(modal));
  };

  const postRegister = async (dataForm: NamePasswordUserData) => {
    try {
      await axios.post(`${apiUrl}users/register`, dataForm);
      navigate("/login");
      modalShow(true, "Si us plau, valideu el vostre correu electrònic.", "ok");
    } catch (error) {
      modalShow(true, "Usuari o contrasenya invàlids", "error");
    }
  };

  const postLogin = async (dataForm: NamePasswordUserData) => {
    try {
      const {
        data: { user },
      }: AxiosResponse = await axios.post(`${apiUrl}users/login`, dataForm);

      localStorage.setItem("userToken", user.token);

      const userLogged = decodeToken(user.token);
      dispatch(userLoginActionCreator(userLogged));
      navigate("/home");
    } catch (error: any) {
      error.response.data.error === "verify email, please"
        ? modalShow(true, "Reviseu el correu, si us plau", "ok")
        : modalShow(true, "Usuari o contrasenya invàlids", "error");
    }
  };

  const userLogout = () => {
    dispatch(userLogOutActionCreator());
    localStorage.clear();
    navigate("/home");
  };

  const getConfirmationCode = async (code: string) => {
    try {
      await axios.get(`${apiUrl}users/email-verify/${code}`);
      modalShow(true, "El correu electònic s'ha validat correctament", "ok");
      navigate("/login");
    } catch (error) {
      modalShow(true, "Error en la validació del correu", "error");
      navigate("/home");
    }
  };

  const postForgot = async (dataForgot: { email: string }) => {
    try {
      await axios.post(`${apiUrl}users/forgot`, dataForgot);

      modalShow(
        true,
        "Si us plau, restabliu la vostra contrasenya desde l'enllaç al vostre correu electrònic.",
        "ok"
      );
      navigate("/login");
    } catch (error) {
      modalShow(true, "Error en restablir la contrasenya", "error");
      navigate("/home");
    }
  };

  const patchReset = async (dataReset: PasswordCodeData) => {
    try {
      await axios.patch(`${apiUrl}users/reset`, dataReset);
      modalShow(true, "Contrasenya s'ha restablerta correctament", "ok");
      navigate("/login");
    } catch (error) {
      modalShow(true, "Error en restablir la contrasenya", "error");
      navigate("/home");
    }
  };
  return {
    postRegister,
    getConfirmationCode,
    postLogin,
    userLogout,
    patchReset,
    postForgot,
  };
};

export default useUser;
