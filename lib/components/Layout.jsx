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
          'header pool-container w-full z-30 mx-auto',
        )}
        style={{
          height: 84
        }}
      >
        <div
          className='flex justify-between items-center w-full px-4 sm:px-0 py-4 mx-auto'
        >
          <HeaderLogo />
          <Nav />
        </div>
      </div>

      <div className='content'>
        {/* className='pool-container mx-auto w-full flex flex-grow relative z-10 h-full page px-4 sm:px-0 pt-6 xs:pt-6 sm:pt-8' */}
        <div
          className='mx-auto w-full flex flex-grow relative z-10 h-full page'
        >
          <div
            className='flex flex-col flex-grow'
          >

            <div
              className='relative flex flex-col flex-grow h-full z-10'
              style={{
                flex: 1
              }}
            >
              <div
                className='text-inverse'
                // className='text-inverse sm:pt-2 lg:pt-4'
              >
                {React.cloneElement(children, {
                  ...props,
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        className='footer--container'
      >
        <Footer />
      </div>
    </div>
  </>
}
