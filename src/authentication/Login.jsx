import React from "react";
import Logo from "../assets/logo.svg";
import "./authentication.css";
import LoginTextbox from "./Textfield";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <form className="login-container">
      <img src={Logo} />
      <h1>Login</h1>
      <ul className="credential">
        <LoginTextbox placeHolderText={"Email"} />
        <LoginTextbox placeHolderText={"Password"} />
        <span>
          <Link>forgot my password</Link>
        </span>
        <button>Login</button>
        <span>
          Don't have an account? <Link to="/signup">Sign-up</Link>
        </span>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          }}
        >
          Login with facebook
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          }}
        >
          Login with google
        </button>
      </ul>
    </form>
  );
};

export default login;
