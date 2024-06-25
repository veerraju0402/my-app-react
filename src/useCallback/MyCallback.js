import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { memo } from "react";

export const MyCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};



const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };
  export default memo(Todos);
  
