"use client"
import type React from "react"
import { useState, JSX } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0 // ✅ Prevents errors
      const direction = current - previous

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        setVisible(direction < 0) // ✅ Shows when scrolling up, hides when down
      }
    }
  })

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => handleScroll(e, navItem.link)}
            className="relative dark:text-neutral-50 flex items-center space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          >
            {navItem.icon && <span className="text-lg">{navItem.icon}</span>} {/* ✅ Show icon if available */}
            <span className="text-sm">{navItem.name}</span> {/* ✅ Always show text */}
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
