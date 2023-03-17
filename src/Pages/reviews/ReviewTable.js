import React from 'react'
import { useNavigate } from "react-router-dom";

function ReviewTable({ reviews, loading }) {
    const navigate = useNavigate()

    const navigateToUpdate = (id) => {
        navigate(`/reviews/${id}`)
    }
    if (loading) {
        return (<h1>Loading...</h1>)
    }
    return (
            Object.keys(reviews) === 0 ? (<h1>Not fount</h1>) : (
                <table>
                    <thead>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Date</td>
                            <td>Customer</td>
                            <td>Product</td>
                            <td>Rating</td>
                            <td>Comment</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => {
                                return (
                                    <tr key={review.id} onClick={() => navigateToUpdate(review.id)}>
                                        <td><input type="checkbox" /></td>
                                        <td>Date</td>
                                        <td>{review.user?.name}</td>
                                        <td>{review.productId}</td>
                                        <td>Rating</td>
                                        <td>{review.body}</td>
                                        <td>{review.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
    )
    )
}

export default ReviewTable