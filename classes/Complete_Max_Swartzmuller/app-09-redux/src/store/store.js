import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/counter/store/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})