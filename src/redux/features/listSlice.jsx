import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list: []
}
export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        add: (state, action) => {
            state.list = [...state.list, action.payload]
            localStorage.setItem('list', JSON.stringify(state.list))
        },
        remove: (state) => {
            state.list = []
            localStorage.removeItem('list')
        }
    }
})
export const {add, remove} = listSlice.actions
export default listSlice.reducer