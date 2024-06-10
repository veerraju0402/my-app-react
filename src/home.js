import { useState } from "react";
import ReactDOM from "react-dom/client";
import TodosFun from "./todo/Todos";

function Home(props) {

    console.log(props, "props")
    //return <h1>Hello, {props.name} </h1>;
   // return <h1>Hello, {props.data.name} </h1>;

   const x = 5;
    return  <h1>{x < 10 ? "Hello raj" : "Goodbye"}</h1>;
}

function Car(props) {
    return <h2>I am a {props.data.name} Car!</h2>;
  }
  
  export function Garage() {
    const carColour = "RED";
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
          <h1>Who lives in my Garage?</h1>
          {/* <Car color="red"/> */}
          {/* <Car color={carColour}/> */}
          <Car data={carInfo}/>
      </>
    );
  }

  const shoot = () => {
    alert("Great Shot!");
  }

  const str = " sample";
  export function Football() {
    const shoot = (a,b) => {
      alert("test alert "+a+b.type+str);
    }
  
    return (
      //<button onClick={shoot}>Take the shot!</button>
      //<button onClick={() => shoot("Goal!"," done")}>Take the shot!</button>
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
  }

  //increment
  export const MyIncrement = (props) => {
    const [count, setCount] = useState(props.count);
    
    const increment = () => {
      setCount((c) => c + 1);
    };
  
    return (
      <>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>Adding</button>
        </div>
      </>
    );
  };

  //temp main
  export const MyMain = () => {
return <App />;
  }

  const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["mytodo 1", "mytodo 2"]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
  
    return (
      <>
        <TodosFun todosLi={todos} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };
    
export default Home