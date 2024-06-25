import React, { useEffect,useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  console.log('Timer1 function')

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });

  useEffect(() => {
          setCount((count) => count + 1);
    console.log('Timer2 function:'+count)
},[]);

  return ( <>
  console.log('Timer3 function')
   <h1>I have rendered {count} times!</h1>;
   </>);
}
