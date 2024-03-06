import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  // Access the cart state from the Redux store
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  
  const handleDecrement =  (item) => {
        dispatch({type: "DECREMENT_CART", payload: item});
  }
  const handleIncrement =  (item) => {
    dispatch({type: "INCREMENT_CART", payload: item});
  }
  const handleEmpityCart =  (item) => {
    dispatch({ type: "EMPTY_CART", payload: item });
  }
  return (
    <div className="container mt-4" style={{marginBottom:"100px"}}>
      <h1 className="mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="row" key={item.id}>
            <div className="col-md-4 mb-4">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "180px",
                  height: "200px",
                }}
              />
            </div>
           <div className="col-md-4">
            <h3>{item.title}</h3>
            <p className="lead fw-bold">
                {item.qty} * ${item.price} = ${(item.qty * item.price).toFixed(2)}
            </p>
            <button className="btn btn-outline-dark me-4" onClick={()=>handleDecrement(item)}>
                <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-outline-dark me-4" onClick={()=>handleIncrement(item)}>
                <i className="fa fa-plus"></i>
            </button>
            <button className="btn btn-outline-dark me-4" onClick={()=>handleEmpityCart(item)}>
                <i className="fa fa-trash"></i>
            </button>
           </div>
          </div>
        ))
      )}
      <hr />
      <div className="row">
        <h4>Cart Subtotal: {cart.totalPrice.toFixed(2)}</h4>
        <h5>Total Item: {cart.qty}</h5>
        <button style={{ maxWidth: "250px",marginLeft:"10px",background:"#FFD814", backgroundColor:"#FCD200;",color:"black"}} className="btn btn-sm btn-primary">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
