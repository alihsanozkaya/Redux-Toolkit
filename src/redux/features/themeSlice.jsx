import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tema: ""
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        acikTema: (state, action) => {
            document.body.style.backgroundColor = action.payload.bgColor
            document.body.style.color = action.payload.textColor
        },
        koyuTema: (state, action) => {
            document.body.style.backgroundColor = action.payload.bgColor
            document.body.style.color = action.payload.textColor
        }
    }
})

export const {acikTema, koyuTema} = themeSlice.actions
export default themeSlice.reducer