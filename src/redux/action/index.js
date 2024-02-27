//-------------- Add Item to Cart -------------------//
export const addCart = (product) =>{
    return (dispatch) =>{
        dispatch({
            type: 'ADDCART',
            payload: product
        })
    }
}

//-------------- Remove Item to Cart -------------------//
export const delCart = (product) =>{
    return (dispatch) =>{
        dispatch({
            type: 'DELITEM',
            payload: product
        })
    }
}

export const incrementCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'INCREMENT_CART',
            payload: {id:product.id}
        });
    };
};

export const decrementCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'DECREMENT_CART',
            payload: {id: product.id}
        });
    };
};

export const emptyCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'EMPTY_CART',
            payload: {product}
        });
    };
};