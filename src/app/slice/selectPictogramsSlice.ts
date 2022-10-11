import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectPictogram } from "../../models/sequencesInterface";

const selectPictogramsInitialState: SelectPictogram[] = [];

const selectPictogramsSlice = createSlice({
  name: "selectPictograms",
  initialState: selectPictogramsInitialState,
  reducers: {
    addSelectPictogram: (
      previousSelectPictogram,
      action: PayloadAction<SelectPictogram>
    ) => [...previousSelectPictogram, action.payload],

    deleteSelectPictogram: (previousSelectPictogram) => [
      ...previousSelectPictogram.slice(0, -1),
    ],

    restSelectPictograms: (previousSelectPictogram) => [
      ...previousSelectPictogram.slice(0, 0),
    ],

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

    loadAllSelectPictogram: (
      previousSelectPictogram,
      action: PayloadAction<SelectPictogram[]>
    ) => [...action.payload],
  },
});

export const selectPictogramsReducer = selectPictogramsSlice.reducer;

export const {
  addSelectPictogram: addSelectPictogramActionCreator,
  updateSelectPictogram: updateSelectPictogramActionCreator,
  deleteSelectPictogram: deleteSelectPictogramActionCreator,
  restSelectPictograms: restSelectPictogramsActionCreator,
  loadAllSelectPictogram: loadAllSelectPictogramActionCreator,
} = selectPictogramsSlice.actions;
