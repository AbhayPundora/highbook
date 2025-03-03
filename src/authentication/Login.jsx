import React from "react";
import Logo from "../assets/logo.svg";
import "./authentication.css";
import LoginTextbox from "./Textfield";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="login-container">
      <img src={Logo} alt="Logo" />
      <h1>Login</h1>
      <ul className="credential">
        <LoginTextbox placeHolderText="Email" />
        <LoginTextbox placeHolderText="Password" />
        <span>
          <Link to="/forgot-password">Forgot my password</Link>
        </span>
        <button type="submit">Login</button>
        <span>
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </span>
        <button className="social-login">Login with Facebook</button>
        <button className="social-login">Login with Google</button>
      </ul>
    </form>
  );
};

export default Login;
