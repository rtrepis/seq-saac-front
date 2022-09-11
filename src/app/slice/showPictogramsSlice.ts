import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pictogram, Pictograms } from "../../Types/interface";

const showPictogramsInitialState: Pictograms = [0];

const showPictogramsSlice = createSlice({
  name: "showPictograms",
  initialState: showPictogramsInitialState,
  reducers: {
    loadShowPictograms: (
      previousRobots,
      action: PayloadAction<[Pictogram]>
    ) => [...action.payload],
  },
});

export const showPictogramsReducer = showPictogramsSlice.reducer;

export const { loadShowPictograms: loadShowPictogramsActionCreator } =
  showPictogramsSlice.actions;
