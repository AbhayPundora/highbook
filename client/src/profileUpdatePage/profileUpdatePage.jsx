import React, { useContext, useState } from "react";
import Logo from "../assets/logo.svg";
import "../authentication/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const ProfileUpdatePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  return (
    <form className="login-container">
      <img src={Logo} alt="Logo" />
      <h1>Update</h1>
      <ul className="credential">
        <input defaultValue={currentUser?.username} name="username" required />
        <input defaultValue={currentUser?.email} name="email" required />
        <input placeholder="Password" type="password" name="password" />
        <span style={{ color: "red" }}></span>
        <button type="submit">Update</button>
      </ul>
    </form>
  );
};

export default ProfileUpdatePage;
