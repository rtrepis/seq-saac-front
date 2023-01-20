import { UiPayload } from "../../Types/interface";

export let previousUiPayload: UiPayload = {
  modal: {
    show: false,
    type: "ok",
    message: "",
  },
  loading: false,
  nav: {
    show: true,
    allSequencesPage: 0,
  },
};
