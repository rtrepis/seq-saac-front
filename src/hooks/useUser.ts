import axios from "axios";
import InitialUserData from "../types/userInterface";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const postRegister = async (dataForm: InitialUserData) => {
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
  return { postRegister };
};

export default useUser;
