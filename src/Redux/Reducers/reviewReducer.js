import * as actionTypes from "../Constants/reviewConstant";

const initialState = {
    loading: false,
    reviews: [],
    error: ""
}

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_REVIEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: action.payload
            }
        case actionTypes.GET_REVIEWS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const singleReviewReducer = (state = { loading: false, review: {}, error: "" }, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_REVIEW_REQUEST:
        case actionTypes.REVIEW_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.UPDATE_REVIEW_SUCCESS:
        case actionTypes.REVIEW_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                review: action.payload
            }
        case actionTypes.UPDATE_REVIEW_FAIL:
        case actionTypes.REVIEW_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}