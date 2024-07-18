import axios from './axios.customize'

const createUserApi = (name,email,password) =>{
    const URL_API = "/v1/api/register";
    const data = {
        name,email,password
    }
    return axios.post(URL_API,data)
}

const loginApi = (email,password) =>{
    const URL_API = "/v1/api/login";
    const data = {
        email,password
    }
    return axios.post(URL_API,data)
}

const addProductApi = (name,image,countInStock) =>{
    const URL_API = "/v1/api/products";
    const data = {
        name,image,countInStock
    }
    return axios.post(URL_API,data)
}
export {
    createUserApi,loginApi,addProductApi
}