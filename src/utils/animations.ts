export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const slideVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const iconAnimation = {
  initial: { rotate: 0 },
  hover: { 
    rotate: 360, 
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    } 
  }
}

export const backgroundElements = {
  initial: { opacity: 0.1 },
  animate: {
    opacity: [0.1, 0.2, 0.1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }
  }
} 