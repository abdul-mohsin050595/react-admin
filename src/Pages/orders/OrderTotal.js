import React from 'react'

function OrderTotal({order}) {
  return (
    <div>
      <h4>Total</h4>
      <table className='order_total_table'>
        <tbody>
          <tr>
            <td>Sum</td>
            <td>58.00</td>
          </tr>
          <tr>
            <td>Delivery charge</td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Tax(12%)</td>
            <td>$7</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${order.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderTotal