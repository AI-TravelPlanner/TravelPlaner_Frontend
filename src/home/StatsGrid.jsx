import { cn } from '@/lib/utils'
import React from 'react'
import { FaPlane, FaGlobe, FaUsers } from 'react-icons/fa';
import StatCard from './StatCard'

const StatsGrid = ({
    gap = 'gap-15',
    className
}) => {
    return (
        <div className={cn(
            'flex flex-col md:flex-row',
            'justify-center',
            'p-10 w-full',
            'bg-gray-200',
            gap,
            className
        )}>
            <StatCard
                image={FaPlane}
                firstLabel="23,000+"
                secondLabel="Travel Experience"
                className="w-70"
            />
            <StatCard
                image={FaGlobe}
                firstLabel="40+"
                secondLabel="Countries"
                className="w-70"
            />
            <StatCard
                image={FaUsers}
                firstLabel="10,000+"
                secondLabel="Happy Travellers"
                className="w-70"
            />
            <StatCard
                image={FaUsers}
                firstLabel="10,000+"
                secondLabel="Happy Travellers"
                className="w-70"
            />
        </div>
    )
}

export default StatsGrid