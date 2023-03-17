import { 
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    USER_DETAIL_REQUEST,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from "../Constants/userConstant";

const initialState = {
    loading : false,
    users : [],
    error : "",
    user : {},
}

export const userReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_USERS_REQUEST : 
        return {
            ...state,
            loading : true
        }
        case GET_USERS_SUCCESS : 
        return {
            ...state,
            loading : false,
            users : action.payload
        }
        case GET_USERS_FAILURE : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }
        default : return state
    }
}

export const userDetailReducer = (state = {loading : false ,user : {},error : ""},action) => {
    switch(action.type){
        case USER_DETAIL_REQUEST : 
        return {
            ...state,
            loading : true
        }
        case USER_DETAIL_SUCCESS : 
        return {
            ...state,
            loading : false,
            user : action.payload
        }
        case USER_DETAIL_FAIL : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }
        default : return state
    }
}

export const createUserReducer = (state = initialState,action) => {
    switch(action.type){
        case CREATE_USER_REQUEST : 
        return {
            ...state,
            loading : true
        }
        case CREATE_USER_SUCCESS : 
        return {
            ...state,
            loading : false,
            user : action.payload
        }
        case CREATE_USER_FAIL : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }
        default : return state
    }
}

export const updateUserReducer = (state = {loading : false,user : {},error : ""},action) => {
    switch(action.type){
        case UPDATE_USER_REQUEST : 
        return {
            ...state,
            loading : true
        }
        case UPDATE_USER_SUCCESS : 
        return {
            ...state,
            loading : false,
            user : action.payload
        }
        case UPDATE_USER_FAIL : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }
        default : return state
    }
}

export const deleteUserReducer = (state = {loading : false,user : {},error : ""},action) => {
    switch(action.type){
        case DELETE_USER_REQUEST : 
        return {
            ...state,
            loading : true
        }
        case DELETE_USER_SUCCESS : 
        return {
            ...state,
            loading : false,
            user : action.payload
        }
        case DELETE_USER_FAIL : 
        return {
            ...state,
            loading : false,
            error : action.payload
        }
        default : return state
    }
}