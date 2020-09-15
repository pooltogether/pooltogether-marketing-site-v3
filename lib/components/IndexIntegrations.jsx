import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { GridItem } from 'lib/components/GridItem'

// import CircleSvg from 'assets/images/circle.svg'
// import MakerSvg from 'assets/images/maker.svg'
import ArgentSvg from 'assets/images/argent.svg'
import BotSvg from 'assets/images/noun_bot_1913795.svg'
import EBOSvg from 'assets/images/ebo.svg'
import PillarSvg from 'assets/images/pillar.svg'
import ZerionSvg from 'assets/images/zerion.svg'
import ZapperFiSvg from 'assets/images/zapperfi.svg'

import ProtocolSvg from 'assets/images/pro-art-protocol@2x.jpg'

export const IndexIntegrations = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      console.log('inview!')
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    hidden: {
      // opacity: 0,
    },
  }

  return <>
    <div className='pool-container mx-auto py-8 sm:py-24'>

      <div className='flex items-center justify-between'>
        <h1
          className='w-1/2 sm:w-1/3 leading-10 sm:leading-tight'
        >
          Protocol <span
            className='text-flashy -mt-2 '
            style={{ display: 'block' }}
          >Integrations</span>
        </h1>

        <div className='w-16 sm:w-32'>
          <img
            src={ProtocolSvg}
            className='max-w-full'
          />
        </div>
      </div>


 {/* sm:w-1/2 xl:w-1/3 */}
      <div className='flex flex-col items-center rounded-lg bg-darkened p-4 py-12 sm:p-10 mt-8'>
        <h2
          className='my-0 leading-tight mb-4 w-3/4 text-center'
        >
          Try community-built interfaces
        </h2>
        <div
          className='font-normal font-number sm:w-1/2 text-center text-xs sm:text-lg px-4'
        >
          Get inspired by what you can build on the PoolTogether protocol
        </div>



        <motion.div
          className={classnames(
            'flex flex-col sm:flex-row sm:flex-wrap justify-start items-start',
            'mt-8 mb-4 px-2 sm:px-0 rounded-xl text-base sm:text-lg',
          )}
          style={{
            flexBasis: '33.3333%'
          }}
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={containerVariants}
        >
          <GridItem
            title={'Argent'}
            description={`Use the Argent app to join the pool.`}
            img={ArgentSvg}
            url='https://www.argent.xyz/'
          />

          <GridItem
            title={'Pillar'}
            description={`Pillar Wallet makes it simple to use PoolTogether.`}
            img={PillarSvg}
            url='https://pillarproject.io'
          />

          <GridItem
            title={'ZapperFi'}
            description={`A great dashboard to track your tickets & odds of winning.`}
            img={ZapperFiSvg}
            url='https://www.zapper.fi/#/dashboard'
          />

          <GridItem
            title={'Zerion'}
            description={`A simple interface to access DeFi to invest in PoolTogether.`}
            img={ZerionSvg}
            url='https://zerion.io/'
          />

          <GridItem
            title={'PT Twitter Bot'}
            description={`A bot that updates on every join or win of the Dai pool.`}
            img={BotSvg}
            url='https://twitter.com/PoolTogetherBot'
            attribution={`bot by Sophia Bai from the Noun Project`}
          />

          <GridItem
            title={'EBO'}
            description={`EBO Finance is a wallet app for joining the pool.`}
            img={EBOSvg}
            url='https://ebo.io/'
          />

        </motion.div>
      </div>




    </div>
  </>
}
