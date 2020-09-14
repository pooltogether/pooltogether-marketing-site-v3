import * as React from 'react'
import { motion } from 'framer-motion'
import { NavMobileListItem } from 'lib/components/NavMobileListItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const NavMobileList = () => (
  <motion.ul
    variants={variants}
    className='nav-mobile-list'
  >
    {itemIds.map(i => (
      <NavMobileListItem
        i={i}
        key={i}
      />
    ))}
  </motion.ul>
)

const itemIds = [0, 1, 2, 3, 4]
