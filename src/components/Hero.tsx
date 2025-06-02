'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  CommandLineIcon, 
  CodeBracketIcon,
  RocketLaunchIcon,
  HeartIcon 
} from '@heroicons/react/24/outline'
import { backgroundElements } from '@/utils/animations'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0a192f]">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] text-6xl text-[#64ffda]/10">&lt;QA/&gt;</div>
        <div className="absolute bottom-[20%] right-[10%] text-6xl text-[#64ffda]/10">{ }</div>
        <div className="absolute top-[40%] right-[20%] text-4xl text-[#64ffda]/10">&lt;Test/&gt;</div>
        <div className="absolute bottom-[40%] left-[20%] text-4xl text-[#64ffda]/10">&lt;Code/&gt;</div>
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
        className="z-10 max-w-4xl px-8 md:px-16"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
          <CommandLineIcon className="w-6 h-6 text-[#64ffda]" />
          <span className="text-[#64ffda]">Hi, I'm</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Valleti Dilli Kumari
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col gap-2 mb-6"
        >
          {/* Main Role */}
          <div className="flex items-center gap-3 text-2xl md:text-4xl text-gray-300">
            <RocketLaunchIcon className="w-8 h-8 text-[#64ffda]" />
            <span>QA & Power Automation </span>
          </div>
          
          {/* Current Company */}
          <div className="flex items-center gap-3 text-xl md:text-2xl text-gray-400 ml-1">
            <CommandLineIcon className="w-6 h-6 text-[#64ffda]" />
            <span>at Rexera, Bengaluru</span>
          </div>
          
          {/* Passion */}
          <div className="flex items-center gap-3 text-lg md:text-xl text-[#64ffda] ml-1">
            <HeartIcon className="w-6 h-6" />
            <span>Passionate Full Stack Developer</span>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400"
        >
          Driving excellence in quality assurance and automation at Rexera while pursuing my passion 
          for full stack development. Specializing in test automation frameworks, API testing, and 
          building robust software solutions that ensure exceptional quality and user experience.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300"
          >
            <CodeBracketIcon className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
} 