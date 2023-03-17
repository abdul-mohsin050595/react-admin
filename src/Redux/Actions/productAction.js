import * as actionTyes from "../Constants/productConstant";
import api from "../../Api/api";

export const fetchProducts = () => async (dispatch) => {
    try{
        dispatch({type : actionTyes.FETCH_PRODUCTS_REQUEST})
        const config = {headers : {"Content-Type": "application/json"}};
        const {data} = await api.get(`/products`,config)
        dispatch({type : actionTyes.FETCH_PRODUCTS_SUCCESS,payload : data})
    }catch(error){
        dispatch({type : actionTyes.FETCH_PRODUCTS_FAILURE,payload : error.name})
    }
}

export const productById = (id) => async (dispatch) => {
    try{
        dispatch({type : actionTyes.PRODUCT_DETAIL_REQUEST})
        const {data} = await api.get(`/products/${id}`)
        dispatch({type : actionTyes.PRODUCT_DETAIL_SUCCESS,payload : data})
    }catch(error){
        dispatch({type : actionTyes.PRODUCT_DETAIL_FAIL,payload : error.name})
    }
}

export const createProduct = (product) => async (dispatch) => {
    try{
        dispatch({type : actionTyes.CREATE_PRODUCT_REQUEST})
        const {data} = await api.post(`/products`,product)
        dispatch({type : actionTyes.CREATE_PRODUCT_SUCCESS,payload : data})
    }catch(error){
        dispatch({type : actionTyes.CREATE_PRODUCT_FAIL,payload : error.name})
    }
}

export const updateProduct = (product,id) => async (dispatch) => {
    try{
        dispatch({type : actionTyes.UPDATE_PRODUCT_REQUEST})
        const {data} = await api.put(`/products/${id}`,product)
        dispatch({type : actionTyes.UPDATE_PRODUCT_SUCCESS,payload : data})
    }catch(error){
        dispatch({type : actionTyes.UPDATE_PRODUCT_FAIL,payload : error.name})
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try{
        dispatch({type : actionTyes.DELETE_PRODUCT_REQUEST})
        const {data} = await api.delete(`/products/${id}`)
        dispatch({type : actionTyes.DELETE_PRODUCT_SUCCESS,payload : data})
    }catch(error){
        dispatch({type : actionTyes.DELETE_PRODUCT_FAIL,payload : error.name})
    }
}