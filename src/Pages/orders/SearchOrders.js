
const SearchOrders = ({ keyword, onchange, handlePageClick }) => {
    return (<div>
        <input
            placeholder="Search..."
            value={keyword}
            onChange={(e) => {
                onchange(e.target.value)
                handlePageClick({ selected: 0 })
            }
            }
        />
    </div>)
}

export default SearchOrders