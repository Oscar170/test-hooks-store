const addTodo = todo => ({ type: 'ADD_TODO', payload: { todo } });
const completeTodo = id => ({ type: 'COMPLETE_TODO', payload: { id } });

export { addTodo, completeTodo };
