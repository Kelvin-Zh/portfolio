import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import { recentProjects } from '@/data'

const RecentProjects = () => {
  return (
    <div className="py-20 justify-center items-center w-full">
        <h1 className="text-center text-4xl font-bold mb-8">
            A small selection of{" "}
            <span className="text-purple-300 dark:text-purple-300">recent projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full">
            {recentProjects.map((project, index) => (
                <WobbleCard key={index} containerClassName="bg-purple-600 dark:bg-purple p-6 rounded-lg shadow-lg">
                    <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-neutral-200">{project.description}</p>
                    <p className="mt-2 text-sm text-white opacity-80">
                        <strong>Stack:</strong> {project.stack}
                    </p>
                </WobbleCard>
            ))}
        </div>


    </div>
  )
}

export default RecentProjects