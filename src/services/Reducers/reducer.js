
import { ADD_TO_CART } from "../contants";
import { REMOVE_FROM_CART } from "../contants";
const initialState = {
    cartData : [],
}

export default function cartItems(state = [], action) {
    switch (action.type){
        case ADD_TO_CART:
            // console.warn("reducer data", action.data);
            return [ 
                ...state,
                {cartData: action.data}
            ]   
            break;
        case REMOVE_FROM_CART:
            state.pop();
            return [...state];
        
            break;
        
        default:
            return state;
    }
}