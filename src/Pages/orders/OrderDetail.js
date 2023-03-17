import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux';
import { getOrderDetail } from '../../Redux/Actions/orderAction';
import OrderInfo from './OrderInfo';

function OrderDetail() {
  const {orderId} = useParams();
  const dispatch = useDispatch()
  const {order,loading} = useSelector(state => state.order);
  
  useEffect(() => {
    dispatch(getOrderDetail(orderId))
  },[dispatch,orderId])

  return (
    <section>
      {
        loading ? (
          <h4>loading...</h4>
        ): (
          <OrderInfo order={order}/>
        )
      }
    </section>
  )
}

export default OrderDetail