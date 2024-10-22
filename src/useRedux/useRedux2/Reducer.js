
// const initialState = {
//     count: 0
//   };

const initialState = {
    name:'raju',age:10
  };
  
  export default function counterReducer(state = initialState, action) {
    console.log("reducerstate:",state,"-action:",action);
    switch (action.type) {
      case 'INCREMENT':
        return { ...state,name:state.name+action.payload,age: state.age + action.payload  };
      case 'DECREMENT':
        return { ...state,name:state.name+action.payload, age: state.age - action.payload  };
      default:
        return state;
    }
  }

//   function counterReducer(state = initialState, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { count: state.count + 1 };
//       case 'DECREMENT':
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   }