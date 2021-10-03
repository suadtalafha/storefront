let initialState = {
    products: [
        {
            category: 'bages',
            name: 'bages hat',
            price: 80.99,
            description: 'its a bage that is red',
            inventory: 32
        },
        {
            category: 'maskara',
            name: 'brown maskara',
            price: 5.99,
            description: 'maskara',
            inventory: 34
        },
        {
            category: 'sunglasses',
            name: 'sunglasses',
            price: 15.99,
            description: 'sunglasses',
            inventory: 11
        },
        {
            category: 'hats',
            name: 'blue hat',
            price: 59.99,
            description: 'its a hat that is blue',
            inventory: 24
        },
        {
            category: 'sunglasses',
            name: 'aviators',
            price: 500.99,
            description: 'its aviator sunglasses',
            inventory: 3
        },
        {
            category: 'sunglasses',
            name: 'pit vipers',
            price: 100.99,
            description: 'its sunglasses',
            inventory: 2
        },

    ],
}

const prodReducer = (state = initialState, action) => {
    let { type } = action;

    switch (type) {
        case 'SETCATEGORY':
            let products = initialState.products;
            return { products };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

export default prodReducer;