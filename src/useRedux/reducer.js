// const temp={name:'raju',age:10};
const temp=0;

export default function reducerfun(state=temp, action){
    const {type,payload} = action;
    console.log("type:",type,"-payload:",payload)
    switch(type){ 
        case "INCREMENT":return state+payload;
        //return { ...state, age: action.payload };
        case "DECREMENT":return state-payload;
        //return { ...state, age: action.payload };
        default :return state;
        // switch(action.type){
        //if(action.type=="DECREMENT")
        //return [...state,action.payload]
        // case "INCREMENT":return count+1;
    }


}