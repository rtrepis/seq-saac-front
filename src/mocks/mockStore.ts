import mockSequenceArray from "./mockSequenceArray";

const store = {
  user: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTlmODU3NTI4Nzc4NzQxMTFjNTVmYSIsInVzZXJOYW1lIjoiTWFyaWEiLCJpYXQiOjE2NzQ2MzczNDB9.MbywqYpZmoZEpqJDLaI28WKAlDig4BSp2O7JehWuN-8",
    id: "6319f85752877874111c55fa",
    userName: "Maria",
  },
  ui: {
    modal: {
      show: false,
      type: "ok",
      message: "",
    },
    loading: false,
    nav: {
      show: true,
      itemsTotal: 9,
      pageCurrent: 0,
    },
  },
  sequences: mockSequenceArray,
  showPictogram: [],
  selectPictogram: [],
};

export default store;
