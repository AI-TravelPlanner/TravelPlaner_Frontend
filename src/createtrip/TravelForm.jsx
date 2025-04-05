import { motion } from "framer-motion";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
    FaHome,
    FaGlobe,
    FaHeart,
    FaUser,
    FaUsers,
    FaBriefcase,
    FaSun,
    FaCar,
    FaSuitcaseRolling,
    FaGlassCheers,
    FaCamera,
    FaShip,
    FaBinoculars,
    FaSkiing,
    FaUtensils,
    FaWallet, FaDollarSign, FaMoneyBillWave
} from "react-icons/fa";

import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useTheme } from "../_contextapi/ThemeContext";

const TravelForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        tripName: "",
        location: "",
        dateRange: { from: undefined, to: undefined },
        //budget: "",
        selectedBudgetOption: "", // Holds the selected predefined budget
        customBudget: "", // Holds the custom budget if the user enters one

        travelWith: "",
        tripTheme: "",
        additionalNotes: ""
    });

    const { theme } = useTheme();
    const [validations, setValidations] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // Clear validation errors
        if (validations[name]) {
            setValidations((prevData) => ({
                ...prevData,
                [name]: ""
            }));
        }
    };

    const handleTripThemeChange = (theme) => {
        setFormData((prevData) => ({
            ...prevData,
            tripTheme: theme
        }));

        // Clear validation errors
        if (validations.tripTheme) {
            setValidations((prevData) => ({
                ...prevData,
                tripTheme: ""
            }));
        }
    };

    const handleTravelWithChange = (travellingWith) => {
        setFormData((prevData) => ({
            ...prevData,
            travelWith: travellingWith
        }));

        // Clear validation errors
        if (validations.travelWith) {
            setValidations((prevData) => ({
                ...prevData,
                travelWith: ""
            }));
        }
    };

    const handleDateChange = (range) => {
        setFormData((prevData) => ({
            ...prevData,
            dateRange: range
        }));

        if (validations.dateRange) {
            setValidations((prevData) => ({
                ...prevData,
                dateRange: ""
            }));
        }

    };

    const validateStepOne = () => {
        const errors = {};

        if (!formData.tripName.trim()) errors.tripName = "Trip name is required.";
        if (!formData.location.trim()) errors.location = "Location is required.";
        if (!formData.dateRange || !formData.dateRange.from || !formData.dateRange.to) errors.dateRange = "Travel dates are required.";

        return errors;
    };

    const validateStepTwo = () => {
        const errors = {};

        if ((!formData.customBudget.trim() || isNaN(Number(formData.customBudget)) || Number(formData.customBudget) <= 0) && !formData.selectedBudgetOption) {
            errors.customBudget = "Budget must be a positive number.";
        }
        if (!formData.selectedBudgetOption && !formData.customBudget) errors.selectedBudgetOption = "Please select a budget options"

        return errors;
    };

    const validateStepThree = () => {
        const errors = {};

        if (!formData.travelWith) errors.travelWith = "Please select who you are traveling with.";

        return errors;
    };

    const validateStepFour = () => {
        const errors = {};

        if (!formData.tripTheme) errors.tripTheme = "Please select a theme for your trip.";

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateStepFour();

        if (Object.keys(errors).length > 0) {
            setValidations(errors);
            return;
        }

        setValidations({});
        console.log("Form Data Submitted:", formData);
    };


    // Handle budget card selection
    const handleBudgetOptionChange = (option) => {
        if (formData.selectedBudgetOption === option) {
            // If the same card is selected again, reset the selected option
            setFormData({ ...formData, selectedBudgetOption: "" });
        } else {
            // Otherwise, select the new option
            setFormData({ ...formData, selectedBudgetOption: option });
        }

        if (validations.selectedBudgetOption) {
            setValidations((prevData) => ({
                ...prevData,
                selectedBudgetOption: "",
                customBudget: ""
            }))
        }

    };

    // Handle custom budget input
    const handleCustomBudgetChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            customBudget: value,
            selectedBudgetOption: "", // Reset predefined budget option if custom budget is entered
        });

        if (validations.customBudget) {
            setValidations((prevData) => ({
                ...prevData,
                customBudget: "",
                selectedBudgetOption: ""
            }))
        }


    };

    const nextStep = () => {
        let errors = {}
        if (step === 1) {
            errors = validateStepOne();
        } else if (step === 2) {
            errors = validateStepTwo();
        } else if (step === 3) {
            errors = validateStepThree();
        }

        if (Object.keys(errors).length > 0) {
            setValidations(errors);
            return;
        }

        setStep((prev) => prev + 1)
    };
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <form
            onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()}
            className={cn(
                "max-w-2xl mx-auto p-8 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-103",
                theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-gray-100'
            )}
        >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">✨ Plan Your Perfect Trip ✨</h2>
            <div className="min-h-[430px] max-h-[425px] overflow-y-auto overflow-x-hidden p-4">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full"
                >
                    {step === 1 && (<>
                        {/* Trip Name */}
                        <div className="mb-6">
                            <Label htmlFor="tripName" className="block mb-2 text-lg font-semibold">
                                Trip Name
                            </Label>
                            <Input
                                type="text"
                                id="tripName"
                                name="tripName"
                                value={formData.tripName}
                                onChange={handleChange}
                                placeholder="e.g., Summer Adventure"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {validations.tripName ? (
                                <p className="text-red-500 text-sm mt-1">{validations.tripName}</p>
                            ) : (
                                <p className="invisible text-sm mt-1">placeholder</p>
                            )}
                        </div>
                        {/* Location of Travel */}
                        <div className="mb-6">
                            <Label htmlFor="location" className="block mb-2 text-lg font-semibold">
                                Location of Travel
                            </Label>
                            <Input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="e.g., Paris, France"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {validations.location ? (
                                <p className="text-red-500 text-sm mt-1">{validations.location}</p>
                            ) : (
                                <p className="invisible text-sm mt-1">placeholder</p>
                            )}
                        </div>
                        {/* Travel Dates */}
                        <div className="mb-6">
                            <Label htmlFor="length" className="block mb-2 text-lg font-semibold">
                                Travel Dates
                            </Label>
                            <DatePickerWithRange
                                onDateChange={handleDateChange}
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.dateRange}
                            />
                            {validations.dateRange ? (
                                <p className="text-red-500 text-sm mt-1 min-h-[1.25rem]">{validations.dateRange}</p>
                            ) : (
                                <p className="invisible text-sm mt-1 min-h-[1.25rem]">placeholder</p>
                            )}
                        </div>
                    </>)}
                    {step === 2 && (<>
                        {/* Budget Selection */}
                        <div className="mb-6">
                            <Label htmlFor="length" className="block mb-2 text-lg font-semibold">
                                Select Budget
                            </Label>
                            {/* Budget Cards */}
                            <div className="mb-4">
                                <div
                                    className={cn(
                                        "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 transition-opacity duration-300 ease-in-out",
                                        formData.customBudget === "" ? "opacity-100" : "opacity-0 pointer-events-none"
                                    )}
                                >
                                    {["Low Budget", "Medium Budget", "High Budget"].map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => handleBudgetOptionChange(option)}
                                            className={cn(
                                                "p-4 border rounded-lg cursor-pointer flex flex-col items-center transition transform hover:scale-115",
                                                formData.selectedBudgetOption === option
                                                    ? "bg-blue-200 border-blue-500 shadow-md"
                                                    : "bg-white-100 border-gray-300"
                                            )}
                                        >
                                            {option === "Low Budget" && <FaWallet className="text-2xl mb-2 text-blue-500" />}
                                            {option === "Medium Budget" && <FaDollarSign className="text-2xl mb-2 text-green-500" />}
                                            {option === "High Budget" && <FaMoneyBillWave className="text-2xl mb-2 text-purple-500" />}
                                            <span className="font-medium">{option}</span>
                                        </div>
                                    ))}
                                </div>
                                {validations.selectedBudgetOption ? (
                                    <p className="text-red-500 text-sm mt-1">{validations.selectedBudgetOption}</p>
                                ) : (
                                    <p className="invisible text-sm mt-1">placeholder</p>
                                )}
                            </div>
                            {/* Custom Budget Input */}
                            <div
                                className={cn(
                                    "transition-opacity duration-300 ease-in-out",
                                    formData.selectedBudgetOption === "" ? "opacity-100" : "opacity-0 pointer-events-none"
                                )}
                            >
                                <Label htmlFor="customBudget" className="block mb-2 font-medium">
                                    Or Enter Custom Budget
                                </Label>
                                <Input
                                    type="number"
                                    id="customBudget"
                                    name="customBudget"
                                    value={formData.customBudget}
                                    onChange={handleCustomBudgetChange}
                                    placeholder="Enter your specific budget"
                                    className="w-full"
                                />
                            </div>
                            {validations.customBudget ?
                                (<p className="text-red-500 text-sm mt-1">{validations.customBudget}</p>)
                                : (
                                    <p className="invisible text-sm mt-1">placeholder</p>
                                )}
                        </div>
                    </>)}
                    {step === 3 && (<>
                        {/* Who Do You Plan on Traveling With */}
                        <div className="mb-8">
                            <Label className="block mb-2 text-lg font-semibold">
                                Who Do You Plan on Traveling With?
                            </Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {["Solo", "Friends", "Family", "Couple", "Colleagues", "Group Tour"].map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => handleTravelWithChange(option)}
                                        className={cn(
                                            "p-4 border rounded-lg cursor-pointer flex flex-col items-center transition transform hover:scale-115",
                                            formData.travelWith === option
                                                ? "bg-blue-200 border-blue-500 shadow-md"
                                                : "bg-white-100 border-gray-300"
                                        )}
                                    >
                                        {option === "Solo" && <FaUser className="text-2xl mb-2 text-blue-500" />}
                                        {option === "Friends" && <FaUsers className="text-2xl mb-2 text-green-500" />}
                                        {option === "Family" && <FaHome className="text-2xl mb-2 text-purple-500" />}
                                        {option === "Couple" && <FaHeart className="text-2xl mb-2 text-pink-500" />}
                                        {option === "Colleagues" && <FaBriefcase className="text-2xl mb-2 text-yellow-500" />}
                                        {option === "Group Tour" && <FaGlobe className="text-2xl mb-2 text-teal-500" />}
                                        <span className="font-medium">{option}</span>
                                    </div>
                                ))}
                            </div>
                            {validations.travelWith ? (<p className="text-red-500 text-sm">{validations.travelWith}</p>)
                                : (
                                    <p className="invisible text-sm mt-1">placeholder</p>
                                )}
                        </div>
                    </>)}
                    {step === 4 && (<>
                        {/* Trip Theme */}
                        <div className="mb-8">
                            <Label className="block mb-2 text-lg font-semibold">
                                Select Your Trip Theme
                            </Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    { label: "Honeymoon", icon: <FaHeart className="text-2xl mb-2 text-pink-500" /> },
                                    { label: "Family Trip", icon: <FaUsers className="text-2xl mb-2 text-purple-500" /> },
                                    { label: "Business Trip", icon: <FaBriefcase className="text-2xl mb-2 text-gray-700" /> },
                                    { label: "Summer Vacation", icon: <FaSun className="text-2xl mb-2 text-yellow-500" /> },
                                    { label: "Road Trip", icon: <FaCar className="text-2xl mb-2 text-blue-500" /> },
                                    { label: "Backpacking", icon: <FaSuitcaseRolling className="text-2xl mb-2 text-green-500" /> },
                                    { label: "Festival/Party", icon: <FaGlassCheers className="text-2xl mb-2 text-orange-500" /> },
                                    { label: "Photography Tour", icon: <FaCamera className="text-2xl mb-2 text-red-500" /> },
                                    { label: "Cruise", icon: <FaShip className="text-2xl mb-2 text-teal-500" /> },
                                    { label: "Wildlife Safari", icon: <FaBinoculars className="text-2xl mb-2 text-brown-500" /> },
                                    { label: "Ski Trip", icon: <FaSkiing className="text-2xl mb-2 text-sky-500" /> },
                                    { label: "Food Tour", icon: <FaUtensils className="text-2xl mb-2 text-red-600" /> },
                                ].map((theme) => (
                                    <div
                                        key={theme.label}
                                        onClick={() => handleTripThemeChange(theme.label)}
                                        className={cn(
                                            "p-4 border rounded-lg cursor-pointer flex flex-col items-center transition transform hover:scale-115",
                                            formData.tripTheme === theme.label
                                                ? "bg-blue-200 border-blue-500 shadow-md"
                                                : "bg-white-100 border-gray-300"
                                        )}
                                    >
                                        {theme.icon}
                                        <span className="font-medium">{theme.label}</span>
                                    </div>
                                ))}
                            </div>
                            {validations.tripTheme ? (
                                <p className="text-red-500 text-sm mt-1">{validations.tripTheme}</p>
                            ) : (
                                <p className="invisible text-sm mt-1">placeholder</p>
                            )}
                        </div>
                        {/* Additional Notes */}
                        {/*
                        <div className="mb-6">
                            <Label htmlFor="additionalNotes" className="block mb-2 text-lg font-semibold">
                                Additional Notes
                            </Label>
                            <Textarea
                                id="additionalNotes"
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                placeholder="Any extra details or preferences..."
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={4}
                            />
                        </div>
                        */}
                    </>)}
                </motion.div>
            </div>

            {/* {Navigation buttons} */}
            <div className="flex justify-center gap-8 mt-8">
                {step > 1 && (
                    <Button onClick={prevStep} type="button" className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg hover:scale-105 transition">
                        Back
                    </Button>
                )}
                {step < 4 && (
                    <Button onClick={nextStep} type="button" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg hover:scale-105 transition">
                        Next
                    </Button>
                )}
                {step === 4 && (
                    <Button type="submit" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg hover:scale-105 transition">
                        Create Trip
                    </Button>
                )}
            </div>


        </form>
    );
};

export default TravelForm;
