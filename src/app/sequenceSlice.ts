import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sequence, SequenceInitialState } from "../models/userSequences";

const sequenceInitialState: SequenceInitialState = [];

const sequenceSlice = createSlice({
  name: "sequence",
  initialState: sequenceInitialState,
  reducers: {
    loadSequence: (previousRobots, action: PayloadAction<Sequence[]>) => [
      ...action.payload,
    ],
  },
});

export const sequenceReducer = sequenceSlice.reducer;

export const { loadSequence: loadSequenceActionCreator } =
  sequenceSlice.actions;
