import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sequences } from "../../models/sequencesInterface";

const sequenceInitialState: Sequences[] = [
  { id: "", name: "", owner: "", pictograms: [], private: false },
];

const sequenceSlice = createSlice({
  name: "sequences",
  initialState: sequenceInitialState,
  reducers: {
    loadSequences: (previousSequences, action: PayloadAction<Sequences[]>) => [
      ...action.payload,
    ],
    createSequences: (previousSequences, action: PayloadAction<Sequences>) => [
      ...previousSequences,
      action.payload,
    ],
  },
});

export const sequencesReducer = sequenceSlice.reducer;

export const {
  loadSequences: loadSequencesActionCreator,
  createSequences: createSequencesActionCreator,
} = sequenceSlice.actions;
