import React, { createContext,useState ,useContext} from 'react';

const GiftContext= createContext()

export const GiftProvider =({children}) =>{  //1.import in app.js using <GiftProvider> tag
const [surprise,setSurprise]=useState("apple");
return(
    <GiftContext.Provider value={{surprise,setSurprise}}>
        {children}
    </GiftContext.Provider>
)

}

export const useData =()=>useContext(GiftContext) 
//2.import where ever needed to display
// function Temp(){
//     const {mysurprise} =useData();
//     return(
//     <h2>here is a {mysurprise}</h2>
//    // <h2>here is a {mysurprise.mykeyName}</h2>
//     )
//   }