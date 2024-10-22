
// import MyIncrement from './home';
// import { useState } from 'react';
// import './cssFiles/home.css';
// import SampleRest from './RestApi/SampleRest';
// import Timer from './practice/useEffectTest'
import { createContext } from 'react';
import Stopwatch from './practice/UseReducerTest';
import Component1 from './practice/useContextTest'

// import Stopwatch from './practice/UseReducerTest'
import Post from './useReducerTest/Post'
import "./useReducerTest/post.css";
import { FormUsingReducer } from './useReducerTest2/FormUsingReducer';
import { useState } from 'react';
import { GiftProvider, MyTemp, MyTemp1 } from './practice/MyUseContextHook';
import Appp from './practice/MyOutlet';
import OutletApp  from './NestedRouter/App';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CounterThree from './useReducerTest/CounterThree';
import ReduceAndContApp from './UseReducerWithContext/App';
import { MyCallback } from './useCallback/MyCallback';
import HookTimer from './UseRef/MyUseRef';
import CounterOne from './practice/CustomHookCounter';
import UserForm from './MyCustomHook/MyCustomHookPart1';
import ExampleComponent from './practice/checkbox';
import SearchApp from './searchResults/App';
// import AppRedux from './useRedux/AppRedux';
import ReduxApp from './useRedux/App';
import MyPopUp from './practice/PopUp';


function App() {

  // const [data, set] = useState({ name: 'veer', age: 20 })
  // return (
  //   <div className="App">
  //     <h1>{data.name}</h1>
  //     <h1>{data.age}</h1>
  //     <MyIncrement count={1} />
  //     <button onClick={() => set({ ...data, age: 30 })}>Update</button>
  //   </div>
  // );
}

export const TempContext= createContext()
export function App1() {
  const [surprise,setSurprise]=useState({ name: "Raju", age: "16" });
console.log('App1 function')
  return (
    <div>
      {/* <MyIncrement/> */}

{/* <Timer/> */}
{/* <Component1/> */}

{/* <Stopwatch/> */}
{/* <Post/> */}
{/* <CounterOne/> */}
{/* <FormUsingReducer /> */}
{/* <Stopwatch/> */}

{/* <GiftProvider /> */}

{/* <TempContext.Provider value={surprise}>
  <GiftProvider>
 <MyTemp/>
 <MyTemp1/>
</GiftProvider >
</TempContext.Provider> */}
{/* <ExampleComponent /> */}
{/* <SearchApp/> */}
<ReduxApp/>

{/* <MyPopUp/> */}

{/* <ReduceAndContApp/> */}
{/* <MyCallback/> */}
{/* <CounterOne/> */}
{/* <UserForm/> */}

{/* <React.StrictMode>
    <BrowserRouter>
      <OutletApp />
    </BrowserRouter>
  </React.StrictMode> */}

  {/* <CounterThree /> */}
       

      {/* <SampleRest /> */}

      {/* <MyCalculator/> */}
      {/* <Resize/>   */}

    </div>
  );
}

export default App;
