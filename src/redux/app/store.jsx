import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import listReducer from '../features/listSlice'
import themeReducer from '../features/themeSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        liste: listReducer,
        theme: themeReducer
    }
})
