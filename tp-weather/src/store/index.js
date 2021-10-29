import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from './weatherSlices'


const store = configureStore({
    reducer: weatherReducer,
})

export default store