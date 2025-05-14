
import { ADD_TO_CART } from "../contants";
import { REMOVE_FROM_CART } from "../contants";

export const addToCart = (data) =>{
    // console.log("action data", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}
export const removeFromCart = (data) =>{
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}

