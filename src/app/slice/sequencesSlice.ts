import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SequencesI } from "../../models/sequencesInterface";

const sequenceInitialState: SequencesI[] = [];

const sequenceSlice = createSlice({
  name: "sequences",
  initialState: sequenceInitialState,
  reducers: {
    loadSequences: (previousSequences, action: PayloadAction<SequencesI[]>) => [
      ...action.payload,
    ],
    createSequences: (previousSequences, action: PayloadAction<SequencesI>) => [
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
