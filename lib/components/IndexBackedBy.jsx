import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { GridItemBackedBy } from 'lib/components/GridItemBackedBy'

import ConsensysSvg from 'assets/images/consensys.svg'
import DTCCapitalSvg from 'assets/images/dtc-capital.svg'
import IdeoSvg from 'assets/images/ideo.svg'
import ParaFiSvg from 'assets/images/parafi-logo.svg'

export const IndexBackedBy = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
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

  return <div
    id='backed-by'
    className='bg-darkened text-center py-24'
    style={{ 
      minHeight: 200
    }}
  >
    <div
      className='pool-container mx-auto'
    >
      <h3
        className='my-0 sm:mb-12 leading-tight'
      >
        Backed by
      </h3>

      <motion.div
        className={classnames(
          'flex flex-col xs:flex-row xs:flex-wrap justify-start items-start',
          'mt-2 mb-4 px-4 xs:px-8 rounded-xl -mx-4 lg:-mx-8',
        )}
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={containerVariants}
      >
        <GridItemBackedBy
          title={'ConsenSys'}
          img={ConsensysSvg}
          url='https://www.consensys.com'
        />

        <GridItemBackedBy
          title={'IDEO'}
          img={IdeoSvg}
          url='https://www.ideo.com'
          maxHeight={30}
        />

        <GridItemBackedBy
          title={'DTC Capital'}
          img={DTCCapitalSvg}
          url='https://www.dtc.capital'
        />

        <GridItemBackedBy
          title={'ParaFi'}
          img={ParaFiSvg}
          url='https://www.parafi.capital/'
        />

      </motion.div>


      {/* <div className='flex justify-center items-center sm:-mx-2'>
        <a
          href='https://makerdao.com'
          title='View the Maker site'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={MakerDaoSvg}
            className='mt-4'
          />
        </a>
      </div> */}

    </div>
  </div>
}
