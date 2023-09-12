import React from "react";

function OrderItems({ items }) {
  return (
    <div className="order_item">
      <h4>Items</h4>
      <table className="order_item_table">
        <thead>
          <tr>
            <td>Product Id</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.product_id}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderItems;
