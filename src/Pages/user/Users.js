import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getusers } from "../../Redux/Actions/userAction";
import ReactPaginate from "react-paginate";
import UsersTable from "./UsersTable";
import "./user.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { filterUsers } from "./filterUser";
import { Error, Loading, Pagination, Search } from "../../Components";

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.users);

  const [itemOffset, setitemOffset] = useState(0);
  const [perPage, setPerPage] = useState(6);

  const [searchParam, setSearchParams] = useSearchParams({ filter: "" });
  const [keyword, setKeyword] = useState(searchParam.get("filter"));

  const handleSearch = (query) => {
    setKeyword(query);
    setSearchParams({ filter: query });
  };

  const endOffset = itemOffset + +perPage;
  const currentUsers = filterUsers(users, keyword).slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterUsers(users, keyword).length / perPage);

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * perPage) % filterUsers(users, keyword).length;
    setitemOffset(newOffset);
    if (selected) {
      setSearchParams({ page: selected });
    }
  };

  const createUser = () => {
    navigate(`/customers/create`);
  };

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;
  return (
    <section>
      <div className="users">
        <div className="users_top">
          <Search
            keyword={keyword}
            handleSearch={handleSearch}
            handlePageClick={handlePageClick}
          />
          <button onClick={createUser}>+ Create</button>
        </div>
        <UsersTable
          users={currentUsers}
          itemOffset={itemOffset}
          perPage={perPage}
        />
      </div>
      <Pagination
        setSearchParams={setSearchParams}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        perPage={perPage}
        setPerPage={setPerPage}
        currentItems={currentUsers}
      />
    </section>
  );
}

export default Users;
