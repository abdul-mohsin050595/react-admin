import React, { useState } from "react";
import "./user.css";

function UserForm({ userData, handleUserData }) {
  const [user, setUser] = useState(userData);

  const handleUserInfo = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUserAddress = (e) => {
    setUser({
      ...user,
      address: { ...user.address, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="user-form">
      <div>
        <h4>User Information</h4>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={handleUserInfo}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleUserInfo}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleUserInfo}
          />
        </div>
      </div>
      <div>
        <h4>Address</h4>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            placeholder="Street Address"
            name="street"
            value={user.address.street}
            onChange={handleUserAddress}
          />
        </div>
        <div className="address-fields">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="City"
              name="city"
              value={user.address.city}
              onChange={handleUserAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              placeholder="State"
              name="state"
              value={user.address.state}
              onChange={handleUserAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              placeholder="Zip Code"
              name="zip"
              value={user.address.zip}
              onChange={handleUserAddress}
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Password</h4>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleUserInfo}
          />
        </div>
      </div>
      <button onClick={() => handleUserData(user)}>Save</button>
    </div>
  );
}

export default UserForm;
