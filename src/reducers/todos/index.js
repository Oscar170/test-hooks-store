const initState = [];

function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        { completed: false, todo: payload.todo, id: Date.now() },
      ];
    case 'COMPLETE_TODO':
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, completed: true } : todo,
      );
    default:
      return state;
  }
}

export default reducer;
