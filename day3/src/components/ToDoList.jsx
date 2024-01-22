import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  //add
  const handleAddTodo = () => {
    if (task.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = task;
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        setTodos([...todos, task]);
      }
    }
    setTask("");
  };
  //edit
  const handleEditTodo = (index) => {
    setTask(todos[index]);
    setEditingIndex(index);
  };
  //delete
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>ToDO List APP</h1>
      <input type="text" value={task} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>
        {editingIndex !== null ? "Edit" : "Add"}
      </button>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={idx}>
              {todo}
              <button onClick={() => handleEditTodo(idx)}>Edit</button>
              <button onClick={() => handleDeleteTodo(idx)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ToDoList;
