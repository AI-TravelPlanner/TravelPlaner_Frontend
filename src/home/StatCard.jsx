//rafce
import React from 'react'
import { cn } from '@/lib/utils'

const StatCard = ({
    image: ImageComponent,
    firstLabel,
    secondLabel,
    className
}) => {
    return (
        <div className={cn(
            "flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100",
            "bg-[#D9D9D9] transition-transform duration-300 hover:scale-105",
            "dark:bg-gray-800 dark:border-gray-700",
            className
        )}>
            <div className="p-3 mb-4 rounded-full bg-blue-50 dark:bg-gray-700">
                <ImageComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-[#FF4800] dark:text-white">
                {firstLabel}
            </h3>
            <p className="text-[#060B12] dark:text-gray-400">
                {secondLabel}
            </p>
        </div>
    )
}

export default StatCard