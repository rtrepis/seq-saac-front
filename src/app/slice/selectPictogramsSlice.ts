import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectPictogram } from "../../models/sequencesInterface";

const selectPictogramsInitialState: SelectPictogram[] = [];

const selectPictogramsSlice = createSlice({
  name: "selectPictograms",
  initialState: selectPictogramsInitialState,
  reducers: {
    loadSelectPictograms: (
      previousSelectPictograms,
      action: PayloadAction<SelectPictogram[]>
    ) => [...action.payload],

    addSelectPictogram: (
      previousSelectPictogram,
      action: PayloadAction<SelectPictogram>
    ) => [...previousSelectPictogram, action.payload],

    updateSelectPictogram: (
      previousSelectPictogram,
      action: PayloadAction<SelectPictogram>
    ) => {
      return previousSelectPictogram.map((selectPictogram) =>
        selectPictogram.index === action.payload.index
          ? action.payload
          : selectPictogram
      );
    },
  },
});

export const selectPictogramsReducer = selectPictogramsSlice.reducer;

export const {
  loadSelectPictograms: loadSelectPictogramsActionCreator,
  addSelectPictogram: addSelectPictogramActionCreator,
  updateSelectPictogram: updateSelectPictogramActionCreator,
} = selectPictogramsSlice.actions;
