import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const BASE_FIREBASE_URL =
  "https://fir-react-kennel-redux-default-rtdb.europe-west1.firebasedatabase.app/";

const dogSlice = createSlice({
  name: "dogState",
  initialState: {
    isLoading: false,
    error: null,
    dogs: [],
  },
  reducers: {
    loadDogs(state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    loadDogsSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        dogs: [...action.payload],
      };
    },
    loadDogsFailure(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    },
  },
});

export const loadDogsData = () => {
  return async (dispatch) => {
    dispatch(dogSlice.actions.loadDogs());

    try {
      const response = await axios.get(BASE_FIREBASE_URL + `dogs.json`);

      if (response.status === 200 && response.data) {
        let dogsArray = [];

        for (const key in response.data) {
          dogsArray.push({ id: key, ...response.data[key] });
        }

        dispatch(dogSlice.actions.loadDogsSuccess(dogsArray));
      } else {
        throw new Error("Something went wrong...");
      }
    } catch (error) {
      dispatch(dogSlice.actions.loadDogsFailure({...error}));
    }
  };
};

export const { loadDogs, loadDogsSuccess, loadDogsFailure } = dogSlice.actions

export default dogSlice.reducer