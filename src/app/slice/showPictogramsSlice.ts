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
    createShowPictograms: (
      previousShowPictograms,
      action: PayloadAction<Pictogram>
    ) => [...previousShowPictograms, action.payload],
  },
});

export const showPictogramsReducer = showPictogramsSlice.reducer;

export const {
  loadShowPictograms: loadShowPictogramsActionCreator,
  createShowPictograms: createShowPictogramsActionCreator,
} = showPictogramsSlice.actions;
