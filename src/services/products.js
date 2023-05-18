import productsInstance from "./productInstance";

export const getAllProducts = ()=>{
    let products = productsInstance.get("")
    return products
}
export const deleteById = (id)=>{
    let product = productsInstance.delete(`/${id}`)
    return product
}
export const editById = (id, data)=>{
    let product = productsInstance.patch(`/${id}`, data)
    return product
}
export const postProduct = (data)=>{
    let product = productsInstance.post( data)
    return product
}