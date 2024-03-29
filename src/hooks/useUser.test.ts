import { waitFor, renderHook } from "@testing-library/react";
import { NamePasswordUserData } from "../models/userInterface";
import useUser from "./useUser";
import { Wrapper } from "../utils/test/test-utils-Logout";
import { previousUiPayload } from "../utils/test/payloads/previousUiPayload";

const mockDispatch = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given the useUser hook", () => {
  describe("When postRegister it's called with a correct User", () => {
    test("Then should return ok expect modal", async () => {
      const userHook: NamePasswordUserData = {
        userName: "Test",
        password: "1234",
      };

      const expectPayLoadModalShow = {
        payload: {
          message: "Si us plau, valideu el vostre correu electrònic.",
          show: true,
          type: "ok",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await waitFor(() => result.current.postRegister(userHook));

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When postRegister it's called with a invalid User", () => {
    test("Then should return error expect modal", async () => {
      const userHook: NamePasswordUserData = {
        userName: "",
        password: "",
      };
      const expectPayLoadModalShow = {
        payload: {
          message: "Usuari o contrasenya invàlids",
          show: true,
          type: "error",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });
      await waitFor(() => result.current.postRegister(userHook));

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When postLogin it's called with a correct User", () => {
    test("Then should return ok expect modal", async () => {
      const userHook: NamePasswordUserData = {
        userName: "Test",
        password: "1234",
      };
      const expectRedirectPath = "/home";
      const expectPayLoadLogin = {
        payload: {
          id: "63dd8d7566b51ee0f8d7befd",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGQ4ZDc1NjZiNTFlZTBmOGQ3YmVmZCIsInVzZXJOYW1lIjoiVGVzdCIsImlhdCI6MTY3NTQ2NDE3OX0.bnTMLJmkapoRjeYzuFEeyrDCjN9QiJDemH8qnLVeZPg",
          userName: "Test",
        },
        type: "user/userLoginAction",
      };

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await waitFor(() => result.current.postLogin(userHook));

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadLogin);
      expect(mockedUsedNavigate).toHaveBeenCalledWith(expectRedirectPath);
    });
  });

  describe("When postLogin it's called with a correct userHook and not confirmation code", () => {
    test("Then should return isUserLogin true", async () => {
      const userHook: NamePasswordUserData = {
        userName: "Test",
        password: "notVerifyEmail",
      };
      const expectPayLoadModalShow = {
        payload: {
          message: "Reviseu el correu, si us plau",
          show: true,
          type: "ok",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });
      await waitFor(() => result.current.postLogin(userHook));

      expect(mockDispatch).toBeCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When postLogin it's called with a invalid userHook", () => {
    test("Then should return isUserLogin false", async () => {
      const userHook: NamePasswordUserData = {
        userName: "",
        password: "",
      };
      const expectPayLoadModalShow = {
        payload: {
          message: "Usuari o contrasenya invàlids",
          show: true,
          type: "error",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await waitFor(() => result.current.postLogin(userHook));

      expect(mockDispatch).toBeCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When userLogout it's called", () => {
    test("Then should localStorage is empty", async () => {
      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });
      localStorage.setItem("userToken", "UserNameTest");

      await waitFor(() => result.current.userLogout());
      const localStoreState = localStorage.getItem("userToken");

      expect(localStoreState).toBe(null);
    });
  });

  describe("When getConfirmationCode it's called with valid code", () => {
    test("Then should show ok modal", async () => {
      const confirmationCode = "validConfirmationCode";

      const expectPayLoadModalShow = {
        payload: {
          message: "El correu electònic s'ha validat correctament",
          show: true,
          type: "ok",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), { wrapper: Wrapper });
      await waitFor(() => result.current.getConfirmationCode(confirmationCode));

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When getConfirmationCode it's called with inValid code", () => {
    test("Then should show ok modal", async () => {
      const confirmationCode = "inValidConfirmationCode";
      const expectPayLoadModalShow = {
        payload: {
          message: "Error en la validació del correu",
          show: true,
          type: "error",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), { wrapper: Wrapper });
      await waitFor(() => result.current.getConfirmationCode(confirmationCode));

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When postForgot it's called with valid email", () => {
    test("Then should show expect ok modal", async () => {
      const testEmail = "valid@email.com";
      const expectPayLoadModalShow = {
        payload: {
          message:
            "Si us plau, restabliu la vostra contrasenya desde l'enllaç al vostre correu electrònic.",
          show: true,
          type: "ok",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), { wrapper: Wrapper });
      await waitFor(() => result.current.postForgot({ email: testEmail }));

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When postForgot it's called with invalid email", () => {
    test("Then should show expect ok modal", async () => {
      const testEmail = "invalid@email.com";
      const expectPayLoadModalShow = {
        payload: {
          message: "Error en restablir la contrasenya",
          show: true,
          type: "error",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), { wrapper: Wrapper });
      await waitFor(() => result.current.postForgot({ email: testEmail }));

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When patchReset it's called with password and valid code", () => {
    test("Then should show expect ok modal", async () => {
      const testCode = "validCode";
      const testPassword = "newPassword";

      const expectPayLoadModalShow = {
        payload: {
          message: "Contrasenya s'ha restablerta correctament",
          show: true,
          type: "ok",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), { wrapper: Wrapper });
      await waitFor(() =>
        result.current.patchReset({ password: testPassword, code: testCode })
      );

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When patchReset it's called with password and invalid code", () => {
    test("Then should show expect ok modal", async () => {
      const testCode = "invalidCode";
      const testPassword = "newPassword";

      const expectPayLoadModalShow = {
        payload: {
          message: "Error en restablir la contrasenya",
          show: true,
          type: "error",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useUser(), { wrapper: Wrapper });
      await waitFor(() =>
        result.current.patchReset({ password: testPassword, code: testCode })
      );

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });
});
