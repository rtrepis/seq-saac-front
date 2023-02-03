export interface ProtoSequences {
  name: string;
  privately: boolean;
  pictograms: number[];
}

export interface SequencesI extends ProtoSequences {
  id: string;
  name: string;
  pictograms: number[];
  privately: boolean;
  owner: string;
}

export interface SelectPictogram {
  index: number;
  pictogram: number;
}

export interface SettingsDetailsSequence {
  keyWords: boolean;
  size: "small" | "big" | number;
}
