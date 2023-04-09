import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {add, remove} from '../redux/features/listSlice'

const List = () => {
  const list = useSelector((state) => state.liste.list)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div style={{border: "2px solid red", padding: "15px", width: "150px" }}>
        <ul>{list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        </ul>
        <button onClick={() => dispatch(add(count))}>Ekle</button>
        <button onClick={() => dispatch(remove())}>Temizle</button>
    </div>
  )
}

export default List