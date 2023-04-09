import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {add, remove} from '../redux/features/listSlice'

const List = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const liste = JSON.parse(localStorage.getItem('list'))
  console.log(typeof(liste))
  return (
    <div style={{border: "2px solid red", padding: "15px", width: "150px" }}>
        <ul>{liste?.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        </ul>
        <button onClick={() => dispatch(add(count))}>Ekle</button>
        <button onClick={() => dispatch(remove())}>Temizle</button>
    </div>
  )
}
export default List