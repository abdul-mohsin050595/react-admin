
export const filterOrders = (orders) => {
    let pendingOrders = 0;
    let cancelledOrders = 0;
    let deliveredOrder = 0;
    orders.forEach(order => {
        if (order.status === "pending") {
            pendingOrders += 1
        }
        if (order.status === "cancelled") {
            cancelledOrders += 1
        }
        if (order.status === "delivered") {
            deliveredOrder += 1
        }
    })
    const pendingPercent = (pendingOrders * 100) / orders.length
    const CancelledPercent = (cancelledOrders * 100) / orders.length
    const deliveredPercent = (deliveredOrder * 100) / orders.length
    return [CancelledPercent, deliveredPercent, pendingPercent]
}

export const sales = (orders, year) => {

    //filter orders by years and status

    const deliveredOrder = orders.filter(order => {
        let deliveredYear = new Date(order.created_at).getFullYear().toString()
        if (deliveredYear === year && order.status === "delivered") {
            return order
        } else {
            return;
        }
    })

    const months = ["Jaunary", "Fabruary", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"]
    const mapOrderToMonth = deliveredOrder.map(order => ({
        ...order,
        created_at: months[new Date(order.created_at).getMonth()]
    }))

    const sumPerMonth = mapOrderToMonth.reduce((acc, cur) => {
        acc[cur.created_at] = acc[cur.created_at] + cur.total || cur.total;
        return acc;
    }, {})

    return Object.entries(sumPerMonth)
}