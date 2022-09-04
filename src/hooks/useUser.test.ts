import { renderHook } from "@testing-library/react";
import NamePasswordUserData from "../types/userInterface";
import useUser from "./useUser";

describe("Given the useUser hook", () => {
  describe("When postRegister it's called with a correct userHook", () => {
    test("Then should return isUserCreate true", async () => {
      const userHook: NamePasswordUserData = {
        userName: "Test",
        password: "1234",
      };
      const { result } = renderHook(() => useUser());
      const expectIsUserCreate = true;

      const resultPost = await result.current.postRegister(userHook);

      expect(resultPost).toBe(expectIsUserCreate);
    });
  });

  describe("When postRegister it's called with a invalid userHook", () => {
    test("Then should return isUserCreate false", async () => {
      const userHook: NamePasswordUserData = {
        userName: "",
        password: "",
      };
      const { result } = renderHook(() => useUser());
      const expectIsUserCreate = false;

      const resultPost = await result.current.postRegister(userHook);

      expect(resultPost).toBe(expectIsUserCreate);
    });
  });

  describe("When postLogin it's called with a correct userHook", () => {
    test("Then should return isUserLogin true", async () => {
      const userHook: NamePasswordUserData = {
        userName: "Test",
        password: "1234",
      };
      const { result } = renderHook(() => useUser());
      const expectIsUserLogin = true;

      const resultPost = await result.current.postLogin(userHook);

      expect(resultPost).toBe(expectIsUserLogin);
    });
  });

  describe("When postLogin it's called with a invalid userHook", () => {
    test("Then should return isUserCreate false", async () => {
      const userHook: NamePasswordUserData = {
        userName: "",
        password: "",
      };
      const { result } = renderHook(() => useUser());
      const expectIsUserLogin = false;

      const resultPost = await result.current.postLogin(userHook);

      expect(resultPost).toBe(expectIsUserLogin);
    });
  });
});
