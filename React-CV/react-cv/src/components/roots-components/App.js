import React from "react";
import TodoList from "../todo-list/TodoList";
import Navibar from "../navi-bar/Navibar";

function App() {
  return (
    <>
      <div>
        <Navibar></Navibar>
      </div>
      <div>
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default App;
