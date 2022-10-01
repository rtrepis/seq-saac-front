import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sequences } from "../../models/sequencesInterface";

const sequenceInitialState: Sequences[] = [];

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
    deleteSequenceId: (previousSequences, action: PayloadAction<string>) =>
      previousSequences.filter((sequences) => sequences.id !== action.payload),
  },
});

export const sequencesReducer = sequenceSlice.reducer;

export const {
  loadSequences: loadSequencesActionCreator,
  createSequences: createSequencesActionCreator,
  deleteSequenceId: deleteSequenceIdActionCreator,
} = sequenceSlice.actions;
