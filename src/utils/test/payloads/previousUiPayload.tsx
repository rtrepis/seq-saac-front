import { UiPayload } from "../../../Types/interface";

export let previousUiPayload: UiPayload = {
  modal: {
    show: false,
    type: "ok",
    message: "",
  },
  loading: false,
  nav: {
    show: true,
    allSequencesPublic: {
      itemsTotal: 0,
      pageCurrent: 0,
    },
  },
};
