let initialState = {
    categories: [
        {
            name: 'bages',
            displayName: 'bages!',
            description: 'things that suitable for parties'
        },
        {
            name: 'maskara',
            displayName: 'Maskarah!',
            description: 'Makeup '
        },
        {
            name: 'sunglasses',
            displayName: 'Sunglasses',
            description: 'To protect you eyrs in summer'
        },
    ],
    activeCategory: null,
}

const catReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'SETCATEGORY':
            let activeCategory = payload;
            let categories = initialState.categories;
            return { activeCategory, categories };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

export const setActiveCategory = (category) => {
    return {
        type: 'SETCATEGORY',
        payload: category
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export default catReducer;