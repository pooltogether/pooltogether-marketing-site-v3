import { useContext } from 'react'
import { useQuery } from '@apollo/client'

import {
  CREATOR_ADDRESS,
  MAINNET_POLLING_INTERVAL
} from 'lib/constants'
import { GeneralContext } from 'lib/components/contextProviders/GeneralContextProvider'
import { dynamicPrizePoolsQuery } from 'lib/queries/dynamicPrizePoolsQuery'
import { dynamicPrizeStrategiesQuery } from 'lib/queries/dynamicPrizeStrategiesQuery'
import { getPoolDataFromQueryResult } from 'lib/services/getPoolDataFromQueryResult'
import { getPrizeStrategyDataFromQueryResult } from 'lib/services/getPrizeStrategyDataFromQueryResult'

export const DynamicQueries = (
  props,
) => {
  const { poolAddresses, children } = props
 
  const generalContext = useContext(GeneralContext)
  const { paused } = generalContext

  const variables = {
    creator: CREATOR_ADDRESS
  }


  let dynamicPoolData

  // multiple queries at the same time this (or use apollo-link-batch) to prevent multiple re-renders
  const { loading: poolQueryLoading, error: poolQueryError, data: poolQueryData } = useQuery(dynamicPrizePoolsQuery, {
    variables,
    fetchPolicy: 'network-only',
    pollInterval: paused ? 0 : MAINNET_POLLING_INTERVAL
  })

  if (poolQueryError) {
    console.error(poolQueryError)
  }

  dynamicPoolData = getPoolDataFromQueryResult(poolAddresses, poolQueryData)



  let dynamicPrizeStrategiesData

  const { loading: prizeStrategyQueryLoading, error: prizeStrategyQueryError, data: prizeStrategyQueryData } = useQuery(dynamicPrizeStrategiesQuery, {
    variables,
    fetchPolicy: 'network-only',
    pollInterval: paused ? 0 : MAINNET_POLLING_INTERVAL
  })

  if (prizeStrategyQueryError) {
    console.error(prizeStrategyQueryError)
  }

  dynamicPrizeStrategiesData = getPrizeStrategyDataFromQueryResult(poolAddresses, prizeStrategyQueryData)





  
  const dynamicDataLoading = poolQueryLoading || prizeStrategyQueryLoading
  
  return children({
    dynamicDataLoading,
    dynamicPoolData,
    dynamicPrizeStrategiesData,
  })
}
