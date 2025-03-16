import * as React from "react"
import { format, getMonth, getYear, setMonth, setYear } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function DatePickerWithRange({
    className,
    onDateChange,
    startYear = getYear(new Date()),
    endYear = getYear(new Date()) + 100
}) {

    const [date, setDate] = React.useState({
        from: undefined,
        to: undefined,
    });

    const [currentMonth, setCurrentMonth] = React.useState(new Date()); // Track the current month for the calendar

    const handleDateSelect = (range) => {
        setDate(range)
        onDateChange(range)
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

    const handleMonthChange = (month) => {
        console.log("Selected Month:", month);
        const newMonth = setMonth(currentMonth, months.indexOf(month));
        setCurrentMonth(newMonth);
    }

    const handleYearChange = (year) => {
        console.log("Selected Year:", year);
        const newMonth = setYear(currentMonth, parseInt(year));
        setCurrentMonth(newMonth);
    }

    const isDateDisabled = (date) => {
        if (date < new Date()) {
            return true
        }
        return false
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild={true}>
                    <div
                        className={cn(
                            "inline-flex items-center px-4 py-2 border rounded-md cursor-pointer shadow-sm hover:bg-gray-100",
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </div>

                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">

                    <div className="flex justify-between p-4 border-b">
                        <Select
                            onValueChange={handleMonthChange}
                            value={months[getMonth(currentMonth)]}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                                {months.map(month => (
                                    <SelectItem key={month} value={month}>{month}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select
                            onValueChange={handleYearChange}
                            value={getYear(currentMonth).toString()}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {years.map(year => (
                                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        month={currentMonth}
                        onMonthChange={setCurrentMonth}
                        selected={date}
                        onSelect={handleDateSelect}
                        numberOfMonths={2}
                        disabled={isDateDisabled}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
