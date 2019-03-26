import React from 'react';

function Card({ todo, completed, id, toggleCompleted }) {
  return (
    <div>
      <div>
        <input type="checkbox" value={completed} onChange={toggleCompleted} />
        <span>{todo}</span>
      </div>
      <div>{id}</div>
    </div>
  );
}

export default Card;
