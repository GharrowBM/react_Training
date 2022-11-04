import { configureStore } from '@reduxjs/toolkit'
import dogReducer from './views/dogs/dogSlice'
import masterReducer from './views/masters/masterSlice'

const appStore = configureStore({
  reducer: {
    dogState: dogReducer,
    masterState: masterReducer
  }
})

export default appStore