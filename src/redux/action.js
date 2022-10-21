import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const addToCart =(data)=>{
    console.log("ACTION CALLED add to cart",data)
    return {
        type:ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data)=>{
    console.log("ACTION REMOVE CART CALLED")
    return{
        type:REMOVE_FROM_CART,
        data 
    }
}

export const emptyCart = ()=>{
    console.log("ACTION EMPTY CART CALLED")
    return {
        type:EMPTY_CART,
    }
}