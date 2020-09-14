import React, { useRef } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation }from 'lib/../i18n'

import { motion, useCycle } from 'framer-motion'
import { useDimensions } from 'lib/hooks/useDimensions'
import { NavMobileMenuToggle } from 'lib/components/NavMobileMenuToggle'
import { NavMobileList } from 'lib/components/NavMobileList'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 60px) calc(100% - 60px))`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 60px) calc(100% - 60px))',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

export const NavMobile = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className='sm:hidden nav-mobile'
    >
      <motion.div className='background' variants={sidebar} />
      <NavMobileList />
      <NavMobileMenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )

  const { t } = useTranslation()

  const mobileNavClasses = 'capitalize h-full w-full flex flex-col justify-center items-center px-2 text-xs pb-1 pt-2 px-3 trans outline-none focus:outline-none active:outline-none tracking-normal'

  return <>
    <nav
      className='flex justify-between items-center fixed b-0 l-0 r-0 bg-card-selected sm:hidden z-20 border-accent-4 border-t-2'
      style={{
        boxShadow: '0 -2px 6px -1px rgba(0, 0, 0, .05), 0 -3px 8px 0 rgba(0, 0, 0, .02)',
        height: 76
      }}
    >
      <Link
        href='/'
        as='/'
        shallow
      >
        <a
          className={classnames(
            mobileNavClasses,
            {
              'text-accent-3 hover:text-highlight-2': !poolPage,
              'text-highlight-2 hover:text-highlight-2': poolPage
            }
          )}
        >
          {t('pools')}
        </a>
      </Link>

      <Link
        href='/account'
        as='/account'
        shallow
      >
        <a
          className={classnames(
            mobileNavClasses,
            {
              'text-accent-3 hover:text-highlight-2': !accountPage,
              'text-highlight-2 hover:text-highlight-2': accountPage
            }
          )}
        >
          {t('account')}
        </a>
      </Link>
    </nav>

  </>
    
}
