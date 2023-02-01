import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginFormPage from "./pages/LoginFormPage/LoginFormPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActionCreator } from "./app/slice/userSlice";
import { decodeToken } from "./utils/auth";
import ModalCenter from "./components/ui/ModalCenter/ModalCenter";
import { RootState } from "./app/store";
import MySequencePage from "./pages/MySequencesPages/MySequencesPages";
import DetailsSequencePage from "./pages/DetailsSequencePage/DetailsSequencePage";
import CreateSequencePage from "./pages/CreateSequencePage/CreateSequencePage";
import EditSequencePage from "./pages/EditSequencePage/EditSequencePage";
import { useEffect } from "react";
import ValidateEmailPage from "./pages/ValidateEmailPage/ValidateEmailPage";
import TermesPage from "./pages/TermesPage/TermesPage";
import ForgotPage from "./pages/ForgotPage/ForgotPage";
import Footer from "./components/ui/Footer/Footer";
import RequireAuth from "./components/user/RequireAuth/RequireAuth";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isUserLogged = localStorage.getItem("userToken");
    if (isUserLogged != null) {
      const userLogged = decodeToken(isUserLogged);
      dispatch(userLoginActionCreator(userLogged));
    }
  }, [dispatch]);

  const {
    ui: { modal },
    user: { userName },
  } = useSelector((state: RootState) => state);

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
        <Route
          path="/my-sequences"
          element={
            <RequireAuth isLogged={userName}>
              <MySequencePage />
            </RequireAuth>
          }
        />

        <Route path="/details-sequence/:id" element={<DetailsSequencePage />} />
        <Route
          path="/create-sequence"
          element={
            <RequireAuth isLogged={userName}>
              <CreateSequencePage />
            </RequireAuth>
          }
        />
        <Route
          path="/edit-sequence/:id"
          element={
            <RequireAuth isLogged={userName}>
              <EditSequencePage />
            </RequireAuth>
          }
        />
        <Route path="/email-verify/:code" element={<ValidateEmailPage />} />
        <Route path="/forgot/:code" element={<ForgotPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/terms" element={<TermesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
