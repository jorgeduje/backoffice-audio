import productsInstance from "./productInstance";

export const getAllProducts = ()=>{
    let products = productsInstance.get("")
    return products
}