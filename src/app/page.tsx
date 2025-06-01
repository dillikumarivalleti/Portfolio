'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Certificates from '@/components/Certificates'
import Loader from '@/components/Loader'
import { backgroundElements } from '@/utils/animations'
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollTop = containerRef.current.scrollTop
      setShowScrollTop(scrollTop > 500) // Show button after scrolling 500px
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    if (!containerRef.current) return
    containerRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Scroll to home on page load/refresh
  useEffect(() => {
    // Small delay to ensure smooth scrolling after page load
    const timer = setTimeout(() => {
      const homeSection = document.getElementById('home')
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' })
      }
      // Also handle URL hash if present
      if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash)
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Handle resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
      setIsTablet(width <= 1024 && width > 768)
      setIsVerySmallScreen(width <= 480)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            setActiveSection(entry.target.id)
            // Update URL hash without scrolling
            const newHash = `#${entry.target.id}`
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash)
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Handle smooth scrolling for navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  const sections = [
    { 
      id: 'home', 
      label: 'Home',
      icon: <HomeIcon className="w-4 h-4" />,
      description: 'Introduction'
    },
    { 
      id: 'about', 
      label: 'About',
      icon: <UserIcon className="w-4 h-4" />,
      description: 'Education & Background'
    },
    { 
      id: 'experience', 
      label: 'Experience',
      icon: <BriefcaseIcon className="w-4 h-4" />,
      description: 'Professional Journey'
    },
    { 
      id: 'skills', 
      label: 'Skills',
      icon: <WrenchScrewdriverIcon className="w-4 h-4" />,
      description: 'Technical Skills'
    },
    { 
      id: 'certificates', 
      label: 'Certificates',
      icon: <AcademicCapIcon className="w-4 h-4" />,
      description: 'Professional Certifications'
    },
    { 
      id: 'contact', 
      label: 'Contact',
      icon: <ChatBubbleLeftRightIcon className="w-4 h-4" />,
      description: 'Let\'s Connect'
    }
  ]

  return (
    <>
      <Loader />
      <main 
        ref={containerRef} 
        className="relative h-screen overflow-y-scroll bg-[#0a192f] no-scrollbar scroll-smooth"
      >
        {/* Parallax Background Elements */}
        {!isMobile && !isTablet && (
          <motion.div 
            className="fixed inset-0 pointer-events-none opacity-20"
            style={{ y: backgroundY }}
            variants={backgroundElements}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="absolute top-1/4 left-1/4 text-[#64ffda]/5 text-8xl lg:text-7xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              &lt;/&gt;
            </motion.div>
            <motion.div 
              className="absolute bottom-1/4 right-1/3 text-[#64ffda]/5 text-6xl lg:text-5xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              &lt;Dev/&gt;
            </motion.div>
          </motion.div>
        )}

        {/* Navigation Dots - Hidden on very small screens */}
        <div 
          className={`fixed z-50 transition-all duration-300 ease-in-out
            ${isMobile 
              ? 'bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 md:space-x-4' 
              : 'right-4 lg:right-8 top-1/2 -translate-y-1/2 space-y-3 md:space-y-4'}
            ${isVerySmallScreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          `}
        >
          {sections.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className="nav-dot-container relative flex items-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
                aria-label={section.label}
              />
              
              {!isMobile && !isTablet && (
                <div className="nav-hover-card">
                  <div className="icon-container">
                    {section.icon}
                  </div>
                  <div className="content">
                    <p className="title">{section.label}</p>
                  </div>
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>

        {/* Content Sections */}
        <div id="home" className="section min-h-screen">
          <div className="content-container">
            <Hero />
          </div>
        </div>
        <div id="about" className="section min-h-screen">
          <div className="content-container">
            <About />
          </div>
        </div>
        <div id="experience" className="section min-h-screen">
          <div className="content-container">
            <Experience />
          </div>
        </div>
        <div id="skills" className="section min-h-screen">
          <div className="content-container">
            <Skills />
          </div>
        </div>
        <div id="certificates" className="section min-h-screen">
          <div className="content-container">
            <Certificates />
          </div>
        </div>
        <div id="contact" className="section min-h-screen">
          <div className="content-container">
            <Contact />
          </div>
        </div>
      </main>
    </>
  )
}
