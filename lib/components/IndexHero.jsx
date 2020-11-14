import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ethers } from 'ethers'

import { useTranslation } from 'lib/../i18n'
import { useGraphPoolsQuery } from 'lib/hooks/useGraphPoolsQuery'
import { ButtonLink } from 'lib/components/ButtonLink'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { displayAmountInEther } from 'lib/utils/displayAmountInEther'
import { normalizeTo18Decimals } from 'lib/utils/normalizeTo18Decimals'

// const PaperDynamic = dynamic(() =>
//   import('lib/components/paper').then(mod => mod.Paper),
//   { ssr: false }
// )

export const IndexHero = (
  props,
) => {
  const { t } = useTranslation()

  const { status, data, error, isFetching } = useGraphPoolsQuery()

  if (error) {
    console.warn(error)
  }

  const pools = data?.pools

  let totalPrizes = ethers.utils.bigNumberify(0)
  pools?.forEach(_pool => {
    const decimals = _pool?.underlyingCollateralDecimals
    if (!decimals) { return }

    const cumulativePrizeAmountsForPool = normalizeTo18Decimals(
      _pool.prizeEstimate,
      decimals
    )

    totalPrizes = totalPrizes.add(
      cumulativePrizeAmountsForPool
    )
  })

  const [playVideo, setPlayVideo] = useState(false)

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)

    setTimeout(() => {
      setPlayVideo(false)
    }, 500)
  }

  return <>
    <div className='relative'>
      <div
        className='pt-12'
        style={{
          height: 'calc(40vh - 84px)',
          minHeight: 290
        }}
      >
        <motion.div
          animate={'enter'}
          // animate={totalPrizes.gt(0) ? 'enter' : 'exit'}
          initial='exit'
          variants={{
            enter: {
              scale: 1,
              height: 'auto',
              transition: {
                duration: 0.25
              }
            },
            exit: {
              scale: 0,
              height: 0,
            }
          }}
        >
          <h1
            className='banner-text mx-auto font-bold text-center'
          >
            <span className='text-flashy px-4 sm:leading-none'>Win ${displayAmountInEther(
              '1395000000000000000000',
              // totalPrizes,
              { precision: 0 }
            )} every week</span>
            <div className='banner-text--small'>
              just by saving your money.
            </div>
          </h1>

          <div
            className='text-center'
          >
            <ButtonLink
              href='https://app.pooltogether.com'
              as='https://app.pooltogether.com'
            >
              Get tickets!
            </ButtonLink>
          </div>
        </motion.div>
      </div>

      
      <div
        clipPath='url(#wave)'
        className='bg-vid text-center relative pb-12 sm:pb-0'
      >
        <div className='custom-shape-divider-top-1600195439 pointer-events-none'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              fill='#290B5A'
            ></path>
          </svg>
        </div>
        
        <div
          className='pool-container flex flex-col sm:flex-row pt-10 sm:mt-32 sm:pt-20 text-left mx-auto'
        >
          <div
            className='mx-auto xs:w-9/12 sm:w-1/2 pt-8 sm:pt-8 lg:px-12 lg:py-12 text-center sm:text-left'
          >
            <h2
              className='text-flashy'
            >
              PoolTogether
            </h2>

            <div className='font-number font-bold text-xs sm:text-lg sm:pr-20 lg:pr-10 pb-2 sm:pb-0'>
              is a protocol for no-loss money games powered by Ethereum.
            </div>
          </div>

          <div
            className='flex flex-col items-center z-10'
          >
            <button
              onClick={startVideo}
              className='bg-vid-holo flex items-start justify-center trans'
              role='img'
              aria-label='Holographic gradient'
            >
              <div className='bg-vid-holo--inner flex items-center justify-center'>
                <WistiaPlayer
                  play={playVideo}
                />

                <div
                  className='bg-vid-circle flex items-center justify-center hover:bg-highlight-2 trans'
                >
                  <div
                    className='bg-vid-tri'
                  />
                </div>
              </div>
            </button>
            
            <button
              onClick={startVideo}
              className='text-center font-bold mb-1 mb-4 text-white hover:text-highlight-2 trans hover:border-highlight-2 border-b border-transparent'
            >
              Watch how it works!
            </button>
          </div>
        </div>
      </div>

    </div>
  </>
}
