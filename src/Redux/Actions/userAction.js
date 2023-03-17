import * as actionTypes from "../Constants/userConstant";
import api from "../../Api/api";


const getusers = () => async (dispatch) => {
    try {
        dispatch({type : actionTypes.GET_USERS_REQUEST})
        const config = {headers : {"Content-Type": "application/json"}}
        const {data} = await api.get("/users",config)
        dispatch({type : actionTypes.GET_USERS_SUCCESS, payload : data})
    } catch (error) {
        dispatch({type : actionTypes.GET_USERS_FAILURE , payload : error.message})
    }
}

 const getUserById = (userId) => async (dispatch) => {
    try {
        dispatch({type : actionTypes.USER_DETAIL_REQUEST})
        const {data} = await api.get(`/users/${userId}`)
        dispatch({type : actionTypes.USER_DETAIL_SUCCESS, payload : data})
    } catch (error) {
        dispatch({type : actionTypes.USER_DETAIL_FAIL , payload : error.message})
    }
}

 const createUser = (user) => async (dispatch) => {
    try{
        dispatch({type : actionTypes.CREATE_USER_REQUEST})
        const config = {headers : {"Content-Type": "application/json"}};
        const {data} = await api.post("/users",user,config);
        dispatch({type: actionTypes.CREATE_USER_SUCCESS,payload : data})
    }catch(error){
        dispatch({type: actionTypes.CREATE_USER_FAIL,payload : error.name})
    }
}

const updateUser = (user,id) => async (dispatch) => {
    try{
        dispatch({type : actionTypes.UPDATE_USER_REQUEST})
        const config = {headers : {"Content-Type": "application/json"}};
        const {data} = await api.put(`/users/${id}`,user,config);
        dispatch({type: actionTypes.UPDATE_USER_SUCCESS,payload : data})
    }catch(error){
        dispatch({type: actionTypes.UPDATE_USER_FAIL,payload : error.name})
    }
}

const deleteUser = (id) => async (dispatch) => {
    try{
        dispatch({type : actionTypes.DELETE_USER_REQUEST})
        const {data} = await api.delete(`/users/${id}`);
        dispatch({type: actionTypes.DELETE_USER_SUCCESS,payload : data})
    }catch(error){
        dispatch({type: actionTypes.DELETE_USER_FAIL,payload : error.name})
    }
}

const deleteSelectedUsers = (ids) => (dispatch) =>{
    try{
        dispatch({type : actionTypes.DELETE_ALL_USER_REQUEST})
        if(ids.length !== 0){
            ids.forEach(async (id) => {
             await api.delete(`/users/${id}`);
            })
        }
        dispatch({type: actionTypes.DELETE_ALL_USER_SUCCESS,payload : "deleted Successfully"})
    }catch(error){
        dispatch({type: actionTypes.DELETE_ALL_USER_FAIL,payload : error.name})
    }
}
export {getUserById,getusers,createUser,updateUser,deleteUser,deleteSelectedUsers}