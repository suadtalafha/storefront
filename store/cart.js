let initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADDTOCART':
            let product = payload;
            return { cart: [...state.cart, product] }
        case 'CARTRESET':
            return initialState;
        default:
            return state;
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADDTOCART',
        payload: product
    }
}

export default cartReducer;