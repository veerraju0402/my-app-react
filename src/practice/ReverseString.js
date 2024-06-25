import React, { useState } from 'react';
import { useData } from './MyUseContextHook';

// function ReverseString() {
//     const str = "hello";
//     const reversed = reverseString(str);
//     return (
//       <div>
//         {str} reversed is {reversed}
//       </div>
//     );
//   }


// function Temp(){
//   const {mysurprise} =useData();
//   return(
//   <h2>here is a {mysurprise}</h2>
//  // <h2>here is a {mysurprise.mykeyName}</h2>
//   )
// }

export function MyNum() {

  const [num,setNum] =useState(0);

const increment = () =>{
setNum(num+1);
}

const decrement = () =>{
  if(num>0){
  setNum(num-1);
  }
  }

  const reset = () =>{
    setNum(0);
    }

  return (
    <>
<h1>Number: {num}</h1>
<button onClick={increment}>increment</button>
<br></br>
<button onClick={decrement}>decrement</button>
<button onClick={reset}>reset</button>

</>
  );
}

export function myString(props) {
    let newString = "";
    let oldString ="";
    for (let i = oldString.length - 1; i >= 0; i--) {
        newString += oldString[i];
    }
   
    return (

      <>
      
      
      </>
    );
}

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  

  export default myString;
  