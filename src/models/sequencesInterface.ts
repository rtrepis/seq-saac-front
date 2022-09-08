export interface Sequences {
  id: string;
  name: string;
  pictograms: number[];
  private: boolean;
  owner: string;
}

export type SequenceInitialState = Sequences[];
