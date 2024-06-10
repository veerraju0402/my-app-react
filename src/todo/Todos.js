import { memo } from "react";

const TodosFun = ({ todosLi }) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todosLi.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </>
    );
  };
  
  //export default TodosFun;  //this will call TodosFun every time
  export default memo(TodosFun);  //this doesnt call func if there is no change in todos 