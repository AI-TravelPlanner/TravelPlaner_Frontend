"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toggle } from "@/components/ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, SunIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { FaPlaneUp } from "react-icons/fa6";
import { useTheme } from "../_contextapi/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#060B12] p-4 md:p-6">
            <div className="flex items-center w-full">
                {/* Logo and Branding with Home Page Link */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <Link to="/" className="flex items-center space-x-1 md:space-x-2 hover:text-gray-300 transition">
                        <FaPlaneUp className="text-sm md:text-base" />
                        <span className="font-semibold text-base md:text-xl">Travel Planner</span>
                    </Link>
                </div>

                {/* Hamburger Menu Button - Only visible on small screens */}
                <div className="ml-auto md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
                    </button>
                </div>

                {/* Desktop Navigation - Hidden on small screens */}
                <div className="hidden md:flex text-sm flex-grow items-center justify-center space-x-6 ml-6">
                    <Link to="/" className="text-white font-bold hover:text-gray-300 transition">
                        Plan a Trip
                    </Link>
                    <Link to="/create-trip" className="text-white font-bold hover:text-gray-300 transition">
                        Destinations
                    </Link>
                    <Link to="/about" className="text-white font-bold hover:text-gray-300 transition">
                        About Us
                    </Link>
                    <Link to="/contact" className="text-white font-bold hover:text-gray-300 transition">
                        Contact Us
                    </Link>
                </div>

                {/* Avatar and Theme Toggle - Hidden on small screens */}
                <div className="hidden md:flex items-center ml-auto">
                    <div className="flex items-center space-x-4">
                        <button className="h-auto p-0 hover:bg-transparent flex items-center space-x-2">
                            <Avatar>
                                <AvatarImage src="./avatar.jpg" alt="Profile image" />
                                <AvatarFallback>KK</AvatarFallback>
                            </Avatar>
                            <ChevronDownIcon size={16} className="opacity-60" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="ml-6">
                        <Toggle
                            variant="outline"
                            className="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
                            pressed={theme === "dark"}
                            onPressedChange={toggleTheme}
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            <MoonIcon
                                size={16}
                                className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
                                aria-hidden="true"
                            />
                            <SunIcon
                                size={16}
                                className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
                                aria-hidden="true"
                            />
                        </Toggle>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Only visible when hamburger is clicked */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 py-2 border-t border-[#060B12]">
                    <div className="flex flex-col space-y-4">
                        <Link 
                            to="/" 
                            className="text-white font-bold hover:text-gray-300 transition text-sm py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Plan a Trip
                        </Link>
                        <Link 
                            to="/create-trip" 
                            className="text-white font-bold hover:text-gray-300 transition text-sm py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Destinations
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-white font-bold hover:text-gray-300 transition text-sm py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-white font-bold hover:text-gray-300 transition text-sm py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        
                        {/* Mobile Avatar and Profile */}
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-2">
                                <Avatar className="size-6">
                                    <AvatarImage src="./avatar.jpg" alt="Profile image" />
                                    <AvatarFallback>KK</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">Profile</span>
                            </div>
                            
                            {/* Mobile Theme Toggle */}
                            <Toggle
                                variant="outline"
                                className="group data-[state=on]:hover:bg-muted size-8 data-[state=on]:bg-transparent"
                                pressed={theme === "dark"}
                                onPressedChange={toggleTheme}
                                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            >
                                <MoonIcon
                                    size={14}
                                    className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
                                    aria-hidden="true"
                                />
                                <SunIcon
                                    size={14}
                                    className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
                                    aria-hidden="true"
                                />
                            </Toggle>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;