import React from 'react'

function FilterReviews({status,onchange}) {
    return (
        <select value={status} onChange={(e) => onchange(e.target.value)}>
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
        </select>
    )
}

export default FilterReviews