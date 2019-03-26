import React from 'react';
import useConnect from '../../useConnect';
import { updateInput } from '../../actions/input';
import { addTodo } from '../../actions/todos';

const mapState = state => ({ input: state.input });
const mapDispatch = dispatch => ({
  resetInput: () => dispatch(updateInput('')),
  addTodo: text => dispatch(addTodo(text)),
});

function SubmitButton() {
  const { input, resetInput, addTodo } = useConnect(mapState, mapDispatch);

  const onClick = function() {
    addTodo(input);
    resetInput();
  };

  return (
    <button onClick={onClick} disabled={!Boolean(input)}>
      Submit
    </button>
  );
}

export default SubmitButton;
