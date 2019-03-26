import React from 'react';
import useConnect from '../../useConnect';
import Card from '../Card';

const mapState = state => ({ todos: state.todos });

function CardList() {
  const { todos } = useConnect(mapState);

  return (
    <div>
      {todos.map(todo => (
        <Card key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default CardList;
