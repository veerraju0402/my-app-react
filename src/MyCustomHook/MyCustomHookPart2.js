import {useState} from 'react'

function useInput(initialValue) {
  const [myValue, setMyValue] = useState(initialValue)
  console.log("myValue:"+myValue)
  const reset = () => {
    setMyValue('')
  }
  const bind = {
    value:myValue,
    onChange: e => {
        setMyValue(e.target.value)
    }
  }
  return [myValue, bind, reset]
}

export default useInput