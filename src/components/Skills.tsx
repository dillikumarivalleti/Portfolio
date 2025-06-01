'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CommandLineIcon, 
  CodeBracketIcon, 
  WrenchScrewdriverIcon,
  ServerIcon,
  WindowIcon
} from '@heroicons/react/24/outline'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const iconAnimation = {
    initial: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.5 } }
  }

  const skills = {
    automation: {
      icon: <CommandLineIcon className="w-6 h-6" />,
      title: 'Test Automation',
      subtitle: 'Core Expertise',
      items: ['Selenium', 'Python Testing', 'Power Automate', 'API Testing', 'Performance Testing', 'Test Automation Frameworks', 'CI/CD Integration', 'Test Planning']
    },
    testing: {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: 'Quality Assurance',
      subtitle: 'Testing Methodologies',
      items: ['Manual Testing', 'Test Strategy', 'Test Cases', 'Bug Tracking', 'Test Documentation', 'Regression Testing', 'Integration Testing', 'User Acceptance Testing']
    },
    tools: {
      icon: <WindowIcon className="w-6 h-6" />,
      title: 'Tools & Technologies',
      subtitle: 'Technical Skills',
      items: ['JIRA', 'TestNG', 'JUnit', 'Postman', 'Jenkins', 'Git', 'Azure DevOps', 'Docker']
    },
    processes: {
      icon: <ServerIcon className="w-6 h-6" />,
      title: 'Processes & Methods',
      subtitle: 'Best Practices',
      items: ['Agile Testing', 'Test Planning', 'Risk Analysis', 'Quality Metrics', 'Test Reporting', 'Code Reviews', 'Process Improvement', 'Team Collaboration']
    }
  }

  return (
    <section id="skills" className="min-h-screen py-20 px-8 md:px-16 lg:px-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#64ffda] flex items-center gap-3">
            <motion.div
              variants={iconAnimation}
              whileHover="hover"
              className="bg-[#112240] p-2 rounded-lg"
            >
              <WrenchScrewdriverIcon className="w-8 h-8" />
            </motion.div>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([key, { icon, title, subtitle, items }]) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#112240] p-6 rounded-lg hover:bg-[#1d3a6d] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    variants={iconAnimation}
                    whileHover="hover"
                    className="bg-[#233554] p-2 rounded-lg text-[#64ffda]"
                  >
                    {icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-[#64ffda]">{subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#233554] px-3 py-1 rounded-full text-sm text-gray-300 hover:text-[#64ffda] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 