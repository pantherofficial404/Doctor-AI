// import { createAction } from "redux-actions";
import { store } from "./index";
import { handleError } from "./helper";
import { NetworkServices } from "Services";
import * as moment from 'moment-timezone';

import {
  hospitalListingAction,
  hospitalDetailAction,
  currentPatientAction,
  addCategoryAction,
  categoryListingAction,
  currentOrderAction,
  userOrderAction,
  sendMailAction,
  usersAction,
  analyticsAction
} from "./reducer";
import Config from "Config";

export const fetchHospitalListing = async () => {
  try {
    store.dispatch(hospitalListingAction.init());
    const response = await NetworkServices.get(`${Config.SERVER_URL}/hospital`);

    (response.data || []).forEach(element => {
      element.mobileNo = element.mobileNo[0] || null;
    });

    store.dispatch(hospitalListingAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      hospitalListingAction.failed({
        internalMessage: err.message,
        displayMessage: "Error in fetchHospitalListing"
      })
    );
  }
};

export const addHospitalAction = async data => {
  try {
    // Adding hospital
    await NetworkServices.post(`${Config.SERVER_URL}/hospital`, { ...data });
  } catch (err) {
    // Handling error
    handleError(err);
  }
};

export const fetchHospitalDetail = async hospitalId => {
  try {
    store.dispatch(hospitalDetailAction.init());
    // Api Calling
    const response = await NetworkServices.get(
      `${Config.SERVER_URL}/hospital/${hospitalId}`
    );
    // Save Data To Redux
    store.dispatch(hospitalDetailAction.success(response.data || {}));
  } catch (err) {
    handleError(err);
    hospitalDetailAction.failed({
      internalMessage: err.message,
      displayMessage: "Error in fetchHospitalListing"
    });
  }
};

export const addDoctor = async data => {
  try {
    await NetworkServices.post(`${Config.SERVER_URL}/doctor`, { ...data });
  } catch (err) {
    handleError(err);
  }
};

export const addCab = async data => {
  try {
    await NetworkServices.post(`${Config.SERVER_URL}/cab`, { ...data });
  } catch (err) {
    handleError(err);
  }
};

export const addPatient = async data => {
  try {
    store.dispatch(currentPatientAction.init());
    store.dispatch(currentOrderAction.init());
    const response = await NetworkServices.post(
      `${Config.SERVER_URL}/patient`,
      { ...data }
    );

    const payload = {
      patientId: response.data._id,
      hospitalId: data.hospitalId,
      userId: data.userId,
      pickupLatitude:
        ((response.data || {}).destinationLocation || {}).coordinates[1] || "",
      pickupLongitude:
        ((response.data || {}).destinationLocation || {}).coordinates[0] || "",
      destinationLatitude:
        ((response.data || {}).destinationLocation || {}).coordinates[1] || "",
      destinationLongitude:
        ((response.data || {}).destinationLocation || {}).coordinates[0] || "",
      categoryId: data.categoryId
    };
    const createOrderResponse = await NetworkServices.post(
      `${Config.SERVER_URL}/create-order`,
      { ...payload }
    );

    store.dispatch(currentOrderAction.success(createOrderResponse.data));
    store.dispatch(currentPatientAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      currentPatientAction.failed({
        internalMessage: err.message,
        displayMessage: "Error in addPatient"
      })
    );
    store.dispatch(
      currentOrderAction.failed({
        internalMessage: err.message,
        displayMessage: "Error in addPatient"
      })
    );
  }
};

export const addCategory = async data => {
  try {
    store.dispatch(addCategoryAction.init());
    const response = await NetworkServices.post(
      `${Config.SERVER_URL}/category`,
      { ...data }
    );
    store.dispatch(addCategoryAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      addCategoryAction.failed({
        internalMessage: err.message,
        displayMessage: "Error in addCategory"
      })
    );
  }
};

export const fetchCategory = async () => {
  try {
    store.dispatch(categoryListingAction.init());
    const response = await NetworkServices.get(`${Config.SERVER_URL}/category`);
    store.dispatch(categoryListingAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      categoryListingAction.failed({
        internalMessage: err.message,
        displayMessage: "Error in fetchCategory"
      })
    );
  }
};

export const fetchOrderByType = async userId => {
  try {
    store.dispatch(userOrderAction.init());

    const response = await NetworkServices.get(
      `${Config.SERVER_URL}/get-order-by-type?id=${userId}&type=USER`
    );

    response.data.forEach((element, index) => {
      response.data[index].hospitalName = element.hospitalId.hospitalName;
      response.data[index].hospitalAddress = element.hospitalId.address;
      response.data[index].patientName = element.patientId.patientName;
      response.data[index].orderStatus =
        element.orderStatus === 0 ? "Active" : "Finished";
      response.data[index].verificaionCode = element.patientId.verificaionCode;
    });

    store.dispatch(userOrderAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      userOrderAction.failed({
        internalMessage: err.message,
        displayMessage: "Error in fetchCategory"
      })
    );
  }
};
//Send mail Action
export const sendMail = async data => {
  try {
    store.dispatch(sendMailAction.init());
    const response = await NetworkServices.post(`${Config.SERVER_URL}/mail`, {
      ...data
    });
    store.dispatch(sendMailAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      sendMailAction.failed({
        internalMessage: err.message,
        displayMessage: err.response.data.message
      })
    );
  }
};

export const fetchUsers = async () => {
  try {
    store.dispatch(usersAction.init());
    const response = await NetworkServices.get(`${Config.SERVER_URL}/users`);
    store.dispatch(usersAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      usersAction.failed({
        internalMessage: err.message,
        displayMessage: err.response.data.message
      })
    );
  }
};

export const fetchAnalytics = async (startDate,endDate) => {
  try {
    store.dispatch(analyticsAction.init());
    const response = await NetworkServices.get(
      `${Config.SERVER_URL}/analytics?startTime=${moment(startDate).format('YYYY-MM-DD')}&endTime=${moment(endDate).format('YYYY-MM-DD')}`
    );
    store.dispatch(analyticsAction.success(response.data));
  } catch (err) {
    handleError(err);
    store.dispatch(
      analyticsAction.failed({
        internalMessage: err.message,
        displayMessage: err.response.data.message
      })
    );
  }
};
