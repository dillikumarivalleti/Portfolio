'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CommandLineIcon, 
  CpuChipIcon, 
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  RocketLaunchIcon 
} from '@heroicons/react/24/outline'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const iconAnimation = {
    initial: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.5 } }
  }

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0a192f]">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] text-6xl text-[#64ffda]/10">&lt;QA/&gt;</div>
        <div className="absolute bottom-[20%] right-[10%] text-6xl text-[#64ffda]/10">&lt;Dev/&gt;</div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl px-8 md:px-16 py-12 overflow-y-auto max-h-screen"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-[#64ffda] flex items-center gap-3 sticky top-0 bg-[#0a192f]/80 backdrop-blur-sm py-4">
          <motion.div
            variants={iconAnimation}
            whileHover="hover"
            className="bg-[#112240] p-2 rounded-lg"
          >
            <RocketLaunchIcon className="w-8 h-8" />
          </motion.div>
          Professional Journey
        </motion.h2>

        <div className="space-y-8">
          <motion.div variants={itemVariants} className="relative border-l-2 border-[#64ffda] pl-8">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-[#64ffda] rounded-full" />
            
            {/* Current Role: QA & Automation */}
            <motion.div 
              className="mb-8 bg-[#112240] p-6 rounded-lg hover:bg-[#1d3a6d] transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  variants={iconAnimation}
                  whileHover="hover"
                  className="bg-[#233554] p-2 rounded-lg"
                >
                  <CommandLineIcon className="w-8 h-8 text-[#64ffda]" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold">QA and Power Automation Analyst</h3>
                  <p className="text-[#64ffda]">Current Role</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-[#233554] px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <WrenchScrewdriverIcon className="w-4 h-4" />
                  Automation
                </span>
                <span className="bg-[#233554] px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <ServerIcon className="w-4 h-4" />
                  Testing
                </span>
                <span className="bg-[#233554] px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4" />
                  Development
                </span>
              </div>
              <div className="text-gray-400 mb-4 flex items-center gap-2">
                <span>Rexera, Bengaluru</span>
                <span>•</span>
                <span>Apr 2025 – Present</span>
              </div>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">→</span>
                  Architected and implemented end-to-end test automation frameworks using Python and Power Automate, reducing manual testing effort by 60%.
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">→</span>
                  Developed RESTful API testing suites and integrated them with CI/CD pipelines for automated regression testing.
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">→</span>
                  Led the implementation of automated performance testing and monitoring solutions for distributed systems.
                </li>
              </ul>
            </motion.div>

            {/* Previous Role: Internship */}
            <motion.div 
              className="bg-[#112240] p-6 rounded-lg hover:bg-[#1d3a6d] transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  variants={iconAnimation}
                  whileHover="hover"
                  className="bg-[#233554] p-2 rounded-lg"
                >
                  <CpuChipIcon className="w-8 h-8 text-[#64ffda]" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold">QA and Power Automation Intern</h3>
                  <p className="text-[#64ffda]">Foundation Role</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-[#233554] px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <WrenchScrewdriverIcon className="w-4 h-4" />
                  Testing
                </span>
                <span className="bg-[#233554] px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4" />
                  Development
                </span>
              </div>
              <div className="text-gray-400 mb-4 flex items-center gap-2">
                <span>Rexera, Bengaluru</span>
                <span>•</span>
                <span>Jan 2025 – Mar 2025</span>
              </div>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">→</span>
                  Collaborated with development teams to implement automated testing solutions for web applications.
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">→</span>
                  Created and maintained test documentation, including test plans, test cases, and bug reports.
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">→</span>
                  Gained expertise in test automation tools and frameworks while contributing to continuous integration practices.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 