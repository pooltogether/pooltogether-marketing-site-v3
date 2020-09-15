import React, { useContext } from 'react'
// import dynamic from 'next/dynamic'

import { Trans, useTranslation } from 'lib/../i18n'
// import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
// import { IndexUILoader } from 'lib/components/IndexUILoader'
import { ButtonLink } from 'lib/components/ButtonLink'
// import { PoolList } from 'lib/components/PoolList'
// import { Tagline } from 'lib/components/Tagline'

// const PaperDynamic = dynamic(() =>
//   import('lib/components/paper').then(mod => mod.Paper),
//   { ssr: false }
// )

export const IndexHero = (
  props,
) => {
  const { t } = useTranslation()
  // const poolDataContext = useContext(PoolDataContext)
  // const {
  //   loading,
  //   pools,
  //   // pool,
  // } = poolDataContext

  const startVideo = (e) => {
    e.preventDefault()
    alert('start video')
  }

  return <>
    <div className='relative'>
      {/* <svg>
        <defs>
          <clipPath id='wave' clipPathUnits='objectBoundingBox'>
            <path d='M1,0c0,0–0.3,0.1–0.5,0.1S0.3,0,0,0.1V1h1L1,0z' />
          </clipPath>
        </defs>
      </svg> */}

      <div
        className='pt-12'
        style={{ height: 'calc(50vh - 84px)' }}
      >
        {/* <canvas id="myCanvas" resize='true'></canvas> */}
        {/* <PaperDynamic /> */}

        <h1
          className='banner-text mx-auto font-bold text-center'
        >
          <span className='text-flashy px-6 leading-10 sm:leading-none'>Win $1000 every week</span>
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
        className='bg-vid text-center relative'
        style={{ 
          height: '50vh'
        }}
      >
        <div class="custom-shape-divider-top-1600195439">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
              fill='#290B5A'
            ></path>
          </svg>
        </div>
        
        <div
          className='flex pt-10 sm:pt-32 text-left px-6 sm:px-24 mx-auto'
          style={{maxWidth: 1200}}
        >
          <div
            className='w-1/2 pt-4 sm:pt-12'
          >
            <h2
              className='text-flashy'
            >
              PoolTogether
            </h2>

            <div className='font-number font-bold text-xs sm:text-lg pr-20'>
              is a protocol for no-loss money games powered by Ethereum.
            </div>
          </div>

          <div
            className='w-1/2 flex flex-col items-center'
          >
            <div
              className='bg-vid-holo h-64 flex items-center justify-center'
              role='img'
              aria-label='Holographic gradient'
            >
              <button
                onClick={startVideo}
                className='bg-vid-circle flex items-center justify-center hover:bg-highlight-5 trans'
              >
                <div
                  className='bg-vid-tri'
                >
                  
                </div>
              </button>
            </div>

            <button
              onClick={startVideo}
              className='text-center font-bold my-2 text-white hover:text-highlight-2 trans hover:border-highlight-2 border-b border-transparent'
            >
              Watch how it works!
            </button>
          </div>
        </div>



      </div>

      {/* <Tagline /> */}
    </div>
  </>
}
