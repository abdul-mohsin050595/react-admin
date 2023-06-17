import React, { useState, useEffect } from "react";
import { formatDate } from "./formatDate";
import { useNavigate, Link } from "react-router-dom";
import { Chevrin } from "../../Components";

const tableHead = [
  { field: "id", name: "Order Id" },
  { field: "created_at", name: "Date" },
  { field: "user_id", name: "Customer Id" },
  { field: "street", name: "Address" },
  { field: "status", name: "Status" },
  { field: "items", name: "Items" },
  { field: "total", name: "Total" },
];

function OrdersTable({ orders }) {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState({ field: "", direction: "asc" });
  const [curOrders, setCurOrders] = useState(orders);

  const selectedOrders = curOrders.filter(
    (order) => order.isChecked === true
  ).length;

  const checkedHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "selectedAll") {
      const checkedOrder = curOrders.map((order) => {
        return { ...order, isChecked: checked };
      });
      setCurOrders(checkedOrder);
      console.log("all", checked);
    } else {
      const checkedOrder = curOrders.map((order) =>
        order.id === +name ? { ...order, isChecked: checked } : order
      );
      setCurOrders(checkedOrder);
      console.log(name, checked);
    }
  };

  const sortOrder = (head) => {
    setSorting({
      field: head.field,
      direction:
        head.field === sorting.field
          ? sorting.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  const deleteAllhandler = () => {
    console.log("delete All");
  };

  useEffect(() => {
    const sortedCurrentOrders = orders.sort((a, b) => {
      return a[sorting.field] > b[sorting.field] ? 1 : -1;
    });
    setCurOrders(
      sorting.direction === "asc"
        ? sortedCurrentOrders
        : sortedCurrentOrders.reverse()
    );
  }, [sorting, orders]);

  const navigateToOrderDetail = (id) => {
    navigate(`/orders/${id}`);
  };
  if (orders.length === 0) {
    return <h1>Not Found</h1>;
  }

  return (
    <>
      <div className={`selectedContainer ${selectedOrders ? " show" : "hide"}`}>
        <span>
          <strong>Selected Items:</strong>
          {selectedOrders}
        </span>
        <button className="delete_all_btn" onClick={deleteAllhandler}>
          Delete All
        </button>
      </div>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                name="selectedAll"
                checked={!curOrders?.some((order) => order?.isChecked !== true)}
                onChange={checkedHandler}
              />
            </td>
            <>
              {tableHead.map((head, idx) => {
                return (
                  <td key={idx}>
                    <Link
                      className="head_contaner"
                      onClick={() => sortOrder(head)}
                    >
                      {head.name}
                      {head.field === sorting.field && (
                        <Chevrin
                          className={
                            sorting.field === head.field
                              ? sorting.direction
                              : "asc"
                          }
                        />
                      )}
                    </Link>
                  </td>
                );
              })}
            </>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr
                key={order.id}
                onClick={() => navigateToOrderDetail(order.id)}
              >
                <td onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    name={order.id}
                    checked={
                      curOrders?.find((o) => o.id === order.id)?.isChecked ===
                        true || false
                    }
                    onChange={(e) => checkedHandler(e)}
                  />
                </td>
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
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default OrdersTable;
