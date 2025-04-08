import React from "react";
import ThemeToggleButton from "./ThemeToggle";
import Navbar from "./Navbar";

const Header = () => {
  // const navButtons = ["Plan a Trip", "Destinations"];

  return (
    <header className=" text-white p-4">
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
