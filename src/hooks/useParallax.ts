import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxOptions {
  offset?: ["start start" | "end start", "start start" | "end start"]
  inputRange?: [number, number]
  outputRange?: [string, string]
  direction?: 'vertical' | 'horizontal'
}

export function useParallax(options: ParallaxOptions = {}) {
  const ref = useRef(null)
  const {
    offset = ["start start", "end start"],
    inputRange = [0, 1],
    outputRange = ["0%", "50%"],
    direction = 'vertical'
  } = options

  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  })

  const transform = useTransform(scrollYProgress, inputRange, outputRange)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return {
    ref,
    style: {
      y: direction === 'vertical' ? transform : 0,
      x: direction === 'horizontal' ? transform : 0,
      opacity
    }
  }
} 