import { Button } from "antd";
import React from "react";
import { auth } from "../Firebase/Firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userProfileImg");
    signOut(auth);
    navigate("/");
  };
  const userName = localStorage.getItem("userName").split(" ")[0];

  return (
    <div className="user-profile-container">
      <div className="profilepic">
        <img
          src={localStorage.getItem("userProfileImg")}
          style={{ width: "30px", height: "30px" }}
          alt=""
        />
        <p>{userName}</p>
      </div>

      <div>
        <Button type="primary" onClick={logOutHandler}>
          LogOut
        </Button>
      </div>
    </div>
  );
}

export default UserProfile;
