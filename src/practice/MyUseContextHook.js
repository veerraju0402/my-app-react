import React, { createContext,useState ,useContext} from 'react';
import { TempContext } from '../App';


export const GiftContext= createContext()

export const GiftProvider =({children}) =>{ 
const [myName,setMyName]=useState("AVR");

return(
    <GiftContext.Provider value={myName}>
        {children}
    </GiftContext.Provider>
)
}

export function MyTemp1(){
    const mysurprise =useContext(TempContext);
    const mysurprise2 =useContext(GiftContext) ;
    return(
        <h2>MyTemp1 GiftContext is a {mysurprise} & {mysurprise2}</h2>
    )
  }

  export function MyTemp(){
    const mysurprise =useContext(TempContext);
    const mysurprise2 =useContext(GiftContext) ;
    return(
    <h2>MyTemp TempContext is a {mysurprise} & {mysurprise2}</h2>
 )
  }

//   <TempContext.Provider value={surprise}>
//     <GiftProvider>
//       <MyTemp/>
//       <MyTemp1/>
//     </GiftProvider >
//   </TempContext.Provider>