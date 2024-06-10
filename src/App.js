
import MyIncrement from './home';
import { useState } from 'react';
import './cssFiles/home.css';
import SampleRest from './RestApi/SampleRest';


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

export function App1() {

  return (
    <div>
      {/* <GiftProvider>
      <MultiState/>
      </GiftProvider> */}

      <SampleRest />

      {/* <MyCalculator/> */}
      {/* <Resize/>   */}

    </div>
  );
}



export default App;
