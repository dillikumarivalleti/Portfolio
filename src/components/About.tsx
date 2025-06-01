'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="min-h-screen py-20 px-8 md:px-16 lg:px-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#64ffda]">Education</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-[#64ffda] pl-4">
            <h3 className="text-xl font-semibold">Siddartha Institute of Science and Technology</h3>
            <p className="text-gray-400">B.Tech in ECE | 2019 – 2023</p>
            <p className="text-gray-400">GPA: 8.58 / 10</p>
          </div>

          <div className="border-l-2 border-[#64ffda] pl-4">
            <h3 className="text-xl font-semibold">Sri Gayatri Junior College</h3>
            <p className="text-gray-400">Intermediate (MPC) | 2017 – 2019</p>
            <p className="text-gray-400">CGPA: 9.04 / 10</p>
          </div>

          <div className="border-l-2 border-[#64ffda] pl-4">
            <h3 className="text-xl font-semibold">ZP High School, KKV Puram</h3>
            <p className="text-gray-400">2016 – 2017</p>
            <p className="text-gray-400">CGPA: 8.5 / 10</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#64ffda]">Objective</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Highly motivated and results-driven Electronics and Communication Engineering graduate with a strong foundation in 
            quality assurance and test automation. Experienced in developing and implementing comprehensive testing strategies 
            for complex software applications. Passionate about ensuring software quality and reliability through innovative 
            automation solutions and best practices in QA methodologies.
          </p>
        </div>
      </motion.div>
    </section>
  )
} 