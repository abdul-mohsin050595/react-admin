import React from 'react'

function FilterReviews({value,setFilterStatus,handlePageClick,setSearchParams}) {
    return (
        <select value={value} onChange={(e) => {
            setFilterStatus(e.target.value)
            handlePageClick={handlePageClick}
            setSearchParams({status : value})
        }}>
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
        </select>
    )
}

export default FilterReviews