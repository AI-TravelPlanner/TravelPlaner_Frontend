import { cn } from '@/lib/utils'
import React from 'react'

const StatsGrid = ({
    children,
    gap = 'gap-10',
    cols = { base: 1, md: 3 },
    className
}) => {
    return (
        <div className={cn(
            'grid mx-auto',
            'grid-cols-${cols.base}',
            'md:grid-cols-${cols.md}',
            gap,
            className
        )}>
            {children}
        </div>
    )
}

export default StatsGrid