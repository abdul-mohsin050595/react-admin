import React,{useState} from 'react'

function UserForm({ userData ,handleUserData}) {

  const [user,setUser] = useState(userData)

  const handleUserInfo = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleUserAddress = (e) => {
    setUser({...user,address:{...user.address,[e.target.name]: e.target.value }})
  }

  return (
    <div >
      <div>
        <h4>User Information</h4>
        <div>
          <input
            placeholder='Fullname'
            name="name" value={user.name}
            onChange={handleUserInfo}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder='Email'
            name="email" value={user.email}
            onChange={handleUserInfo}
          />
          <input
            placeholder='phone'
            type="tell"
            name="phone"
            value={user.phone}
            onChange={handleUserInfo}
          />
        </div>
      </div>
      <div>
        <h4>Address</h4>
        <div>
          <div>
            <input
              placeholder='address'
              name="street"
              value={user.address.street}
              onChange={handleUserAddress}
            />
          </div>
          <div>
            <input
              placeholder='City'
              name="city"
              value={user.address.city}
              onChange={handleUserAddress}
            />
            <input
              placeholder='State'
              name="state" value={user.address.state}
              onChange={handleUserAddress}
            />
            <input
              placeholder='Zip code'
              name="zip" value={user.address.zip}
              onChange={handleUserAddress}
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Password</h4>
        <div>
          <input
            type="password"
            placeholder='Password'
            name="password" value={user.password}
            onChange={handleUserInfo}
          />
        </div>
      </div>
      <button onClick={() => handleUserData(user)} >
        Save
      </button>
    </div>
  )
}

export default UserForm