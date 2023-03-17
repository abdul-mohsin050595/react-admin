import React from 'react';
import { formatDate } from './formatDate';
import {useNavigate} from "react-router-dom";

function OrdersTable({orders}) {
    const navigate = useNavigate()

    const navigateToOrderDetail = (id) => {
        navigate(`/orders/${id}`)
    }
  return (
    <table className='orders_table'>
            <thead>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Order Id</td>
                    <td>Date</td>
                    <td>Customer Id</td>
                    <td>Address</td>
                    <td>Status</td>
                    <td>items</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => {
                        return (
                            <tr key={order.id} onClick={() =>navigateToOrderDetail(order.id)}>
                                <td><input type="checkbox" /></td>
                                <td>{order.id}</td>
                                <td>{formatDate(order.created_at)}</td>
                                <td>{order.user_id}</td>
                                <td>
                                    {order.shipping_address.street}
                                    {order.shipping_address.city}
                                    {order.shipping_address.state}
                                    {order.shipping_address.zip}
                                </td>
                                <td>{order.status}</td>
                                <td>{order.items.length}</td>
                                <td>{order.total}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
  )
}

export default OrdersTable