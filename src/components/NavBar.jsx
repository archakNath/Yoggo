import { MenuIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6 py-4">
      <p className="text-2xl">YOGGO</p>
      <div className="flex gap-5 items-center">
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
        <div className="border border-black p-2 rounded-full cursor-pointer">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
