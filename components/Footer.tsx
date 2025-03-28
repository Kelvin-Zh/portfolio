import React from 'react'
import MagicButton from './ui/MagicButton'
import { TbMail } from 'react-icons/tb'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="footer">
    
        { /* Contact */ }
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw] xs:text-l sm:text-xl md:text-3xl lg:text-5xl pb-5">
                Feel free to reach out!
            </h1>
            <a href="mailto:zkelvin999@gmail.com">
                <MagicButton 
                    title = "Email Me" 
                    position = "right" 
                    icon = { <TbMail /> }
                />
            </a>
        </div>

        {/* Copy Right & Social Media */}
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center pl-6 pr-6">
            <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2025 Kelvin Zhang
            </p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((info) => (
                <a 
                    key={info.id} 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                    <img src={info.img} alt={String(info.id)} width={20} height={20} />
                </a>
                ))}
            </div>
        </div>



        
    </footer>
  )
}

export default Footer