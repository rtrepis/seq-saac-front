import axios from "axios";
import InitialUserData from "../types/userInterface";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const postRegister = async (dataForm: InitialUserData) => {
    try {
      await axios.post(`${apiUrl}users/register`, dataForm);
    } catch (error) {}
  };
  return { postRegister };
};

export default useUser;
