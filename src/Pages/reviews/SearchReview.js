import React from 'react'

function SearchReview({search,onchange,handlePageClick}) {
  return (
    <div>
        <input value={search} onChange={(e) => {
          onchange(e.target.value)
          handlePageClick({selected : 0})
        }
          }/>
    </div>
  )
}

export default SearchReview