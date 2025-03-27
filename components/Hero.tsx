import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from "@/lib/utils"
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { SlArrowDownCircle } from 'react-icons/sl'

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
        </div>
        
        { /* Introduction */ }
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Wannabe Fullstack Engineer
                </h2>

                <TextGenerateEffect 
                className="text-center text-[50]px xs:text-xl sm:text-2xl md:text-5xl lg:text-7xl" 
                words="New Software Developer from Atlanta"/>

                <p className="text-center md:tracking-wider mb-4 text-l md:text-lg lg:text-2xl">
                    Hi, I'm <span className="font-bold">Kelvin Zhang</span>!
                </p>

                { /* Button */ }
                <a href="#about">
                    <MagicButton 
                          title='My Resume'
                          icon={<SlArrowDownCircle />} position={'right'}/>
                </a>
            </div>
        </div>

        
    </div>
  )
}

export default Hero