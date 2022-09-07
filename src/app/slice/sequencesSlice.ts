import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Sequences,
  SequenceInitialState,
} from "../../models/sequencesInterface";

const sequenceInitialState: SequenceInitialState = [];

const sequenceSlice = createSlice({
  name: "sequences",
  initialState: sequenceInitialState,
  reducers: {
    loadSequences: (previousRobots, action: PayloadAction<Sequences[]>) => [
      ...action.payload,
    ],
  },
});

export const sequencesReducer = sequenceSlice.reducer;

export const { loadSequences: loadSequencesActionCreator } =
  sequenceSlice.actions;
