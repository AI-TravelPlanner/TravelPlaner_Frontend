import React from "react";
import ThemeToggleButton from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1>Travel Planner</h1>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
