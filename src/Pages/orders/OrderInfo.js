import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { formatDate } from "./formatDate"
import OrderItems from './OrderItems';
import OrderTotal from './OrderTotal';
import { deleteOrder, updateOrder } from '../../Redux/Actions/orderAction';

function OrderInfo({ order }) {
    const { created_at, id, shipping_address, status } = order

    const [orderSatus, setOrderStatus] = useState(status)
    const dispatch = useDispatch()

    const updateOrderDetail = (order) => {
        dispatch(updateOrder({
            ...order,
            status : orderSatus,
            updated_at: new Date().toJSON()
        }, id))
    }

    const deleteOrderDetail = (id) => {
        dispatch(deleteOrder(id))
    }
    return (
        <div>
            <div>
                <div className='order_info'>
                    <div>
                        <h4>order</h4>
                        <p>{formatDate(created_at)}</p>
                        <p>Order Id : {id}</p>
                    </div>
                    <div>
                        <h5>customer</h5>
                        <p>name : mohsin</p>
                        <p>email : mohsin@gmail.com</p>
                    </div>
                    <div>
                        <h5>shipping address</h5>
                        <p>{shipping_address?.street}, {shipping_address?.city}</p>
                        <p>{shipping_address?.state}, {shipping_address?.zip}</p>
                    </div>
                    <div>
                        <h5>Status</h5>
                        <select value={orderSatus} onChange={(e) => setOrderStatus(e.target.value)}>
                            <option value="pending">Pending</option>
                            <option value="shipped">Shipped</option>
                            <option value="cancelled">cancelled</option>
                            <option value="delivered">Delivered</option>
                        </select>
                    </div>
                </div>
                <OrderItems items={order.items} />
                <OrderTotal order={order} />
                <div className='order_btns' >
                    <button onClick={() => updateOrderDetail(order)}>Save</button>
                    <button onClick={() => deleteOrderDetail(order.id)} className='order_delete_btn'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo