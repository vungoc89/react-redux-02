import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'; //trong file counterSlice.js ko co counterReducer thi lay o dau 

const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})


export default store;