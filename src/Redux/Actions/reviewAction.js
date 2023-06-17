import * as actionTypes from "../Constants/reviewConstant";
import api from "../../Api/api";

export const getReviews = () => async (dispatch) => {
    try {
        dispatch({type : actionTypes.GET_REVIEWS_REQUEST})
        // const config = {headers : {"Content-Type": "application/json"}}
        const {data} = await api.get(`/reviews`)
        dispatch({type : actionTypes.GET_REVIEWS_SUCCESS , payload : data})
    } catch (error) {
        dispatch({type : actionTypes.GET_REVIEWS_FAIL , payload : error.message})
    }
}

export const reviewDetail = (id) => async(dispatch) => {
    try {
        dispatch({type : actionTypes.REVIEW_DETAIL_REQUEST})
        const {data} = await api.get(`/reviews/${id}`)
        dispatch({type : actionTypes.REVIEW_DETAIL_SUCCESS , payload : data})
    } catch (error) {
        dispatch({type : actionTypes.REVIEW_DETAIL_FAIL , payload : error.name})
    }
}

export const updateReview = (id,review) => async(dispatch) => {
    try {
        dispatch({type : actionTypes.UPDATE_REVIEW_REQUEST})
        const config = {"Content-Type":"application/json"}
        const {data} = await api.put(`/reviews/${id}`,config,review)
        dispatch({type : actionTypes.UPDATE_REVIEW_SUCCESS , payload : data})
    } catch (error) {
        dispatch({type : actionTypes.UPDATE_REVIEW_FAIL , payload : error.name})
    }
}

export const deleteReview = (id) => async(dispatch) => {
    try {
        dispatch({type : actionTypes.DELETE_REVIEW_REQUEST})
        const {data} = await api.delete(`/reviews/${id}`)
        dispatch({type : actionTypes.DELETE_REVIEW_SUCCESS , payload : data})
    } catch (error) {
        dispatch({type : actionTypes.DELETE_REVIEW_FAIL , payload : error.name})
    }
}