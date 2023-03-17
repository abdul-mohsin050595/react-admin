import React from 'react'
import UserForm from './UserForm'
import { createUser } from '../../Redux/Actions/userAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const userData = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: {
    street: "",
    city: "",
    state: "",
    zip: ""
  }

}
function CreateUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUserData = (user) => {
    const timeString = {
      created_at: new Date().toJSON(),
      Updated_at: ""
    }
    dispatch(createUser({ ...user, ...timeString }))
    navigate("/customers")
  }

  return (
    <section>
      <UserForm userData={userData} handleUserData={handleUserData} />
    </section>
  )
}

export default CreateUser