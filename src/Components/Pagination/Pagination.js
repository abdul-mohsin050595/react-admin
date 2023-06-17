import React from "react";
import ReactPaginate from 'react-paginate';
import "./pagination.css";

const Pagination = (
  {
    handlePageClick,
    pageCount,
    perPage,
    setPerPage,
    currentItems,
    setSearchParams
  }
) => {

  return (
    <div
      className={`paginate_wrapper`}
    >
      <label
        htmlFor="perPage"
        className={
          `${currentItems.length === 0 ?
            "hide_perPage" :
            "show_perPage"
          }`
        }
      >
        per Page
        <select
          value={perPage}
          id="perPage"
          onChange={(e) => {
            setPerPage(e.target.value)
            handlePageClick({ selected: 0 })
            setSearchParams({ perPage: perPage })
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
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={'paginatContainer'}
        pageClassName={'pageStyle'}
        activeClassName={'activePage'}
        disabledLinkClassName={'disabledLink'}
        previousClassName={'previousPage'}
        nextClassName={"previousPage"}
        prevPageRel={"prev"}
      />
    </div>
  )
}

export default Pagination