import { useNavigate } from "react-router-dom";

const PendingOrders = ({ orders }) => {
    const pendingOrders = orders && orders.filter(order => order.status === "pending")
    const navigate = useNavigate()

    function formatDate(d) {
        return new Date(d).toLocaleDateString()
    }
    
    const viewOrderDetail = (id) => {
        navigate(`/orders/${id}`)
    }

    return (
        <div>
            <h4>Pending Orders({pendingOrders.length})</h4>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Product</td>
                        <td>Items</td>
                        <td>Status</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingOrders.map(pendingOrder => {
                            return (
                                <tr key={pendingOrder.id} onClick={() =>viewOrderDetail(pendingOrder.id)}>
                                    <td>{formatDate(pendingOrder.created_at)}</td>
                                    <td>{pendingOrder.user_id}</td>
                                    <td>{pendingOrder.items?.length}</td>
                                    <td>{pendingOrder.status}</td>
                                    <td>${pendingOrder.total}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PendingOrders