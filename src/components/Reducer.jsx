export const initialState = {
    basket : [],
    user : null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


export const reducer = (state, action) => {
    // console.log(action.type);
    // console.log(state);
    if(action.type === 'SET_USER'){
        return {...state, user: action.user}
    }
    if(action.type === 'ADD_TO_BASKET'){
        const item = action.item;
        const newState = {...state, basket:[...state.basket, item]};
        // console.log(newState);
        return newState;
    }
    if(action.type === 'REMOVE_FROM_BASKET'){
        // console.log(state);

        const newBasket = [...state.basket];

        const indx = newBasket.findIndex((item) => item.id === action.id);

        if(indx >= 0){
            newBasket.splice(indx,1);
        }
        else{
            console.warn(
                `Cant remove product (id: ${action.id}) as it's not in the cart`
            )
        }

        return {...state, basket:newBasket};


        
    }

    return state;
}


