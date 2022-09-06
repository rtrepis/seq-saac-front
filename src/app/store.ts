import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { sequenceReducer } from "./sequenceSlice";
import { uiReducer } from "./uiSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    sequences: sequenceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
