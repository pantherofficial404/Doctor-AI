import { isNullOrUndefined } from "util";
import { store } from "Store";
import { messageBoxAction } from "Store/reducer";

export const getFormattedString = element => {
  return isNullOrUndefined(element) ? "N/A" : element;
};

export const openGlobalMessageBox = (args) => {
  store.dispatch(messageBoxAction({ ...args, open: true }));
};

export const closeGlobalMessageBox = () => {
  store.dispatch(messageBoxAction({ open: false }));
};