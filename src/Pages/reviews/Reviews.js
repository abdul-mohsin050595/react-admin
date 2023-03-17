import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ReactPaginate from 'react-paginate'
import ReviewTable from './ReviewTable'
import { getReviews } from '../../Redux/Actions/reviewAction'
import { searchHandler } from './serachHandler'

import "./review.css";
import SearchReview from './SearchReview';
// import FilterReviews from './FilterReviews';

function Reviews() {
  const { loading, reviews } = useSelector(state => state.reviews)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [itemOffset, setitemOffset] = useState(0);
  const [perPage, setPerPage] = useState(8)

  const filterReviews = reviews.filter(review => {
    if (filterStatus === "") {
      return review
    }
    else {
      return review.status === filterStatus
    }
  })
  const endOffset = itemOffset + +perPage;
  const currentReviews = searchHandler(filterReviews, search).slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchHandler(filterReviews, search).length / perPage);
  console.log(currentReviews)
  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * perPage) % searchHandler(filterReviews, search).length;
    setitemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  if (loading) {
    return <section>
      <h1>loading...</h1>
    </section>
  }
  return (
    <section>
      <div>
        <div className='reviews_top'>
          <SearchReview search={search} onchange={setSearch} handlePageClick={handlePageClick} />
          <div>
            <select value={filterStatus} onChange={(e) => {
              setFilterStatus(e.target.value)
              handlePageClick({ selected: 0 })
            }}>
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div >
          <ReviewTable reviews={currentReviews} loading={loading} />
          <div className='paginate_wrapper'>
            <label htmlFor="perPage"
              className={`${currentReviews.length === 0 ? "hide_perPage" : "show_perPage"}`}
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
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName={'paginatContainer'}
              pageClassName={'pageStyle'}
              activeClassName={'activePage'}
              disabledLinkClassName={'disabledLink'}
              previousClassName={'previousPage'}
              prevPageRel={"prev"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews