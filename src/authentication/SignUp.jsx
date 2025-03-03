import React from "react";
import Logo from "../assets/logo.svg";
import "./authentication.css";
import LoginTextbox from "./Textfield";
import { Link } from "react-router-dom";

const login = ({ login, signup }) => {
  return (
    <form className="login-container">
      <img src={Logo} />
      <h1>Sign Up</h1>
      <ul className="credential">
        <LoginTextbox placeHolderText={"First Name"} />
        <LoginTextbox placeHolderText={"Last Name"} />
        <LoginTextbox placeHolderText={"Email"} />
        <LoginTextbox placeHolderText={"Password"} />
        <LoginTextbox placeHolderText={"Confirm Password"} />
        <button>Sign Up</button>
        <span>
          Already have an account? <Link to="/login">Login-here</Link>
        </span>
      </ul>
    </form>
  );
};

export default login;
