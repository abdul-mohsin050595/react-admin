import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.css";

const Error = ({ error }) => {
  const navigate = useNavigate();
  return (
    <section className="error">
      <h1>Oops something went wrong!</h1>
      <p>{error}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </section>
  );
};

export default Error;
