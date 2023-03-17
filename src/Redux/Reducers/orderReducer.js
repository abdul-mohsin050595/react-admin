import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_DETAIL_FAIL } from "../Constants/orderConstant";
import * as actionType from "../Constants/orderConstant";
const initialValue = {
    loading: false,
    orders: [],
    error: ""
}

export const orderReducer = (state = initialValue, action) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case FETCH_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const orderDetailReducer = (state = {loading: false, order: {},error: ""}, action) => {
    switch (action.type) {
        case ORDER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ORDER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case ORDER_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }

}


export const updateOrderReducer = (state = {loading: false, order: {},error: ""}, action) => {
    switch (action.type) {
        case actionType.UPDATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionType.UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case actionType.UPDATE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const deleteOrderReducer = (state = {loading: false, order: {},error: ""}, action) => {
    switch (action.type) {
        case actionType.DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionType.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case actionType.DELETE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}