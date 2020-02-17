import ReducerFactory from "./reducerFactory";
import { createAction } from "redux-actions";

const PREFIX = "@DOCTOR_AI";

const getActionName = name => `${PREFIX}/${name}`;

export const loginAction = {
  reset: createAction(getActionName(`LOGIN_RESET`)),
  init: createAction(getActionName(`LOGIN_INIT`)),
  failed: createAction(getActionName(`LOGIN_FAILED`)),
  success: createAction(getActionName(`LOGIN_SUCCESS`))
};

export const registerAction = {
  reset: createAction(getActionName(`REGISTER_RESET`)),
  init: createAction(getActionName(`REGISTER_INIT`)),
  failed: createAction(getActionName(`REGISTER_FAILED`)),
  success: createAction(getActionName(`REGISTER_SUCCESS`))
};

const initialState = {
  login: {
    initialized: false,
    loading: false,
    error: null,
    data: null
  }
};
const reducer = new ReducerFactory(initialState)
  .add(loginAction.init, registerAction.init, (state, action) => {
    return {
      ...state,
      login: {
        initialized: true,
        loading: true,
        error: null,
        data: null
      }
    };
  })
  .add(loginAction.reset, registerAction.reset, (state, action) => {
    return {
      ...state,
      login: {
        initialized: false,
        loading: true,
        error: null,
        data: null
      }
    };
  })
  .add(loginAction.success, registerAction.success, (state, action) => {
    return {
      ...state,
      login: {
        initialized: true,
        loading: false,
        error: null,
        data: action.payload
      }
    };
  })
  .add(loginAction.failed, registerAction.failed, (state, action) => {
    return {
      ...state,
      login: {
        initialized: true,
        loading: false,
        error: action.payload,
        data: null
      }
    };
  })
  .toReducer();

export default reducer;
