import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const cPassword = formData.get("cPassword");
    if (password !== cPassword) {
      setError("password not matched");
      return;
    }

    try {
      // here we have to add cors on the app/app.js otherwise we cant access the api
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
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
      <h1>Sign Up</h1>
      <ul className="credential">
        <input placeholder="Username" name="username" required />
        <input placeholder="Email" name="email" required />
        <input
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <input
          placeholder="Confirm Password"
          type="password"
          name="cPassword"
        />
        <span style={{ color: "red" }}>{error}</span>
        <button type="submit" disabled={isLoading}>
          Sign Up
        </button>
        <span>
          Already have an account? <Link to="/login">Login here</Link>
        </span>
      </ul>
    </form>
  );
};

export default SignUp;
