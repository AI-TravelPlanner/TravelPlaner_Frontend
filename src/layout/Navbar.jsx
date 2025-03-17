"use client";

import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Toggle } from "@/components/ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, SunIcon, ChevronDownIcon } from "lucide-react";
import { FaPlaneUp } from "react-icons/fa6";
import { useTheme } from "../_contextapi/ThemeContext"; // Use your theme context

const Navbar = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state & toggle function

    return (
        <nav className="p-6">
            <div className="flex items-center w-full">
                {/* Navigation Links */}
                <div className="text-sm flex-grow flex space-x-6">
                    <Link to="/" className="text-white font-bold hover:text-gray-300 transition">
                        Plan a Trip
                    </Link>
                    <Link to="/create-trip" className="text-white font-bold hover:text-gray-300 transition">
                        Destinations
                    </Link>
                </div>

                {/* Logo and Branding with Home Page Link */}
                <div className="flex items-center space-x-4 ml-8">
                    <Link to="/" className="flex items-center space-x-2 hover:text-gray-300 transition">
                        <FaPlaneUp className="mr-2" />
                        <span className="font-semibold text-xl">Travel Planner</span>
                    </Link>
                </div>

                {/* Avatar Section */}
                <div className="flex items-center space-x-4 ml-6">
                    <button className="h-auto p-0 hover:bg-transparent flex items-center space-x-2">
                        <Avatar>
                            <AvatarImage src="./avatar.jpg" alt="Profile image" />
                            <AvatarFallback>KK</AvatarFallback>
                        </Avatar>
                        <ChevronDownIcon size={16} className="opacity-60" aria-hidden="true" />
                    </button>
                </div>

                {/* Theme Toggle Button */}
                <div className="ml-6">
                    <Toggle
                        variant="outline"
                        className="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
                        pressed={theme === "dark"}
                        onPressedChange={toggleTheme} // Calls context function to toggle theme
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
        </nav>
    );
};

export default Navbar;
