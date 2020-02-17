// import { createAction } from "redux-actions";
import { store } from "./index";
import { handleError } from "./helper";
import { NetworkServices } from "Services";
import { loginAction, registerAction } from "./reducer";
import { AuthServices } from "Services";

export const fetchLogin = async () => {
  try {
    store.dispatch(loginAction.init());

    const data = await NetworkServices.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    store.dispatch(loginAction.success(data));
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

//signup

export const SingUp = async (name, email, password) => {
  try {
    store.dispatch(registerAction.init());
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ name, email, password });

    const data = await NetworkServices.post(
      "http://localhost:5000/api/1.0/signup",
      body,
      config
    );
    store.dispatch(registerAction.success(data));
  } catch (error) {}
};
