import { useState } from "react";
import Todo from "./Todo.jsx";
import LudoBoard from "./LudoBoard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todo />
      {/* <LudoBoard /> */}
    </>
  );
}

export default App;
