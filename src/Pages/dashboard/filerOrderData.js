
export const filterOrders = (orders) => {
    let pendingOrders = 0;
    let cancelledOrders = 0;
    let deliveredOrder = 0;
    orders.forEach(order => {
        if(order.status === "pending"){
            pendingOrders += 1
        }
        if(order.status === "cancelled" ){
            cancelledOrders += 1
        }
        if(order.status === "delivered"){
            deliveredOrder += 1
        }
    })
    const pendingPercent = (pendingOrders * 100) / orders.length
    const CancelledPercent = (cancelledOrders * 100) / orders.length
    const deliveredPercent = (deliveredOrder * 100) / orders.length
    return [CancelledPercent,deliveredPercent,pendingPercent]
}