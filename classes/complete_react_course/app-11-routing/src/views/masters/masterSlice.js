import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_FIREBASE_URL =
  "https://fir-react-kennel-redux-default-rtdb.europe-west1.firebasedatabase.app/";

const masterSlice = createSlice({
  name: 'masterState',
  initialState: {
    masters: [],
    isLoading: false,
    error: null
  },
  reducers: {
    loadMasters(state) {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    },
    loadMastersSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        masters: [...action.payload]
      }
    },
    loadMastersFailure(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        masters: []
      }
    }
  }
})

export const loadMastersData = () => {
  return async (dispatch) => {
    dispatch(masterSlice.actions.loadMasters());

    try {
      const response = await axios.get(BASE_FIREBASE_URL + `masters.json`);

      if (response.status === 200) {
        if (response.data) {
          let mastersArray = [];
  
          for (const key in response.data) {
            mastersArray.push({ id: key, ...response.data[key] });
          }
  
          dispatch(masterSlice.actions.loadMastersSuccess(mastersArray));
        } else {
          throw new Error('No master in the database...')
        }
      } else {
        throw new Error("Something went wrong...");
      }
    } catch (error) {
      dispatch(masterSlice.actions.loadMastersFailure(error.message));
    }
  }
}

export const {} = masterSlice.actions

export default masterSlice.reducer