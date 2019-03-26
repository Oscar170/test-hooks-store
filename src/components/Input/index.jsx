import React from 'react';
import useConnect from '../../useConnect';
import { updateInput } from '../../actions/input';

const mapState = state => ({ value: state.input });
const mapDispatch = dispatch => ({
  updateInput: text => dispatch(updateInput(text)),
});

function Input() {
  const { value, updateInput } = useConnect(mapState, mapDispatch);

  const onChange = e => updateInput(e.target.value);

  return <input type="text" value={value} onChange={onChange} />;
}

export default Input;
