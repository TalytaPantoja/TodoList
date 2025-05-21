import TodoItem from './ShopItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 && <p>Sem itens. Adicione um! 🤓</p>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
