import React from "react"
const FilterByStatus = ({ status, onchange, handlePageClick,setSearchParams}) => {
    return (
        <div>
            <select
                value={status}
                onChange={(e) => {
                    onchange(e.target.value)
                    handlePageClick({ selected: 0 })
                    setSearchParams({status : e.target.value})
                }}
            >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
            </select>
        </div>
    )
}

export default FilterByStatus