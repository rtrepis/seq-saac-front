export interface ProtoSequences {
  name: string;
  private: boolean;
  pictograms: number[];
}

export interface Sequences extends ProtoSequences {
  id: string;
  name: string;
  pictograms: number[];
  private: boolean;
  owner: string;
}

export interface SelectPictogram {
  index: number;
  pictogram: number;
}
