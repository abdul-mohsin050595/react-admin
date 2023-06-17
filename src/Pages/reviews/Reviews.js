import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewTable from "./ReviewTable";
import { getReviews } from "../../Redux/Actions/reviewAction";
import { searchHandler } from "./serachHandler";

import "./review.css";
import { Error, Loading, Pagination, Search } from "../../Components";
import FilterReviews from "./FilterReviews";
import { useSearchParams } from "react-router-dom";

function Reviews() {
  const { loading, reviews, error } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams({ filter: "" });
  const [search, setSearch] = useState(searchParams.get("filter"));
  const [filterStatus, setFilterStatus] = useState("");
  const [itemOffset, setitemOffset] = useState(0);
  const [perPage, setPerPage] = useState(8);

  const handleSearch = (query) => {
    setSearch(query);
    setSearchParams({ filter: query });
  };
  const filterReviews = reviews.filter((review) => {
    if (filterStatus === "") {
      return review;
    } else {
      return review.status === filterStatus;
    }
  });
  const endOffset = itemOffset + +perPage;
  const currentReviews = searchHandler(filterReviews, search).slice(
    itemOffset,
    endOffset
  );
  const pageCount = Math.ceil(
    searchHandler(filterReviews, search).length / perPage
  );

  const handlePageClick = ({ selected }) => {
    const newOffset =
      (selected * perPage) % searchHandler(filterReviews, search).length;
    setitemOffset(newOffset);
    if (selected) {
      setSearchParams({ page: selected });
    }
  };

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) return <Error error={error} />;
  return (
    <section>
      <div className="review">
        <div className="reviews_top">
          <Search
            handleSearch={handleSearch}
            value={search}
            handlePageClick={handlePageClick}
          />
          <div>
            <FilterReviews
              value={filterStatus}
              setFilterStatus={setFilterStatus}
              handlePageClick={handlePageClick}
              setSearchParams={setSearchParams}
            />
          </div>
        </div>
        <ReviewTable reviews={currentReviews} />
      </div>

      <div>
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          perPage={perPage}
          setPerPage={setPerPage}
          currentItems={currentReviews}
          setSearchParams={setSearchParams}
        />
      </div>
    </section>
  );
}

export default Reviews;
