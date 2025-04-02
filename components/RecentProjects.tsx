import React from 'react'
import { recentProjects } from '@/data'
import Carousel from './ui/carousel' // Adjust the path based on the actual location of the Carousel component

const RecentProjects = () => {
  return (
    <div className="py-20 justify-center items-center w-full" id="projects">
        <h1 className="text-center text-4xl font-bold mb-8">
            A small selection of{" "}
            <span className="text-purple-300 dark:text-purple-300">recent projects</span>
        </h1>
       
        <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={recentProjects} />
    </div>

    </div>
  )
}

export default RecentProjects