import { useContext } from 'react'
import { useQuery } from '@apollo/client'

import {
  CREATOR_ADDRESS,
  MAINNET_POLLING_INTERVAL
} from 'lib/constants'
import { GeneralContext } from 'lib/components/contextProviders/GeneralContextProvider'
import { dynamicPrizePoolsQuery } from 'lib/queries/dynamicPrizePoolsQuery'
import { getPoolDataFromQueryResult } from 'lib/services/getPoolDataFromQueryResult'
import { poolToast } from 'lib/utils/poolToast'

const debug = require('debug')('pool-app:DynamicQueries')

export const DynamicQueries = (
  props,
) => {
  const { poolAddresses, children } = props

  const generalContext = useContext(GeneralContext)
  const { paused } = generalContext

  const variables = {
    owner: CREATOR_ADDRESS
  }

  let dynamicPoolData

  const {
    loading: poolQueryLoading,
    error: poolQueryError,
    data: poolQueryData,
    refetch: refetchPoolQuery
  } = useQuery(dynamicPrizePoolsQuery, {
    variables,
    fetchPolicy: 'network-only',
    pollInterval: paused ? 0 : MAINNET_POLLING_INTERVAL
  })

  if (poolQueryError) {
    poolToast.error(poolQueryError)
    console.error(poolQueryError)
  }

  dynamicPoolData = getPoolDataFromQueryResult(poolAddresses, poolQueryData)


  const dynamicDataLoading = poolQueryLoading

  return children({
    dynamicDataLoading,
    dynamicPoolData,
    refetchPoolQuery,
  })
}
