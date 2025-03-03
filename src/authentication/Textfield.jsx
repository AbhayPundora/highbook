import React, { useState } from "react";

const Textfield = ({ placeHolderText }) => {
  const [userCredential, setUserCredential] = useState("");

  function handleChange(e) {
    setUserCredential(e.target.value);
  }
  return (
    <input
      value={userCredential}
      onChange={handleChange}
      style={{
        width: "600px",
        height: "50px",
        border: "1px solid black",
        padding: "10px",
        outline: "none",
      }}
      placeholder={placeHolderText}
    />
  );
};

export default Textfield;
