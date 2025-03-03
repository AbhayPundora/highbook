import { useState } from "react";
import "./profile.css";
import Setting from "../assets/settings.svg";
import Pic from "../assets/pic.png";
import Add from "../assets/add.svg";
import BookIcon from "../assets/bookIcon.svg";
import Heart from "../assets/Heart.svg";
import { Link } from "react-router-dom";

const profile = () => {
  const [bio, setBio] = useState("");

  function handleBioData(e) {
    setBio(e.target.value);
  }
  return (
    <div
      style={{ backgroundColor: "#FFF5D7", height: "100vh", padding: "10px" }}
    >
      <form className="profile">
        <img src={Setting} />
        <div className="profile-pic">
          <img src={Pic} alt="profile pic" />
        </div>
        <span>Abhay Pundora</span>
        <span>abhaypundora17@gmail.com</span>
        <input
          className="textarea"
          type="text"
          value={bio}
          onChange={handleBioData}
        />
        <div className="action">
          <img src={Add} />
          <Link to="/collection">
            <img src={BookIcon} />
          </Link>
          <img src={Heart} />
        </div>
      </form>
    </div>
  );
};

export default profile;
