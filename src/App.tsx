import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginFormPage from "./pages/LoginFormPage/LoginFormPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActionCreator } from "./app/slice/userSlice";
import { decodeToken } from "./utils/auth";
import ModalCenter from "./components/ModalCenter/ModalCenter";
import { RootState } from "./app/store";
import MySequencePage from "./pages/MySequencesPages/MySequencesPages";
import DetailsSequencePage from "./pages/DetailsSequencePage/DetailsSequencePage";
import CreateSequencePage from "./pages/CreateSequencePage/CreateSequencePage";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  const isUserLogged = localStorage.getItem("userToken");
  if (isUserLogged != null) {
    const userLogged = decodeToken(isUserLogged);
    dispatch(userLoginActionCreator(userLogged));
  }

  const { message, show, type } = useSelector((state: RootState) => state.ui);

  return (
    <>
      <ModalCenter show={show} type={type} message={message} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/my-sequences" element={<MySequencePage />} />
        <Route path="/details-sequence/:id" element={<DetailsSequencePage />} />
        <Route path="/create-sequence" element={<CreateSequencePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
