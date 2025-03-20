import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaUser, FaUsers, FaHome } from "react-icons/fa";

import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useTheme } from "../_contextapi/ThemeContext";
import { set } from "date-fns";

const TravelForm = () => {
    const [formData, setFormData] = useState({
        tripName: "",
        location: "",
        dateRange: { from: undefined, to: undefined },
        budget: "",
        travelWith: "",
        additionalNotes: ""
    });

    const { theme } = useTheme();
    const [validations, setValidations] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear validation errors
        if (validations[name]) {
            setValidations((prevData) => ({
                ...prevData,
                [name]: "",
            }));
        }
    };



    const validateForm = () => {
        const errors = {};

        if (!formData.tripName.trim()) errors.tripName = "Trip name is required.";
        if (!formData.location.trim()) errors.location = "Location is required.";
        if (!formData.dateRange.from || !formData.dateRange.to) errors.dateRange = "Travel dates are required.";
        if (!formData.budget.trim() || isNaN(Number(formData.budget)) || Number(formData.budget) <= 0) {
            errors.budget = "Budget must be a positive number.";
        }
        if (!formData.travelWith) errors.travelWith = "Please select who you are traveling with.";

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setValidations(errors);
            return;
        }

        setValidations({});
        console.log("Form Data Submitted:", formData);
    };




    return (
        <form onSubmit={handleSubmit}
            className={cn(
                "max-w-md mx-auto p-6 bg-white shadow-md rounded-lg",
                theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-500 text-blue-200'
            )}>
            <h2 className="text-2xl font-bold mb-6 text-center">Plan Your Trip</h2>

            {/* Trip Name */}
            <div className="mb-4">
                <Label htmlFor="tripName" className="block mb-2 font-medium">
                    Trip Name
                </Label>
                <Input
                    type="text"
                    id="tripName"
                    name="tripName"
                    value={formData.tripName}
                    onChange={handleChange}
                    placeholder="Enter a name for your trip"
                    className="w-full"
                />
                {validations.tripName && (
                    <p className="text-red-500 text-sm">{validations.tripName}</p>
                )}
            </div>

            {/* Location of Travel */}
            <div className="mb-4">
                <Label htmlFor="location" className="block mb-2 font-medium">
                    Location of Travel
                </Label>
                <Input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your destination"
                    className="w-full"
                />
                {validations.location && (
                    <p className="text-red-500 text-sm">{validations.location}</p>
                )}
            </div>

            {/* Length (Number of Days) */}
            <div className="mb-4">
                <Label htmlFor="length" className="block mb-2 font-medium">
                    Travel Dates
                </Label>
                <DatePickerWithRange
                    onDateChange={(range) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            dateRange: range,
                        }))
                    } />
                {validations.dateRange && (
                    <p className="text-red-500 text-sm">{validations.dateRange}</p>
                )}
            </div>

            {/* Budget */}
            <div className="mb-4">
                <Label htmlFor="budget" className="block mb-2 font-medium">
                    Budget
                </Label>
                <Input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Enter your budget"
                    className="w-full"
                />
                {validations.budget && (
                    <p className="text-red-500 text-sm">{validations.budget}</p>
                )}
            </div>

            {/* Who Do You Plan on Traveling With */}
            <div className="mb-6">
                <Label className="block mb-2 font-medium">
                    Who Do You Plan on Traveling With?
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Solo Card */}
                    <div
                        onClick={() => setFormData({ ...formData, travelWith: "Solo" })}
                        className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center ${formData.travelWith === "Solo"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-white border-gray-300"
                            }`}
                    >
                        <FaUser className="text-2xl mb-2 text-blue-500" />
                        <span className="font-medium">Solo</span>
                    </div>

                    {/* Friends Card */}
                    <div
                        onClick={() => setFormData({ ...formData, travelWith: "Friends" })}
                        className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center ${formData.travelWith === "Friends"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-white border-gray-300"
                            }`}
                    >
                        <FaUsers className="text-2xl mb-2 text-green-500" />
                        <span className="font-medium">Friends</span>
                    </div>

                    {/* Family Card */}
                    <div
                        onClick={() => setFormData({ ...formData, travelWith: "Family" })}
                        className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center ${formData.travelWith === "Family"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-white border-gray-300"
                            }`}
                    >
                        <FaHome className="text-2xl mb-2 text-purple-500" />
                        <span className="font-medium">Family</span>
                    </div>
                </div>
                {validations.travelWith && (
                    <p className="text-red-500 text-sm">{validations.travelWith}</p>
                )}
            </div>

            {/* Additional Notes */}
            <div className="mb-4">
                <Label htmlFor="additionalNotes" className="block mb-2 font-medium">
                    Additional Notes
                </Label>
                <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Any additional notes?"
                    className="w-full"
                    rows={4} // Set the number of visible rows
                />
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default TravelForm;