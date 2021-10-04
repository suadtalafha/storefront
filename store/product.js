let initialState = {
    products: [
        {
            category: 'hats',
            name: 'Red hat',
            price: 50.99,
            description: 'its a hat that is red',
            inventory: 32,
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fred-cap&psig=AOvVaw0zhJLhDOxBnjzCVan-jgCR&ust=1633464264534000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDqruTGsfMCFQAAAAAdAAAAABAE'
        },
        {
            category: 'socks',
            name: 'Brown socks',
            price: 5.99,
            description: 'its a sock that is brown',
            inventory: 34,
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thunderslove.com%2Fproducts%2Fwool-collection-solid-brown-socks&psig=AOvVaw29EwIWbH9HsZlYLMLX_SqV&ust=1633464336619000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjFjv7GsfMCFQAAAAAdAAAAABAD'
        },
        {
            category: 'socks',
            name: 'Green socks',
            price: 15.99,
            description: 'its socks that is green',
            inventory: 11,
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xegKpCts_0Ur2vmDEuoKGgHaLH%26pid%3DApi&f=1'
        },
        {
            category: 'hats',
            name: 'Blue hat',
            price: 59.99,
            description: 'its a hat that is blue',
            inventory: 24,
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.06KoufHB-2sFEDrIwURW6AHaHa%26pid%3DApi&f=1'
        },
        {
            category: 'sunglasses',
            name: 'Boomer sunglasses',
            price: 500.99,
            description: 'its aviator sunglasses',
            inventory: 3,
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q-3E_zcmUAN1IJXrQbFUpAHaHa%26pid%3DApi&f=1'
        },
        {
            category: 'sunglasses',
            name: 'Kid\'s sunglasses',
            price: 100.99,
            description: 'its dumb sunglasses',
            inventory: 1,
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.R37jZuwbBcQ7WotnCstNygHaHa%26pid%3DApi&f=1'
        },

    ],
}

const prodReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GETALLPRODUCTS':
            return { products: initialState.products };

     

        case 'ADDTOCART':
            const updateInventory = state.products.map(product => {
                if (product === payload) {
                    return { ...product, inventory: product.inventory - 1 }
                }
                return product;
            })
            return { products: updateInventory }

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

export const getAllProds = () => {
    return {
        type: 'GETALLPRODUCTS'
    }
}

export const setActiveProds = (category) => {
    return {
        type: 'SETCATEGORY',
        payload: category
    }
}

export default prodReducer;