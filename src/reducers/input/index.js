const initState = '';

function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_INPUT':
      return payload.text;
    default:
      return state;
  }
}

export default reducer;
