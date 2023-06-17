import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Chevrin } from "../../Components";

const tableHead = [
  { field: "", name: "Date" },
  { field: "name", name: "Customer" },
  { field: "productId", name: "productId" },
  { field: "body", name: "Comments" },
  { field: "", name: "Rating" },
  { field: "status", name: "Status" },
];

function ReviewTable({ reviews }) {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState({ field: "", direction: "asc" });
  const [curReviews, setCurReviews] = useState(reviews);

  const selectedReviews = curReviews.filter(
    (review) => review.isChecked === true
  ).length;

  const checkedHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "selectedAll") {
      const checkedReview = curReviews.map((review) => {
        return { ...review, isChecked: checked };
      });
      setCurReviews(checkedReview);
    } else {
      const checkedReview = curReviews.map((review) =>
        review.id === +name ? { ...review, isChecked: checked } : review
      );
      setCurReviews(checkedReview);
      console.log(checkedReview);
    }
  };

  const sortReview = (head) => {
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
    const sortedCurrentReviews = reviews.sort((a, b) => {
      return a[sorting.field] > b[sorting.field] ? -1 : 1;
    });
    setCurReviews(
      sorting.direction === "asc"
        ? sortedCurrentReviews.reverse()
        : sortedCurrentReviews
    );
  }, [sorting, reviews]);

  const navigateToUpdate = (id) => {
    navigate(`/reviews/${id}`);
  };

  if (reviews.length === 0) {
    return <h1>Not Found</h1>;
  }

  return (
    <>
      <div
        className={`
                 selectedContainer ${selectedReviews ? " show" : "hide"}`}
      >
        <span>
          <strong>Selected Items:</strong>
          {selectedReviews}
        </span>
        <button className="delete_all_btn " onClick={deleteAllhandler}>
          Delete All
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                name="selectedAll"
                checked={
                  !curReviews?.some((review) => review?.isChecked !== true)
                }
                onChange={checkedHandler}
              />
            </td>
            {tableHead.map((head, idx) => {
              return (
                <td key={idx}>
                  <Link
                    className="head_contaner"
                    onClick={() => sortReview(head)}
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
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => {
            return (
              <tr key={review.id} onClick={() => navigateToUpdate(review.id)}>
                <td onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    name={review.id}
                    checked={
                      curReviews?.find((r) => r.id === review.id)?.isChecked ===
                        true || false
                    }
                    onChange={checkedHandler}
                  />
                </td>
                <td>Date</td>
                <td>{review.user.name}</td>
                <td>{review.productId}</td>
                <td>Rating</td>
                <td>{review.body}</td>
                <td>{review.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ReviewTable;
