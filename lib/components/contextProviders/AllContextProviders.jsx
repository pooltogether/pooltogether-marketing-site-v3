import React from 'react'

import { GeneralContextProvider } from 'lib/components/contextProviders/GeneralContextProvider'
import { PoolDataContextProvider } from 'lib/components/contextProviders/PoolDataContextProvider'

export const AllContextProviders = (props) => {
  const { children } = props
  
  return <>
    <GeneralContextProvider>
      <PoolDataContextProvider>
        {children}
      </PoolDataContextProvider>
    </GeneralContextProvider>
  </>
}
