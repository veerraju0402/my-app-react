import { useReducer, useEffect, useRef } from 'react';

const initialState=0;
const action = {
    type: 'add',
    user: { 
      name: 'John Smith',
      email: 'jsmith@mail.com'
    }
  };

function reducer(state, action) {
    let newState;
    switch (action.type) {
      case 'increase':
        newState = { counter: state.counter + 1 };
        break;
      case 'decrease':
        newState = { counter: state.counter - 1 };
        break;
      default:
        throw new Error();
    }
    return newState;
  }

export default function Stopwatch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) { 
      return; 
    }
    idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);
  
  return (
    <div>
      {state.time}s
      <button onClick={() => dispatch({ type: 'start' })}>
        Start
      </button>
      <button onClick={() => dispatch({ type: 'stop' })}>
        Stop
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}