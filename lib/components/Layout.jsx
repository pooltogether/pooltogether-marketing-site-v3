import React, { useState } from 'react'
import classnames from 'classnames'
import { motion, useViewportScroll } from 'framer-motion'

import { HeaderLogo } from 'lib/components/HeaderLogo'
import { NavMobile } from 'lib/components/NavMobile'
import { Meta } from 'lib/components/Meta'
import { Nav } from 'lib/components/Nav'
import { Footer } from 'lib/components/Footer'
// import { LanguagePicker } from 'lib/components/LanguagePicker'

export const Layout = (props) => {
  const {
    children
  } = props

  const [yScrollPosition, setYScrollPosition] = useState()
  const { scrollY } = useViewportScroll()

  scrollY.onChange(y => {
    setYScrollPosition(y)
  })

  // const router = useRouter()

  // const signIn = router.query.signIn
  // const deposit = /deposit/.test(router.asPath)
  // const withdraw = /withdraw/.test(router.asPath)

  return <>
    <Meta />

    <div
      className='flex flex-col w-full'
      style={{
        minHeight: '100vh'
      }}
    >
      <motion.div
        className={classnames(
          'header fixed w-full bg-body z-30 pt-1 pb-1 xs:pt-2 xs:pb-0 sm:py-0 mx-auto l-0 r-0',
        )}
      >
        <div
          className='flex justify-between items-center px-4 xs:px-12 sm:px-10 py-4 xs:pb-6 sm:pt-5 sm:pb-7 mx-auto'
        >
          <HeaderLogo />
        </div>

        <motion.div
          className='w-full'
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.025) 0px 0px 1px 1px, rgba(0, 0, 0, 0.1) 0px 1px 7px 1px',
            height: 0,
            maxWidth: '100vw',
          }}
          animate={yScrollPosition > 1 ? 'enter' : 'exit'}
          variants={{
            enter: {
              opacity: 1,
              transition: {
                duration: 1
              }
            },
            exit: {
              opacity: 0
            }
          }}
        >
        </motion.div>
      </motion.div>


      <div
        className={classnames(
          'grid-wrapper',
        )}
      >
        <div
          className={classnames(
            'sidebar hidden sm:block z-20',
          )}
        >
          <Nav />
        </div>

        <div className='content'>
          <div
            className='pool-container w-full flex flex-grow relative z-10 h-full page px-4 xs:px-12 sm:px-10 pt-6 xs:pt-6 sm:pt-8'
          >
            <div
              className='flex flex-col flex-grow'
            >

              <div
                className='relative flex flex-col flex-grow h-full z-10 text-white'
                style={{
                  flex: 1
                }}
              >
                <div
                  className='my-0 text-inverse sm:pt-2 lg:pt-4'
                >
                  {React.cloneElement(children, {
                    ...props,
                  })}
                </div>
              </div>

              
              <div
                className='main-footer z-10'
              >
                <Footer />
              </div>
              </div>
            </div>
          </div>

        </div>

      <NavMobile />
    </div>
  </>
}
