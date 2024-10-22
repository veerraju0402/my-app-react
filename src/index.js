import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//import App from './App';
import {App1} from './App';
import Home from './home';
import DefaultFunction from './conditions';
//import {Garage} from './home';
import {Football} from './home';
import {Goal} from './conditions';
import {MyGarage} from './conditions';
import {Garage} from './list';
import reportWebVitals from './reportWebVitals';
import {MyForm3} from './inputs';
import {MyIncrement} from './home';
import {MyMain} from './home';
//import Header from './cssFiles/cssObject';
//import Header from './cssFiles/scssObject';
// import {Car1} from './state/useState';
// import {Component1} from './state/useContext';
import {MyNum} from './practice/ReverseString';
import Temp from './practice/Align';

import MyBlogsFun from './pages/Blogs';
import MyContactFun from './pages/Contact';
import MyHomeFun from './pages/Home';
import MyLayoutFun from './pages/Layout';
import MyNoPageFun from './pages/NoPage';
import ImageFun from './practice/ImageFun.js';

const data = { name: "Raju", age: "16" };
// const myelement =<div >Hi {data.name}</div>

// const myelement = <div > {
//     Object.keys(data)
//         .map(e => <ul>
//             <li> {e} : {data[e]}</li>
//         </ul>)}</div>

// const a = 4;
// const b = 5;
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// function Car() {
//     return <h2>Hi, I am a Car!</h2>;
//   }

  // function Car(props) {
  //   return <h2>I am {props}'s Car!</h2>;
  //   return <h2>I am {props.data.name}'s Car!</h2>;
  //   return <h2>I am {props.name}'s Car!</h2>;
  // }

  // const shoot = () => {
  //   alert("Great Shot!");
  // }
  
// const tempCar = Car("raj");
  
// const tempCar = <Car data={data} />;

// const tempCar = Car(data);
// const tempCar = <Car name="raj" />;

const tempBool = true;
const cars = ['Ford', 'BMW', 'Audi'];

export default function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayoutFun />}>
          <Route index element={<MyHomeFun />} />
          <Route path="blogs" element={<MyBlogsFun />} />
          <Route path="contact" element={<MyContactFun />} />
          <Route path="*" element={<MyNoPageFun />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);
root.render(
//<DefaultFunction/>
//<Goal isGoal={false}/>
//<Goal isGoal={tempBool}/>
//<MyGarage cars={cars} />
//<Garage />
//<MyForm3 />
//<MyBlogsFun />
//<MyApp />


<App1 />

//<MyIncrement count={10}/>
//<MyMain />
//<Header />

//<Component1 />
    //<Home name={data.name}/>
   // <Home {...data}/>
//    <Home data={data}/>
//   <App />
//<Car1 />
//<Car color="blue"/>
//<Garage/>
// tempCar
//<button onClick={shoot}>Take the shot!</button>//alert
//<Football />
//<myString myString="raj"/>
//<MyNum />

//<Temp/>
//<ImageFun/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
