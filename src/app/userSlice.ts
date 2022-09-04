import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogged } from "../models/userInterface";

export const usersInitialState: UserLogged = {
  id: "",
  token: "",
  userName: "",
};

const usersSlice = createSlice({
  name: "user",
  initialState: usersInitialState,
  reducers: {
    userLoginAction: (previousUsers, action: PayloadAction<UserLogged>) =>
      action.payload,
  },
});

export const userReducer = usersSlice.reducer;

export const { userLoginAction: userLoginActionCreator } = usersSlice.actions;
