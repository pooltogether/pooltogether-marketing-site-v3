import { useContext, useEffect, useState } from 'react'

import {
  QUERY_KEYS,
} from 'lib/constants'
import { useEthereumErc20Query } from 'lib/hooks/useEthereumErc20Query'
import { useEthereumGenericQuery } from 'lib/hooks/useEthereumGenericQuery'

const debug = require('debug')('pool-app:FetchGenericChainData')

export function ChainQueries(props) {
  const {
    children,
    provider,
    graphPoolsData,
  } = props

  const {
    status: genericChainStatus,
    data: genericChainData,
    error: genericChainError,
    isFetching: genericIsFetching
  } = useEthereumGenericQuery({
    provider,
    poolData: graphPoolsData?.daiPool
  })

  if (genericChainError) {
    console.warn(genericChainError)
  }





  const poolAddress = graphPoolsData?.daiPool?.poolAddress
  const graphExternalErc20Awards = graphPoolsData?.daiPool?.prizeStrategy?.externalErc20Awards

  const {
    status: externalErc20ChainStatus,
    data: externalErc20ChainData,
    error: externalErc20ChainError,
    isFetching: externalErc20IsFetching
  } = useEthereumErc20Query({
    provider,
    graphErc20Awards: graphExternalErc20Awards,
    poolAddress,
  })

  if (externalErc20ChainError) {
    console.warn(externalErc20ChainError)
  }


  return children({ 
    genericChainData,
  })
}
