import React, { useState } from 'react'


function useCounter(initialCount , value) {
	const [count, setCount] = useState(initialCount)

	const increment = () => {
		setCount(prevCount => prevCount + value)
	}

	const decrement = () => {
		setCount(futureCount => futureCount - value)
	}

	const reset = () => {
		setCount(initialCount)
	}
	return [count, increment, decrement, reset]
}


function CounterOne() {
	const [count, increment, decrement, reset] = useCounter(10, 1)
console.log("count--"+count+" -increment- "+increment+" -decrement- "+decrement+"  -reset- "+reset);
	return (
		<div>
			<h2>Count = {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterOne