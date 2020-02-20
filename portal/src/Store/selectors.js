const selectState = state => {
  return state.root;
};

export const selectHospital = (state) => {
  return selectState(state).hospitals;
}