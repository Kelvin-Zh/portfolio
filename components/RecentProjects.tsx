import React from 'react'
import { WobbleCard } from './ui/wobble-card'

const RecentProjects = () => {
  return (
    <div className="py-20 justify-center items-center w-full">
        <h1 className="text-center text-4xl font-bold mb-8">
            A small selection of{" "}
            <span className="text-purple-300 dark:text-purple-300">recent projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full">
            <WobbleCard containerClassName="col-span-4 lg:col-span-3 w-full max-w-md bg-purple-600 dark:bg-purple">
                <p>Your content here</p>
            </WobbleCard>
        </div>

    </div>
  )
}

export default RecentProjects