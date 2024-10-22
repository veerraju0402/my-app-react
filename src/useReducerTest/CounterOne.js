import { useReducer } from "react";

const initialState=0;
const  myReducer =(state,action) =>{
    switch(action){
        // switch(action.type){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
        return state
    }
}

export function CounterOne(){

    const [count,dispatch]=useReducer(myReducer,initialState)
    return(
        <>
        <div>Count :  {count}</div>
       <button onClick={()=>dispatch('increment')}>Increment</button>
       <button onClick={()=>dispatch('decrement')}>Decrement</button>
       <button onClick={()=>dispatch('reset')}>Reset</button>

       {/* <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
       <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
       <button onClick={()=>dispatch({type:'reset'})}>Reset</button> */}
        </>
    )
    
}