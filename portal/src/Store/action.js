// import { createAction } from "redux-actions";
import { store } from "./index";
import { handleError } from "./helper";
import { NetworkServices } from "Services";
import { loginAction } from "./reducer";

export const fetchLogin = async () => {
  try {
    store.dispatch(loginAction.init());

    const data = await NetworkServices.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    store.dispatch(loginAction.success(data));
    console.log(data);
  } catch (err) {
    handleError(err);
    store.dispatch(
      loginAction.failed({
        displayMessage: "Failed to Login Api",
        internalMessage: err.message
      })
    );
  }
};
