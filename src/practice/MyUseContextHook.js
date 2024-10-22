import React, { createContext,useState ,useContext} from 'react';
import { TempContext } from '../App';


export const GiftContext= createContext()

export const GiftProvider =({children}) =>{ 
const [myName,setMyName]=useState("AVR");
console.log("children:"+children);
return(
    <GiftContext.Provider value={myName}>
        
        {children}
    </GiftContext.Provider>
)
}

export function MyTemp1(){
    const {name,age} =useContext(TempContext);
    const mysurprise2 =useContext(GiftContext) ;
    return(
        <h2>MyTemp1 GiftContext is a {name} & {age} & {mysurprise2}</h2>
    )
  }

  export function MyTemp(){
    const {name,age} =useContext(TempContext);
    const mysurprise1 =useContext(TempContext);
    const mysurprise2 =useContext(GiftContext) ;
    return(
    <h2>MyTemp TempContext is a {name} & {mysurprise1.age} & {mysurprise2}</h2>
 )

 
  }

//   <TempContext.Provider value={surprise}>
//     <GiftProvider>
//       <MyTemp/>
//       <MyTemp1/>
//     </GiftProvider >
//   </TempContext.Provider>