import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };
  return (
    user && (
      <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
        <img
          src={user.profileImageURL}
          alt="profile picture"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-orange-400 transition-colors"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            {user.name || "User"}
          </p>
          <button
            onClick={handleLogout}
            className="text-xs text-orange-600 font-medium hover:text-orange-700 hover:underline transition-colors leading-tight mt-0.5"
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
