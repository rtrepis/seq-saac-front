import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pictogram, Pictograms } from "../../Types/interface";

const showPictogramsInitialState: Pictograms = [];

const showPictogramsSlice = createSlice({
  name: "showPictograms",
  initialState: showPictogramsInitialState,
  reducers: {
    loadShowPictograms: (
      previousShowPictograms,
      action: PayloadAction<[Pictogram]>
    ) => [...action.payload],
  },
});

export const showPictogramsReducer = showPictogramsSlice.reducer;

export const { loadShowPictograms: loadShowPictogramsActionCreator } =
  showPictogramsSlice.actions;
