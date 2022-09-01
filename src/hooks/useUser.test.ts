import { renderHook } from "@testing-library/react";
import InitialUserData from "../types/userInterface";
import useUser from "./useUser";

describe("Given the useUser hook", () => {
  describe("When postRegister it's called with a userHook", () => {
    test("Then should return true", async () => {
      const userHook: InitialUserData = {
        userName: "Test",
        password: "1234",
      };
      const { result } = renderHook(() => useUser());
      const expectIsUserCreate = true;

      const resultPost = await result.current.postRegister(userHook);

      expect(resultPost).toBe(expectIsUserCreate);
    });
  });

  describe("When postRegister it's called with a invalid user", () => {
    test("Then should return false", async () => {
      const userHook: InitialUserData = {
        userName: "",
        password: "",
      };
      const { result } = renderHook(() => useUser());
      const expectIsUserCreate = false;

      const resultPost = await result.current.postRegister(userHook);

      expect(resultPost).toBe(expectIsUserCreate);
    });
  });
});
