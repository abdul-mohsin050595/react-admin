import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./review.css"; // Import the CSS stylesheet
import {
  reviewDetail,
  updateReview,
  deleteReview,
} from "../../Redux/Actions/reviewAction";

function UpdateReview() {
  const { reviewId } = useParams();
  const { review, loading } = useSelector((state) => state.review);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(review.status);
  const [comment, setComment] = useState(review.body);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(reviewDetail(reviewId));
  }, [dispatch, reviewId]);

  const saveReviewDetail = () => {
    dispatch(
      updateReview(reviewId, {
        ...review,
        status: status,
        body: comment,
      })
    );
    navigate(-1);
  };

  return (
    <section className="update-review-container">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="review-detail">
          <div className="review-items">
            <div className="review-item">
              <p>Customer</p>
              <Link to={`/customers/${review.user?.id}`} className="user-link">
                {review.user?.name}
              </Link>
            </div>
            <div className="review-item">
              <p>Product</p>
              <Link
                to={`/products/${review.productId}`}
                className="product-link"
              >
                Product ID: {review.productId}
              </Link>
            </div>
          </div>
          <div className="review-items">
            <div className="comments-field">
              <label htmlFor="comment">Comments</label>
              <textarea
                id="comment"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <div className="review-items">
            <div className="status-field">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
          <div className="button-container">
            {" "}
            {/* Wrap the button in a container */}
            <button onClick={saveReviewDetail}>Save</button>
            <button onClick={() => dispatch(deleteReview(review.id))}>
              Delete
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default UpdateReview;
