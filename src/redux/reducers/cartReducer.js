const initialState = {
  cartItems: [],
  totalPrice: 0,
  qty: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADDCART") {
    const existingItem = state.cartItems.find(item => item.id === action.payload.id);

    if (existingItem) {
      // Item already exists in the cart
      const updatedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        totalPrice: state.totalPrice + action.payload.price,
        qty: state.qty + 1,
      };
    }

    // Item is not in the cart, add it
    const newCartItem = { ...action.payload, qty: 1 };
    return {
      ...state,
      cartItems: [...state.cartItems, newCartItem],
      totalPrice: state.totalPrice + action.payload.price,
      qty: state.qty + 1,
    };
  }

  // handle increment opration
  if (action.type === "INCREMENT_CART") {
    const existingItem = state.cartItems.find(item => item.id === action.payload.id);

    if (existingItem) {
      // Item already exists in the cart
      const updatedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        totalPrice: state.totalPrice + action.payload.price,
        qty: state.qty + 1,
      };
    }
  }

// handle decrement operation
if (action.type === "DECREMENT_CART") {
  const existingItem = state.cartItems.find(item => item.id === action.payload.id);

  if (existingItem && existingItem.qty > 1) { 
    const updatedCartItems = state.cartItems.map(item =>
      item.id === action.payload.id
        ? { ...item, qty: item.qty - 1 } // Decrement the quantity of the item
        : item
    );
    const updatedQty = state.qty - 1 >= 0 ? state.qty - 1 : 0; // Update overall quantity
    
    return {
      ...state,
      cartItems: updatedCartItems.length > 0 ? updatedCartItems : [],
      totalPrice: state.totalPrice - action.payload.price >= 0 ? state.totalPrice - action.payload.price : 0, // Ensure totalPrice doesn't go below 0
      qty: updatedQty,
    };
  }
}

// EMPTY cart item code 
if (action.type === "EMPTY_CART") {

  const itemToRemoveId = action.payload.id;
  const itemToRemove = state.cartItems.find(item => item.id === itemToRemoveId);
  const updatedTotalPrice = state.totalPrice - (itemToRemove.qty * itemToRemove.price);
  const updatedQty = state.qty - itemToRemove.qty;

  return {
    ...state,
    cartItems: state.cartItems.filter(item => item.id !== itemToRemoveId),
    totalPrice: updatedTotalPrice >= 0 ? updatedTotalPrice : 0,
    qty: updatedQty >= 0 ? updatedQty : 0
  };


}



  return state;
};

export default cartReducer;
