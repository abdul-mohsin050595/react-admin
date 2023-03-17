import React from 'react'

function SearchUser({ keyword, onchange, handlePageClick }) {
  return (
    <div>
      <input value={keyword} onChange={(e) => {
        handlePageClick({ selected: 0 })
        onchange(e.target.value)
      }
      } />
    </div>
  )
}

export default SearchUser