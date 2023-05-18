import {configureStore} from '@reduxjs/toolkit'
import APISlice from './features/lorem/loremSlice';


const store = configureStore({
  reducer: {
    API: APISlice.reducer,
  },
})

export default store;