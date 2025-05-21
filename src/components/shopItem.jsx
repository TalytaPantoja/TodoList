function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>🗑️</button>
    </div>
  );
}

export default TodoItem;
