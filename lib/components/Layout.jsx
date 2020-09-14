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

    <NavMobile />

    <div
      className='flex flex-col w-full'
      style={{
        minHeight: '100vh'
      }}
    >
      <div
        className={classnames(
          'header fixed w-full bg-body z-30 pt-1 pb-1 xs:pt-2 xs:pb-0 sm:py-0 mx-auto l-0 r-0',
        )}
      >
        <div
          className='flex justify-between items-center w-full px-4 sm:px-0 py-4 mx-auto'
        >
          <HeaderLogo />
          <Nav />
        </div>
      </div>


      <div
        className={classnames(
          'grid-wrapper',
        )}
      >

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
    </div>
  </>
}
