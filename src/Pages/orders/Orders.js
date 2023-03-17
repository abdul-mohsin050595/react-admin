import React, { useEffect, useMemo, useState } from 'react';
import { fetchOrders } from "../../Redux/Actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import OrdersTable from './OrdersTable';
import "./order.css"
import ReactPaginate from 'react-paginate';
import SearchOrders from "./SearchOrders"
import { filterorders } from './filterOrders';
import FilterByStatus from '../reviews/FilterByStatus';

function Orders() {
  const dispatch = useDispatch()
  const { orders, loading } = useSelector(state => state.orders)
  const [keyword, setKeyword] = useState("")
  const [itemOffset, setitemOffset] = useState(0);
  const [perPage, setPerPage] = useState(6)
  const [status, setStatus] = useState("")

  const filteredOrders = useMemo(
    () => filterorders(orders, keyword, status)
    , [orders, keyword, status])

  const endOffset = itemOffset + +perPage;
  const currentorders = filteredOrders.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredOrders.length / perPage);

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * perPage) % filteredOrders.length;
    setitemOffset(newOffset);
  };
  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  if (loading) {
    return loading
  }
  return (
    <section>
      <div className='orders'>
        <div className='orders_top'>
          <SearchOrders
            keyword={keyword}
            onchange={setKeyword}
            handlePageClick={handlePageClick}
          />
          <FilterByStatus
            status={status}
            onchange={setStatus}
            handlePageClick={handlePageClick}
          />
        </div>
        <OrdersTable orders={currentorders} />
        <div className='paginate_wrapper'>
          <label htmlFor="perPage"
            className={`${currentorders.length === 0 ? "hide_perPage" : "show_perPage"}`}
          >
            per Page
            <select value={perPage}
              id="perPage"
              onChange={(e) => {
                setPerPage(e.target.value)
                handlePageClick({ selected: 0 })
              }}
            >
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={8}>8</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={'paginatContainer'}
            pageClassName={'pageStyle'}
            activeClassName={'activePage'}
            disabledLinkClassName={'disabledLink'}
            previousClassName={'previousPage'}
            nextClassName={'nextPage'}
          />
        </div>
      </div>
    </section>
  )
}

export default Orders