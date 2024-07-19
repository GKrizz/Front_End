import React from 'react';

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} /> {/* Fix property name */}
        {todo.name}
      </label>
    </div>
  );
}
