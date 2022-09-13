import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { selectPictogramsReducer } from "./slice/selectPictogramsSlice";
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
    selectPictograms: selectPictogramsReducer,
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
