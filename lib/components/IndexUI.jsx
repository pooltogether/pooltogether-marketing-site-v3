import React, { useContext } from 'react'

import { Trans, useTranslation } from 'lib/../i18n'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { IndexUILoader } from 'lib/components/IndexUILoader'
import { ButtonLink } from 'lib/components/ButtonLink'
// import { PoolList } from 'lib/components/PoolList'
import { Tagline } from 'lib/components/Tagline'

export const IndexUI = (
  props,
) => {
  const { t } = useTranslation()
  const poolDataContext = useContext(PoolDataContext)
  const {
    loading,
    pools,
    // pool,
  } = poolDataContext

  return <>
    <canvas id="canvas" resize='true'></canvas>

    <h1
      className='banner-text mx-auto font-bold text-center'
    >
      <span className='text-flashy'>Win $1000 every week</span>
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

    {/* <Tagline /> */}
  </>
}
