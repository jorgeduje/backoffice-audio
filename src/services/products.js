import productsInstance from "./productInstance";

export const getAllProducts = ()=>{
    let products = productsInstance.get("")
    return products
}
export const deleteById = (id)=>{
    let product = productsInstance.delete(`/${id}`)
    return product
}
export const editById = (id)=>{
    let product = productsInstance.patch(`/${id}`)
    return product
}