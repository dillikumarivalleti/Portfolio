'use client'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: 'Email',
      value: 'dillikumari2722@gmail.com',
      href: 'mailto:dillikumari2722@gmail.com',
      copyable: true
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8008519264',
      href: 'tel:+918008519264',
      copyable: true
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      label: 'Location',
      value: 'Bengaluru, India',
      href: null,
      copyable: false
    }
  ]

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // You could add a toast notification here
        console.log('Copied to clipboard')
      })
      .catch(err => {
        console.error('Failed to copy:', err)
      })
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-[#64ffda] font-bold text-2xl md:text-3xl mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities, creative ideas, or ways to make things better.
        </p>
      </motion.div>

      {/* Resume Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-12"
      >
        <a
          href="https://docs.google.com/document/d/17__oK1sXbukpQRySGl2KAMKEMTE0Kfb5NMO8TMx8hSw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded-lg font-medium hover:bg-[#64ffda]/90 transition-colors duration-300"
        >
          <DocumentArrowDownIcon className="w-5 h-5" />
          View Resume
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#112240] rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#233554] transition-colors duration-300 group relative"
          >
            <div className="bg-[#233554] p-3 rounded-full mb-4 text-[#64ffda] group-hover:bg-[#1d3a6d] transition-colors duration-300">
              {info.icon}
            </div>
            
            <h3 className="text-[#64ffda] font-medium mb-2">
              {info.label}
            </h3>
            
            {info.href ? (
              <a
                href={info.href}
                className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300 break-all"
              >
                {info.value}
              </a>
            ) : (
              <span className="text-gray-300">
                {info.value}
              </span>
            )}

            {info.copyable && (
              <button
                onClick={() => handleCopy(info.value)}
                className="mt-4 text-sm text-gray-400 hover:text-[#64ffda] transition-colors duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Touch Hint */}
      <div className="mt-8 text-center text-sm text-gray-400 md:hidden">
        <p>Tap on email or phone to contact directly</p>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <h3 className="text-[#64ffda] font-medium mb-6">
          Professional Profiles
        </h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/dillikumarivalleti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dilli-kumari-valleti-b40584297/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  )
} 