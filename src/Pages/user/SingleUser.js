import React, { useEffect } from 'react';
import { getUserById, updateUser ,deleteUser} from '../../Redux/Actions/userAction';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm';

function SingleUser() {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (userId && userId !== "") {
      dispatch(getUserById(userId))
    }
  }, [userId, dispatch])

  const handleUserData = (user) => {
    dispatch(updateUser({
      ...user,
      created_at: user.created_at,
      updated_at: new Date().toJSON()
    }, userId))
    navigate(-1)
  }

  const handleDeleteUser = () => {
    dispatch(deleteUser(userId))
    navigate(-1)
  }

  return (
    <section>
      {
        Object.keys(user).length === 0 ?
          <div>Looding</div> :
          <>
            <UserForm userData={user} handleUserData={handleUserData} />
            <button onClick={handleDeleteUser} >
              Delete
              </button>
          </>
      }

    </section>
  )
}

export default SingleUser