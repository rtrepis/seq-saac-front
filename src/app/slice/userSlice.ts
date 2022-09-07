import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogged } from "../../models/userInterface";

export const userInitialState: UserLogged = {
  id: "",
  token: "",
  userName: "",
};

const usersSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userLoginAction: (previousUsers, action: PayloadAction<UserLogged>) =>
      action.payload,
    userLogOutAction: (previousUsers) => userInitialState,
  },
});

export const userReducer = usersSlice.reducer;

export const {
  userLoginAction: userLoginActionCreator,
  userLogOutAction: userLogOutActionCreator,
} = usersSlice.actions;
