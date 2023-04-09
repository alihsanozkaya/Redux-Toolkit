import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { acikTema, koyuTema } from '../redux/features/themeSlice'

const Theme = () => {
  const tema = useSelector((state) => state.theme.tema)
  const dispatch = useDispatch()
  const acik = {
    bgColor: "white",
    textColor: "black"
  } 
  const koyu = {
    bgColor: "black",
    textColor: "white"
  }
  return (
    <div style={{border: "2px solid red", padding: "15px", width: "150px" }}>
        <h4>Tema: {tema}</h4>
        <button onClick={() => dispatch(acikTema(acik))}>Açık Tema</button>
        <button onClick={() => dispatch(koyuTema(koyu))}>Koyu Tema</button>
    </div>
  )
}

export default Theme