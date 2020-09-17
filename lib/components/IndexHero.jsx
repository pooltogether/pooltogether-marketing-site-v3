import React, { useContext, useState } from 'react'

import { Trans, useTranslation } from 'lib/../i18n'
// import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { ButtonLink } from 'lib/components/ButtonLink'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'

// const PaperDynamic = dynamic(() =>
//   import('lib/components/paper').then(mod => mod.Paper),
//   { ssr: false }
// )

export const IndexHero = (
  props,
) => {
  const { t } = useTranslation()

  const [playVideo, setPlayVideo] = useState(false)
  // const poolDataContext = useContext(PoolDataContext)
  // const {
  //   loading,
  //   pools,
  //   // pool,
  // } = poolDataContext

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)
  }

  return <>
    <div className='relative'>
      <div
        className='pt-12'
        style={{
          height: 'calc(40vh - 84px)',
          minHeight: 230
        }}
      >
        <h1
          className='banner-text mx-auto font-bold text-center'
        >
          <span className='text-flashy px-4 leading-10 sm:leading-none'>Win $1000 every week</span>
          <div className='banner-text--small'>
            just by saving your money.
        </div>
          {/* <Trans
          i18nKey='youCouldWin'
          defaults='You could <flashy>win ${{totalPrizes}} every week</flashy> just by saving your money.'
          values={{ totalPrizes: '1,039' }}
          components={{
            flashy: <span className='text-flashy' />
          }}
        /> */}
        </h1>


        <div
          className='text-center'
        >
          <ButtonLink
            href='https://app.pooltogether.com'
            as='https://app.pooltogether.com'
          >
            {t('getTickets')}
          </ButtonLink>
        </div>
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
            className='mx-auto w-10/12 xs:w-9/12 sm:w-1/2 pt-8 sm:pt-12 text-center sm:text-left'
          >
            <h2
              className='text-flashy'
            >
              PoolTogether
            </h2>

            <div className='font-number font-bold text-xs sm:text-lg sm:pr-20 pb-12 sm:pb-0'>
              is a protocol for no-loss money games powered by Ethereum.
            </div>
          </div>

          <div
            className='sm:w-1/2 flex flex-col items-center z-10'
          >
            <button
              onClick={startVideo}
              className='bg-vid-holo h-64 flex items-center justify-center trans'
              role='img'
              aria-label='Holographic gradient'
            >
              <WistiaPlayer
                play={playVideo}
              />

              {!playVideo && <>
                <div
                  className='bg-vid-circle flex items-center justify-center hover:bg-highlight-5 trans'
                >
                  <div
                    className='bg-vid-tri'
                  />
                </div>
              </>}
            </button>
            

            {!playVideo && <>
              <button
                onClick={startVideo}
                className='text-center font-bold my-1 mb-4 text-white hover:text-highlight-2 trans hover:border-highlight-2 border-b border-transparent'
              >
                Watch how it works!
              </button>
            </>}
          </div>
        </div>
      </div>

    </div>
  </>
}
