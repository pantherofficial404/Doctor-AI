const selectState = state => {
  return state.root;
};

export const selectLoginData = state => {
  return selectState(state).login;
};
