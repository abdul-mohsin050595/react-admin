import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { deleteSelectedUsers } from '../../Redux/Actions/userAction';

function UsersTable({ users }) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [sorting, setSorting] = useState({ field: "", asc: false })
    const [curUsers, setCurUsers] = useState(users)

    const selectedUsers = curUsers.filter(user => user.isChecked === true).length

    const deleteAllhandler = () => {
        let selectedIds = [];
        curUsers.forEach(user => {
            if(user.isChecked === true){
                selectedIds.push(user.id)
            }
        })
        dispatch(deleteSelectedUsers(selectedIds))
    }

    const navigateToUser = (usersId) => {
        navigate(`/customers/${usersId}`)
    }

    const sortusers = (field, asc) => {
        setSorting({ field: field, asc: asc })
    }

    const checkedHandler = (e) => {
        const { name, checked } = e.target
        if (name === "selectedAll") {
            const checkedUser = curUsers.map(user => {
                return { ...user, isChecked: checked }
            })
            // console.log(checkedUser)
            setCurUsers(checkedUser)
        } else {
            const checkedUser = curUsers.map(user => user.name === name ? { ...user, isChecked: checked } : user
            )
            setCurUsers(checkedUser)
            // console.log(checkedUser)
        }
    }
    useEffect(() => {
        const sortedCurrentUsers = users.sort((a, b) => {
            return a[sorting.field] > b[sorting.field] ? 1 : -1;
        });
        setCurUsers(sorting.asc ? sortedCurrentUsers : sortedCurrentUsers.reverse())
    }, [sorting,dispatch,users])

    if (users.length === 0) {
        return (<h1>Not Found</h1>)
    }
    return (
        <div>
            <div className={`selectedContainer ${selectedUsers ? ' show' : "hide"}`}>
                <span><strong>Selected Users:</strong>{selectedUsers}</span>
                <button onClick={deleteAllhandler}>Delete All</button>
            </div>
            <table className='user_table'>
                <thead>
                    <tr >
                        <td>
                            <input
                                type="checkbox"
                                name='selectedAll'
                                checked={!curUsers?.some(user => user?.isChecked !== true)}
                                onChange={(e) => checkedHandler(e)}
                            />
                        </td>
                        <td><Link onClick={() => sortusers("id", !sorting.asc)}>ID</Link></td>
                        < td > <Link onClick={() => sortusers("name", !sorting.asc)}>Name</Link></td>
                        <td><Link onClick={() => sortusers("email", !sorting.asc)}>Email</Link></td>
                        <td><Link onClick={() => sortusers("phone", !sorting.asc)}>Phone</Link></td>
                        <td><Link onClick={() => sortusers("created_at", !sorting.asc)}>Joined</Link></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        curUsers.map(user => {
                            return (
                                <tr key={user.id} onClick={() => navigateToUser(user.id)}>
                                    <td onClick={(e) => e.stopPropagation()}>
                                        <input
                                            type="checkbox"
                                            name={user.name}
                                            checked={user?.isChecked || false}
                                            onChange={(e) => checkedHandler(e)}
                                        /></td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.created_at}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable