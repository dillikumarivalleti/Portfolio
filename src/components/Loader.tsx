'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState('')
  const [showMainText, setShowMainText] = useState(false)
  const welcomeText = "Welcome to"
  const nameText = "Valleti Dilli Kumari's Portfolio"
  const codeSnippet = [
    "function initPortfolio() {",
    "  const profile = {",
    "    firstName: 'Valleti',",
    "    middleName: 'Dilli',",
    "    lastName: 'Kumari',",
    "    role: 'QA & Automation ',",
    "    expertise: ['Automation', 'Testing', 'Quality Assurance'],",
    "    status: 'Initializing Portfolio...'",
    "  }",
    "  return profile.launch()",
    "}"
  ]

  useEffect(() => {
    // First type welcome text
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setText(welcomeText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Show main text after welcome text is complete
        setShowMainText(true)
      }
    }, 100)

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => {
      clearTimeout(timer)
      clearInterval(typingInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a192f]"
      >
        <div className="w-full max-w-md p-6 rounded-lg bg-[#112240] shadow-xl border border-[#64ffda]/20">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 bg-[#0a192f] p-2 rounded-t-lg">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-gray-400 font-mono">portfolio.init</div>
          </div>

          {/* Welcome Text */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-[#64ffda] font-mono text-xl">
              {text}
              {showMainText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold mt-2"
                >
                  {nameText}
                </motion.div>
              )}
              <span className="animate-blink">_</span>
            </div>
          </motion.div>

          {/* Code Animation */}
          <div className="font-mono text-sm bg-[#0a192f] p-4 rounded-lg">
            {codeSnippet.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex"
              >
                <span className="text-gray-500 mr-4">{index + 1}</span>
                <span className="text-[#64ffda]">{line}</span>
              </motion.div>
            ))}
          </div>

          {/* Loading Status */}
          <div className="mt-4 flex items-center justify-center">
            <motion.div 
              className="flex gap-2 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-[#64ffda] font-mono text-sm">Opening Portfolio</span>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#64ffda]"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 