import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { sequencesReducer } from "./slice/sequencesSlice";
import { showPictogramsReducer } from "./slice/showPictogramsSlice";
import { uiReducer } from "./slice/uiSlice";
import { userReducer } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    sequences: sequencesReducer,
    showPictograms: showPictogramsReducer,
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
