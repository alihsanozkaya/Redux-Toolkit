import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        azalt: (state) => {
            if(state.value > 0){
                state.value = state.value - 1
            }
        },
        artir: (state) => {
            state.value = state.value + 1
        }
    }
})

export const {azalt, artir} = counterSlice.actions
export default counterSlice.reducer