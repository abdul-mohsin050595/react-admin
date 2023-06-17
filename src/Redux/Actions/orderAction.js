import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_FAILURE,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
} from "../Constants/orderConstant";
import * as actionType from "../Constants/orderConstant";
import api from "../../Api/api";

export const fetchOrders = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ORDERS_REQUEST });
    const { data } = await api.get("/orders");
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_FAILURE, payload: error.name });
  }
};

export const getOrderDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAIL_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await api.get(`/orders/${id}`, config);
    dispatch({ type: ORDER_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAIL_FAIL, payload: error.name });
  }
};

export const updateOrder = (order, id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.UPDATE_ORDER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await api.put(`/orders/${id}`, config, order);
    dispatch({ type: actionType.UPDATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.UPDATE_ORDER_FAIL, payload: error.name });
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.DELETE_ORDER_REQUEST });
    const { data } = await api.delete(`/orders/${id}`);
    dispatch({ type: actionType.DELETE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.DELETE_ORDER_FAIL, payload: error.name });
  }
};
