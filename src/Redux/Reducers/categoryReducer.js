import * as actionTypes from "../Constants/categoryConstant";

const initialState = {
    loading: false,
    categories: [],
    error: ""
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case actionTypes.GET_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const categoryProductReducer = (state = { loading: false, catProducts: [], error: "" }, action) => {
    switch (action.type) {
        case actionTypes.CATEGORY_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CATEGORY_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                catProducts: action.payload
            }
        case actionTypes.CATEGORY_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const categoryDetailReducer = (state = { loading: false, category: {}, error: "" }, action) => {
    switch (action.type) {
        case actionTypes.CATEGORY_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CATEGORY_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload
            }
        case actionTypes.CATEGORY_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state

    }
}

export const updateCategoryReducer = (state = { loading: false, category: {}, error: "" }, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.UPDATE_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload
            }
        case actionTypes.UPDATE_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state

    }
}