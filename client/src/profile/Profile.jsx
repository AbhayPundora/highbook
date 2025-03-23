import { useContext, useEffect, useState } from "react";
import "./profile.css";
import Setting from "../assets/settings.svg";
import UserImage from "../assets/user.png";
import Add from "../assets/add.svg";
import BookIcon from "../assets/bookIcon.svg";
import Heart from "../assets/Heart.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/logout", {
        withCredentials: true,
      });
      //localStorage.removeItem("user"); clearing localStorage
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSave = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:8000/api/users/save");
  //     navigate("/profile");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    currentUser && (
      <div className="profile-container">
        <div className="profile vintage-card">
          <img
            src={Setting}
            alt="Settings"
            className="settings-icon"
            onClick={() => setDropDown((dropDown) => !dropDown)}
          />
          <div className="profile-pic">
            <img src={currentUser?.avatar || UserImage} alt="Profile pic" />
          </div>
          <span className="profile-name">{currentUser.username}</span>
          <span className="profile-email">{currentUser.email}</span>
          <button onClick={handleLogout}>Logout</button>
          {/* <textarea
            className="textarea vintage-textarea"
            placeholder="Write something about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea> */}
          <p className="bio"></p>
          <Link to="/update">
            <button className="text-btn">Update</button>
          </Link>
          <div className="action vintage-action">
            <img src={Add} alt="Add" className="action-icon" />
            <Link to="/collection">
              <img src={BookIcon} alt="Collection" className="action-icon" />
            </Link>
            <img src={Heart} alt="Favorites" className="action-icon" />
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
