import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function Display(props){
    return (
        <>
              Welcome {props.userName} .
        </>
      );
}

export function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" placeholder='your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    <Display userName={name}/>
    </>
  )
}
//
export function MyForm1() {
    const [inputs, setInputs] = useState({username:"your name", age:20});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("my inputs: ",inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
  //
  export function MyForm2() {
    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute"
    );
    console.log("my textarea1: ",textarea);
    const handleChange = (event) => {
        console.log("my textarea2: ",textarea);
      setTextarea(event.target.value)
    }
    console.log("my textarea3: ",textarea);
    return (
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    )
  }
  //
  export function MyForm3() {
    const [myCar, setMyCar] = useState("Volvo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
        <>
              <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
      <Display userName={myCar}/>
      </>
    )
  }
//
export function FavoriteColor() {
    const [color, setColor] = useState("red");
      
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor("pink")}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor("green")}
        >Green</button>
      </>
    );
  }