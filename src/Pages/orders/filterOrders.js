import { formatDate } from "./formatDate"

export const filterorders = (orders, keyword, status) => {
    const newOrders = orders.filter(order => {
        if (keyword === "" ) {
            return order
        }
        // else if (status !== "") {
        //     return order.status === status
        // } 
        else {
            return order.status.toLowerCase().includes(keyword.toLowerCase()) ||
                formatDate(order.created_at).toLowerCase().includes(keyword.toLowerCase())
        }
    })
    // return newOrders
    return newOrders.filter(order => {
        if(status === ""){
            return order
        }else{
            return order.status === status
        }
    })
}
