// import { createAction } from "redux-actions";
import { store } from "./index";
import { handleError } from "./helper";
import { NetworkServices } from "Services";
import { AuthServices } from "Services";
import { hospitalListingAction } from './reducer';
import Config from 'Config';

export const fetchHospitalListing = async () => {
  try {
    store.dispatch(hospitalListingAction.init());
    const response = await NetworkServices.get(`${Config.SERVER_URL}/hospital`);
    store.dispatch(hospitalListingAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(hospitalListingAction.failed({ internalMessage: err.message, displayMessage: 'Error in fetchHospitalListing' }));
  }
}