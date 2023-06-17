import React from "react";
import { FaSortDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const Chevrin = ({ className }) => {
  return (
    <IconContext.Provider
      value={{
        className: className,
      }}
    >
      <FaSortDown />
    </IconContext.Provider>
  );
};

export default Chevrin;
