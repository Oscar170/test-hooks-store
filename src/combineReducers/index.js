const combineReducers = reducers => {
  const reducersNames = Object.keys(reducers);
  return (state = {}, action) =>
    reducersNames.reduce(
      (newState, reducerName) => ({
        ...newState,
        [reducerName]: reducers[reducerName](newState[reducerName], action),
      }),
      state
    );
};

export default combineReducers;
