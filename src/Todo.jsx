import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  // タスクの完了状態を切り替える関数
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input type='checkbox' checked={todo.completed} readOnly onChange={handleTodoClick} />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
