import * as actionTypes from "../Constants/categoryConstant";
import api from "../../Api/api";

export const getCategories = () => async(dispatch) => {
    try {
        dispatch({type : actionTypes.GET_CATEGORY_REQUEST})
        const {data} = await api.get("/categories")
        dispatch({type : actionTypes.GET_CATEGORY_SUCCESS, payload : data})
    } catch (error) {
        dispatch({type : actionTypes.GET_CATEGORY_FAIL, payload : error.name})
    }
}

export const getProductsByCategory = (category) => async(dispatch) => {
    try {
        dispatch({type : actionTypes.CATEGORY_PRODUCT_REQUEST})
        const {data} = await api.get(`/products?category=${category}`)
        dispatch({type : actionTypes.CATEGORY_PRODUCT_SUCCESS,payload: data})
    } catch (error) {
        dispatch({type: actionTypes.CATEGORY_PRODUCT_FAIL,payload: error.name})
    }
}

export const getCategoryDetail = (id) => async(dispatch) => {
    try {
        dispatch({type : actionTypes.CATEGORY_DETAIL_REQUEST})
        const {data} = await api.get(`/categories/${id}`)
        dispatch({type : actionTypes.CATEGORY_DETAIL_SUCCESS,payload: data})
    } catch (error) {
        dispatch({type : actionTypes.CATEGORY_DETAIL_FAIL,payload: error.name})
    }
}

export const updateCategory = (category,id) => async(dispatch) => {
    try {
        dispatch({type : actionTypes.CATEGORY_DETAIL_REQUEST})
        const {config} = {headers : {"Content-Type" : "application/json"}}
        const {data} = await api.put(`/categories/${id}`,category,config)
        dispatch({type : actionTypes.CATEGORY_DETAIL_SUCCESS,payload: data})
    } catch (error) {
        dispatch({type : actionTypes.CATEGORY_DETAIL_FAIL,payload: error.name})
    }
}