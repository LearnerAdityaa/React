import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      });
    });
  };

  let uppercaseOne = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      });
    });
  };

  let isDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div>
      <input
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      &nbsp;
      <button onClick={addNewTask}>Add Task</button>
      &nbsp;&nbsp;&nbsp;
      <hr />
      <h4>Task To DO</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone
                    ? { textDecoration: "line-through", color: "red" }
                    : {}
                }
              >
                {todo.task}
              </span>
              &nbsp;&nbsp;&nbsp;
              <br />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp;&nbsp;
              <button onClick={() => uppercaseOne(todo.id)}>
                Uppercase One
              </button>
              &nbsp;&nbsp;
              <button onClick={() => isDone(todo.id)}>Mark as done!</button>
            </li>
          );
        })}
      </ul>
      <button onClick={markAllDone}>Mark All As Done!!</button>
    </div>
  );
}
