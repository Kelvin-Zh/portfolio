import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className=/*"max-w-4x1 mx-auto md:auto-rows-[20rem]"*/"w-full py-30">
            {gridItems.map ((item) => 
                (<BentoGridItem 
                    key = {item.id}
                    title = {item.title}
                    description = {item.description}
                    className = {item.className}
                    img = {item.img}
                />))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid