import React from "react";
import Main from "../components/Main";

const collection = () => {
  return (
    <div>
      <h1>YOUR COLLECTION</h1>
      <Main collection={true} />
    </div>
  );
};

export default collection;
