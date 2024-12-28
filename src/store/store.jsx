import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/authSlice'

const store= configureStore({
    reducer:{
        user:userReducer
    }
})

export default store;