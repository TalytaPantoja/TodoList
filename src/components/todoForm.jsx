import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Digite um item..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
