import { getDataAction, handleError } from './helpers';
import { store } from 'Store';

// Actions Name
export const authAction = getDataAction('AUTH');


// Actions
export const fetchAuthData = async () => {
  try {
    store.dispatch(authAction.init());

    // Api Calling Will Be Here
    const response = { authData: 'test' };

    store.dispatch(authAction.success(response));
  } catch (err) {
    handleError(err);
    store.dispatch(authAction.failed({ displayMessage: 'Unable to load auth data', internalMessage: err.meessage }));
  }
}