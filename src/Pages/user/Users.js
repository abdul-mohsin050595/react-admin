import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getusers } from "../../Redux/Actions/userAction";
import ReactPaginate from 'react-paginate';
import UsersTable from "./UsersTable";
import SearchUser from './SearchUser';
import "./user.css";
import { useNavigate } from 'react-router-dom';
import { filterUsers } from './filterUser';

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { users, loading } = useSelector(state => state.users);
  const [keyword, setKeyword] = useState("")
  const [itemOffset, setitemOffset] = useState(0);
  const [perPage, setPerPage] = useState(6)

  const endOffset = itemOffset + +perPage;
  const currentUsers = filterUsers(users, keyword).slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterUsers(users, keyword).length / perPage);

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * perPage) % filterUsers(users, keyword).length;
    setitemOffset(newOffset);
  };

  const createUser = () => {
    navigate(`/customers/create`)
  }

  useEffect(() => {
    dispatch(getusers())
  }, [dispatch]);

  if (loading) {
    return (<h1>Loading...</h1>)
  }
  return (
    <section>
      <div className="users">
        <div className='users_top'>
          <SearchUser keyword={keyword} onchange={setKeyword} handlePageClick={handlePageClick}/>
          <button onClick={createUser}>+ Create</button>
        </div>
        <UsersTable users={currentUsers} itemOffset={itemOffset} perPage={perPage}/>
        <div className='paginate_wrapper'>
          <label htmlFor="perPage"
            className={`${currentUsers.length === 0 ? "hide_perPage" : "show_perPage"}`}
            >
            per Page
            <select value={perPage}
              id="perPage"
              onChange={(e) => {
                setPerPage(e.target.value)
                handlePageClick({ selected: 0 })
              }}
            >
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={8}>8</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={'paginatContainer'}
            pageClassName={'pageStyle'}
            activeClassName={'activePage'}
            disabledLinkClassName={'disabledLink'}
            previousClassName={'previousPage'}
            nextClassName={'nextPage'}
          />
        </div>
      </div>
    </section>
  )
}

export default Users