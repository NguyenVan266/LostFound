import axios from "./axios";

export const add_Product = (product) => {
    return axios.post("/products", product)
}

export const list_Products = () => {
    return axios.get("/products")
}

export const remove_Products = ($id) => {
    return axios.delete(`/products/${$id}`)
}

export const detail_Products = ($id) => {
    return axios.get(`/products/${$id}`)
}

export const edit_Products = ($id, $product) => {
    return axios.patch(`/products/${$id}`, $product)
}