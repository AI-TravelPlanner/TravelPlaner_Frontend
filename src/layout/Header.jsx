import React from "react";
import ThemeToggleButton from "./ThemeToggle";
import Navbar from "./Navbar";

const Header = () => {
  const navButtons = ["Plan a Trip", "Destinations"];

  return (
    <header className="bg-gray-800 text-white p-4">
      <Navbar buttonNames={navButtons}></Navbar>
    </header>
  );
};

export default Header;
