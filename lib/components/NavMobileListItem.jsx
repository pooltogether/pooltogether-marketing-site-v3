import * as React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const colors = ['#FF81ED', '#FFD1B3', '#69FEB8', '#80FFF6', '#5FA3FF']

export const NavMobileListItem = ({ i }) => {
  const style = { color: `${colors[i]}` }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='font-bold'
      style={style}
    >
      asdf
    </motion.li>
  )
}
