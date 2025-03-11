import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggleButton from "./ThemeToggle";
import { FaPlaneUp } from "react-icons/fa6"

const Navbar = ({ buttonNames }) => {
    return (
        <nav className="p-6">
            <div className="flex items-center w-auto">
                <div className="text-sm flex-grow">
                    {buttonNames.map((name, index) => (
                        <Button className="mx-3 text-center">
                            <a
                                key={index}
                                href=""
                                className="hover:text-gray-400">
                                {name}
                            </a>
                        </Button>
                    ))}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                    <FaPlaneUp className="mr-3" />
                    <span className="font-semibold text-xl">
                        Travel Planner
                    </span>
                </div>
                <div>
                    <ThemeToggleButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
