import React, { useEffect, useMemo, useState } from "react";
import { fetchOrders } from "../../Redux/Actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import OrdersTable from "./OrdersTable";
import "./order.css";
import { Error, Loading, Pagination, Search } from "../../Components";
import { filterorders } from "./filterOrders";
import FilterByStatus from "./FilterByStatus";
import { useSearchParams } from "react-router-dom";

function Orders() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [keyword, setKeyword] = useState(searchParams.get("filter") ?? "");
  const [itemOffset, setitemOffset] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [status, setStatus] = useState("");

  const handleSearch = (query) => {
    setKeyword(query);
    setSearchParams({
      filter: query,
    });
  };

  const filteredOrders = useMemo(
    () => filterorders(orders, keyword, status),
    [orders, keyword, status]
  );

  const endOffset = itemOffset + +perPage;
  const currentOrders = filteredOrders.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredOrders.length / perPage);

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * perPage) % filteredOrders.length;
    setitemOffset(newOffset);
    if (selected) {
      setSearchParams({ page: selected });
    }
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <section>
      <div className="orders">
        <div className="orders_top">
          <Search
            value={keyword}
            handleSearch={handleSearch}
            handlePageClick={handlePageClick}
          />
          <FilterByStatus
            status={status}
            onchange={setStatus}
            handlePageClick={handlePageClick}
            setSearchParams={setSearchParams}
          />
        </div>
        <OrdersTable orders={currentOrders} />
      </div>
      <Pagination
        setSearchParams={setSearchParams}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        perPage={perPage}
        setPerPage={setPerPage}
        currentItems={currentOrders}
      />
    </section>
  );
}

export default Orders;
