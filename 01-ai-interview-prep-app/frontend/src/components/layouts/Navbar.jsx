import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] sticky top-0 z-30">
      <div className="w-full h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <Link to={"/dashboard"}>
          <h2 className="text-xl md:text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer leading-none">
            Interview Prep AI
          </h2>
        </Link>

        {user && <ProfileInfoCard />}
      </div>
    </div>
  );
};

export default Navbar;
