'use client'
import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const certificates = [
  {
    title: 'Full Stack Java Developer Internship Certification',
    issuer: 'QSpiders',
    year: '2024',
    description: 'Comprehensive training in test automation frameworks, API testing, and quality assurance methodologies using Java-based tools.'
  },
  {
    title: 'Introduction to Programming using Python',
    issuer: 'NPTEL - IIT Madras',
    year: '2023',
    description: 'Advanced Python programming with focus on test automation frameworks and testing methodologies.'
  },
  {
    title: 'Java Full Stack Development Course',
    issuer: 'ExcelR, Bengaluru',
    year: '2024',
    description: 'Quality assurance and testing methodologies for web applications, including automated testing tools and frameworks.'
  },
  {
    title: 'Employability Skill Development Program',
    issuer: 'Naandi Foundation',
    year: '2023',
    description: 'Professional development focusing on technical communication and project management in QA environments.'
  }
]

export default function Certificates() {
  return (
    <div className="w-full py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-[#64ffda] font-bold mb-4 flex items-center justify-center gap-2">
          <AcademicCapIcon className="w-6 h-6" />
          Professional Certifications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#112240] rounded-lg p-4 md:p-6 hover:bg-[#233554] transition-colors duration-300 border border-[#233554] group"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-[#64ffda] font-semibold text-lg md:text-xl">
                  {cert.title}
                </h3>
                <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                  {cert.year}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-gray-300 text-sm md:text-base flex-grow">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View Additional Info */}
      <div className="mt-8 px-4 text-center text-sm text-gray-400 md:hidden">
        <p>Tap on certificates to see details</p>
      </div>
    </div>
  )
} 