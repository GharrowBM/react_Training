import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cartState",
  initialState: {
    content: [],
    totalAmount: 0,
    isVisible: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    loadingCart(state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    loadingCartSuccess(state, action) {
      return {
        ...state,
        content: [...action.payload.content],
        totalAmount: action.payload.totalAmount,
        isLoading: false,
      };
    },
    loadingCartFailure(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    savingCart(state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    savingCartSuccess(state) {
      return {
        ...state,
        isLoading: false,
        isVisible: false
      };
    },
    savingCartFailure(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    addToCart(state, action) {
      const foundCartItem = state.content.find(
        (i) => i.id === action.payload.id
      );
      let updatedCartItem = null;

      if (foundCartItem) {
        updatedCartItem = {
          ...foundCartItem,
          amount: foundCartItem.amount + 1,
        };
      } else {
        updatedCartItem = { ...action.payload, amount: 1 };
      }

      return {
        ...state,
        content: [
          ...state.content.filter((i) => i.id !== action.payload.id),
          updatedCartItem,
        ],
        totalAmount: state.totalAmount + action.payload.price,
      };
    },

    removeFromCart(state, action) {
      const foundCartItem = state.content.find((i) => i.id === action.payload);
      let updatedContent = [];

      if (foundCartItem.amount > 1) {
        const updatedCartItem = {
          ...foundCartItem,
          amount: foundCartItem.amount - 1,
        };
        updatedContent = [
          ...state.content.filter((i) => i.id !== action.payload),
          updatedCartItem,
        ];
      } else {
        updatedContent = [
          ...state.content.filter((i) => i.id !== action.payload),
        ];
      }

      return {
        ...state,
        content: updatedContent,
        totalAmount: state.totalAmount - foundCartItem.price,
      };
    },

    showCart(state) {
      return {
        ...state,
        isVisible: true,
      };
    },

    hideCart(state) {
      return {
        ...state,
        isVisible: false,
      };
    },
  },
});

export const loadCartData = () => {
  return async (dispatch) => {
    dispatch(cartSlice.actions.loadingCart())

    try {
      const res = await axios.get(
        "https://fir-react-bookstore-redux-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (res.status === 200) {
        dispatch(cartSlice.actions.loadingCartSuccess(res.data));
      }
    } catch (error) {
      dispatch(cartSlice.actions.loadingCartFailure(error.message));
    }
  };
};

export const saveCartData = (cart) => {
  return async (dispatch) => {
    dispatch(cartSlice.actions.savingCart())
    try {
      const res = await axios.patch("https://fir-react-bookstore-redux-default-rtdb.europe-west1.firebasedatabase.app/cart.json", cart)

      if (res.status === 200) {
        dispatch(cartSlice.actions.savingCartSuccess())
      }
    } catch (error) {
      dispatch(cartSlice.actions.savingCartFailure(error.message))
    }
  }
}

export const { addToCart, removeFromCart, showCart, hideCart } =
  cartSlice.actions;

export default cartSlice.reducer;
