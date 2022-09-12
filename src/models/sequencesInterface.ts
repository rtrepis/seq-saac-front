export interface PictogramsSequence {
  pictograms: number[];
}

export interface ProtoSequences extends PictogramsSequence {
  name: string;
  private: boolean;
  owner: string;
}

export interface Sequences extends ProtoSequences {
  id: string;
  name: string;
  pictograms: number[];
  private: boolean;
  owner: string;
}

export type SequenceInitialState = Sequences[];

export interface SelectPictogram {
  index: number;
  pictogram: number;
}
