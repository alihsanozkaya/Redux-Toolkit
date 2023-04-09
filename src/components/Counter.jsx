import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {azalt, artir} from '../redux/features/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div style={{border: "2px solid red", padding: "15px", width: "150px" }}>
        <button onClick={() => dispatch(azalt())}>Azalt</button>
        <h4>Sayi: {count}</h4>
        <button onClick={() => dispatch(artir())}>Artir</button>
    </div>
  )
}

export default Counter