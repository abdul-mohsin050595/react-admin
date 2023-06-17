import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSelectedUsers } from "../../Redux/Actions/userAction";
import { Chevrin } from "../../Components";

const tableHead = [
  { field: "id", name: "Id" },
  { field: "name", name: "Name" },
  { field: "email", name: "Email" },
  { field: "phone", name: "Phone" },
  { field: "created_at", name: "Date" },
];

function UsersTable({ users }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sorting, setSorting] = useState({ field: "", direction: "asc" });
  const [curUsers, setCurUsers] = useState(users);

  const selectedUsers = curUsers.filter(
    (user) => user.isChecked === true
  ).length;

  const deleteAllhandler = () => {
    let selectedIds = [];
    curUsers.forEach((user) => {
      if (user.isChecked === true) {
        selectedIds.push(user.id);
      }
    });
    dispatch(deleteSelectedUsers(selectedIds));
  };

  const navigateToUser = (usersId) => {
    navigate(`/customers/${usersId}`);
  };

  const sortusers = (head) => {
    setSorting({
      field: head.field,
      direction:
        head.field === sorting.field
          ? sorting.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  const checkedHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "selectedAll") {
      const checkedUser = curUsers.map((user) => {
        return { ...user, isChecked: checked };
      });
      // console.log(checkedUser)
      setCurUsers(checkedUser);
    } else {
      const checkedUser = curUsers.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setCurUsers(checkedUser);
      // console.log(checkedUser)
    }
  };

  useEffect(() => {
    const sortedCurrentUsers = users.sort((a, b) => {
      return a[sorting.field] > b[sorting.field] ? -1 : 1;
    });
    setCurUsers(
      sorting.direction === "asc"
        ? sortedCurrentUsers
        : sortedCurrentUsers.reverse()
    );
  }, [sorting, dispatch, users]);

  if (users.length === 0) {
    return <h1>Not Found</h1>;
  }
  return (
    <div>
      <div
        className={`selectedContainer 
                ${selectedUsers ? "show" : "hide"}`}
      >
        <span>
          <strong>Selected Users:</strong>
          {selectedUsers}
        </span>
        <button className="delete_all_btn" onClick={deleteAllhandler}>
          Delete All
        </button>
      </div>

      <table className="user_table" cellSpacing={0}>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                name="selectedAll"
                checked={!curUsers?.some((user) => user?.isChecked !== true)}
                onChange={(e) => checkedHandler(e)}
              />
            </td>
            {tableHead.map((head, idx) => {
              return (
                <td key={idx}>
                  <Link
                    className="head_contaner"
                    onClick={() => sortusers(head)}
                  >
                    {head.name}
                    {head.field === sorting.field && (
                      <Chevrin
                        className={
                          sorting.field === head.field
                            ? sorting.direction
                            : "asc"
                        }
                      />
                    )}
                  </Link>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {curUsers.map((user) => {
            // console.log(curUsers?.find(u =>u.id === user.id)?.isChecked === true ||false)
            return (
              <tr key={user.id} onClick={() => navigateToUser(user.id)}>
                <td onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    name={user.name}
                    checked={user?.isChecked || false}
                    onChange={(e) => checkedHandler(e)}
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
