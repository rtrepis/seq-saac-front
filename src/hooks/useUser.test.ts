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
          ...previousUiPayload,
          modal: {
            message: "Si us plau, valideu el vostre correu electrònic.",
            show: true,
            type: "ok",
          },
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
          ...previousUiPayload,
          modal: {
            message: "Usuari o contrasenya invàlids",
            show: true,
            type: "error",
          },
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
      const expectPayLoadModalShow = {
        payload: {
          ...previousUiPayload,
          modal: {
            message: "Usuari creat correctament",
            show: true,
            type: "ok",
          },
        },
        type: "ui/uiModalShow",
      };
      const expectPayLoadLogin = {
        payload: {
          id: "631066cc4ba3839cebac2b42",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTA2NmNjNGJhMzgzOWNlYmFjMmI0MiIsInVzZXJOYW1lIjoiTWFyaWEiLCJpYXQiOjE2NjIyOTI5NTF9.30S4d21bbdSxb3g6Hes387gReNgjbIXYm3dyVd8UAdM",
          userName: "Maria",
        },
        type: "user/userLoginAction",
      };

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await waitFor(() => result.current.postLogin(userHook));

      expect(mockDispatch).toHaveBeenNthCalledWith(1, expectPayLoadLogin);
      expect(mockDispatch).toHaveBeenNthCalledWith(2, expectPayLoadModalShow);
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
          ...previousUiPayload,
          modal: {
            message: "Reviseu el correu, si us plau",
            show: true,
            type: "ok",
          },
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
          ...previousUiPayload,
          modal: {
            message: "Usuari o contrasenya invàlids",
            show: true,
            type: "error",
          },
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
          ...previousUiPayload,
          modal: {
            message: "El correu electònic s'ha validat correctament",
            show: true,
            type: "ok",
          },
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
          ...previousUiPayload,
          modal: {
            message: "Error en la validació del correu",
            show: true,
            type: "error",
          },
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
          ...previousUiPayload,
          modal: {
            message:
              "Si us plau, restabliu la vostra contrasenya desde l'enllaç al vostre correu electrònic.",
            show: true,
            type: "ok",
          },
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
          ...previousUiPayload,
          modal: {
            message: "Error en restablir la contrasenya",
            show: true,
            type: "error",
          },
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
          ...previousUiPayload,
          modal: {
            message: "Contrasenya s'ha restablerta correctament",
            show: true,
            type: "ok",
          },
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
          ...previousUiPayload,
          modal: {
            message: "Error en restablir la contrasenya",
            show: true,
            type: "error",
          },
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
