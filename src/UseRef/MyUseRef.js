import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef()

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(interValRef.current)
    }
  }, [])

//   function Reset() {
//     setTimer(0)
//     // interValRef.current =0;
//   }

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
      {/* <button onClick={Reset}>Reset Timer</button> */}
    </div>
  )
}

export default HookTimer