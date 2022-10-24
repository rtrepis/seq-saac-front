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
import EditSequencePage from "./pages/EditSequencePage/EditSequencePage";
import { useEffect } from "react";
import TryPage from "./pages/TryPage/TryPage";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isUserLogged = localStorage.getItem("userToken");
    if (isUserLogged != null) {
      const userLogged = decodeToken(isUserLogged);
      dispatch(userLoginActionCreator(userLogged));
    }
  }, [dispatch]);

  const { modal } = useSelector((state: RootState) => state.ui);

  return (
    <>
      <ModalCenter
        show={modal.show}
        type={modal.type}
        message={modal.message}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/my-sequences" element={<MySequencePage />} />
        <Route path="/details-sequence/:id" element={<DetailsSequencePage />} />
        <Route path="/create-sequence" element={<CreateSequencePage />} />
        <Route path="/edit-sequence/:id" element={<EditSequencePage />} />
        <Route path="/try" element={<TryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer className="text-center mt-5 p-4 bg-dark text-white">
        Els símbols pictogràfics utilitzats són propietat del Govern d'Aragó i
        han estat creats per Sergio Palao per a ARASAAC
        (http://www.arasaac.org), que els distribueix a Llicència Creative
        Commons BY-NC-SA.
      </footer>
    </>
  );
};

export default App;
