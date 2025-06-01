'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  CommandLineIcon, 
  CodeBracketIcon,
  RocketLaunchIcon 
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
        <div className="absolute top-[20%] left-[10%] text-6xl text-[#64ffda]/10">&lt;/&gt;</div>
        <div className="absolute bottom-[20%] right-[10%] text-6xl text-[#64ffda]/10">{ }</div>
        <div className="absolute top-[40%] right-[20%] text-4xl text-[#64ffda]/10">&lt;QA/&gt;</div>
        <div className="absolute bottom-[40%] left-[20%] text-4xl text-[#64ffda]/10">&lt;Test/&gt;</div>
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
          <div className="flex items-center gap-3 text-2xl md:text-4xl text-gray-300">
            <CommandLineIcon className="w-8 h-8 text-[#64ffda]" />
            <span>QA & Automation Specialist</span>
          </div>
          <div className="flex items-center gap-3 text-xl md:text-2xl text-gray-400 ml-1">
            <CodeBracketIcon className="w-6 h-6 text-[#64ffda]" />
            <span>Test Automation Expert</span>
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl text-[#64ffda] ml-1">
            <RocketLaunchIcon className="w-6 h-6" />
            <span>Quality Assurance Professional</span>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400"
        >
          Currently driving QA and automation excellence at Rexera, Bengaluru. Specializing in 
          test automation frameworks, API testing, and quality assurance processes to ensure 
          robust and reliable software delivery.
        </motion.p>
      </motion.div>
    </section>
  )
} 