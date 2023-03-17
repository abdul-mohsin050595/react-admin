import * as actionTypes from "../Constants/productConstant";

const initialValue = {
    loading : false,
    products : [],
    product : {},
    error : ""
}

export const productReducer = (state = initialValue , action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
            loading : true,
        }
        case actionTypes.FETCH_PRODUCTS_SUCCESS : 
        return {
            ...state,
            loading : false,
            products : action.payload
        }
        case actionTypes.FETCH_PRODUCTS_FAILURE :
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default : return state
    }

}

export const productDetailReducer = (state = initialValue , action) => {
    switch(action.type){
        case actionTypes.PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
            loading : true,
        }
        case actionTypes.PRODUCT_DETAIL_SUCCESS : 
        return {
            ...state,
            loading : false,
            product : action.payload
        }
        case actionTypes.PRODUCT_DETAIL_FAIL :
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default : return state
    }

}

export const createProductReducer = (state = {loading : false,product : {},error : ""} , action) => {
    switch(action.type){
        case actionTypes.CREATE_PRODUCT_REQUEST:
            return {
                ...state,
            loading : true,
        }
        case actionTypes.CREATE_PRODUCT_SUCCESS: 
        return {
            ...state,
            loading : false,
            product : action.payload
        }
        case actionTypes.CREATE_PRODUCT_FAIL:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default : return state
    }

}
