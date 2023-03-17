import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "./review.css"
import { reviewDetail, updateReview, deleteReview } from '../../Redux/Actions/reviewAction'

function UpdateReview() {
    const { reviewId } = useParams()
    const { review, loading } = useSelector(state => state.review)
    const dispatch = useDispatch()
    const [status, setStatus] = useState(review.status)
    const [comment, setComment] = useState(review.body)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(reviewDetail(reviewId))
    }, [dispatch, reviewId])

    const saveReviewDetil = () => {
        dispatch(updateReview(reviewId, {
            ...review,
            status: status,
            body: comment
        }))
        navigate(-1)
    }
    return (
        <section>
            {
                loading ? (
                    <h1>Loading</h1>
                ) : (
                    <div className='review_detail'>
                        <div className='review_items'>
                            <div className='review_item'>
                                <p>Customer</p>
                                <Link
                                    to={`/customers/${review.user?.id}`}
                                    className="user_link"
                                >
                                    {review.user?.name}
                                </Link>
                            </div>
                            <div className='review_item'>
                                <p>Product</p>
                                <Link
                                    to={`/products/${review.productId}`}
                                    className="product_link"
                                >
                                    productId : {review.productId}
                                </Link>
                            </div>
                        </div>
                        {/* <div className='review_items'>
                            <div className='review_item'>
                                <p>Date</p>
                                <small>3/7/2013</small>
                            </div>
                            <div className='review_item'>
                                <p>Rating</p>
                                <small>4.5</small>
                            </div>
                        </div> */}
                        <div className='review_items'>
                            <div className="comments_field">
                                <label>Comments</label>
                                <br />
                                <textarea
                                    style={{ width: "100%", height: "100px" }}
                                    name="body"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className='review_items'>
                            <button
                                onClick={saveReviewDetil}
                            >
                                Save
                            </button>
                            <div>
                                <label>Status</label>
                                <br />
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="accepted">Accepted</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                            <button
                                onClick={() => dispatch(deleteReview(review.id))}
                            >
                                Delete
                            </button>
                        </div>


                    </div>
                )
            }
        </section>
    )
}

export default UpdateReview