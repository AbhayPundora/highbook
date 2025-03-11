import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      // here we have to add cors on the app/app.js otherwise we cant access the api
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      // if we are using using localstorage we cant send object , we have to send string
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <img src={Logo} alt="Logo" />
      <h1>Login</h1>
      <ul className="credential">
        <input placeholder="Username" name="username" required type="text" />
        <input
          placeholder="Password"
          name="password"
          required
          type="password"
        />
        <span>
          <Link to="/forgot-password">Forgot my password</Link>
        </span>
        <button type="submit" disabled={isLoading}>
          Login
        </button>
        {error && <span>{error}</span>}
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
