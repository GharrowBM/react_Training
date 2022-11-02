import CartContext from "./cart-context";
import { useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const ADD_CART_ITEM = "[Cart] ADD_ITEM";
const REMOVE_CART_ITEM = "[Cart] REMOVE_ITEM";

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const foundItem = state.items.find((x) => x.id === action.payload.id);
      let updatedItems = undefined;
      if (foundItem) {
        const editedItem = {
          ...foundItem,
          amount: foundItem.amount + action.payload.amount,
        };
        updatedItems = [
          ...state.items.filter((x) => x !== foundItem),
          editedItem,
        ];
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      const newTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };

    case REMOVE_CART_ITEM:
      const itemToRemove = state.items.find((x) => x.id === action.payload);
      let newItemsAfterRemoval = undefined;

      if (itemToRemove.amount > 1) {
        newItemsAfterRemoval = [
          ...state.items.filter((x) => x.id !== action.payload),
          { ...itemToRemove, amount: itemToRemove.amount - 1 },
        ];
      } else {
        newItemsAfterRemoval = [
          ...state.items.filter((x) => x.id !== action.payload),
        ];
      }

      const totalAmountAfterRemoval = state.totalAmount - itemToRemove.price;

      return {
        items: newItemsAfterRemoval,
        totalAmount: totalAmountAfterRemoval,
      };

    default:
      return state;
  }
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: ADD_CART_ITEM, payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: REMOVE_CART_ITEM, payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
