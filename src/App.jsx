import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]); // タスクの配列を初期化

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    if (name === '') return; // 空のタスクは追加しない
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos]; // 配列のコピーを作成
    const todo = newTodos.find((todo) => todo.id === id); // idが一致するtodoを探す
    todo.completed = !todo.completed; // 完了状態を反転させる
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type='text' ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
