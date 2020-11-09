// import { useQuery } from '@apollo/client'

// import {
//   CREATOR_ADDRESS,
//   MAINNET_POLLING_INTERVAL
// } from 'lib/constants'
// import { dynamicPrizePoolsQuery } from 'lib/queries/dynamicPrizePoolsQuery'
// import { dynamicSingleRandomWinnerQuery } from 'lib/queries/dynamicSingleRandomWinnerQuery'
// import { getPoolDataFromQueryResult } from 'lib/services/getPoolDataFromQueryResult'
// import { getPrizeStrategyDataFromQueryResult } from 'lib/services/getPrizeStrategyDataFromQueryResult'
// import { poolToast } from 'lib/utils/poolToast'

// const debug = require('debug')('pool-app:DynamicQueries')

// export const DynamicQueries = (
//   props,
// ) => {
//   const { poolAddresses, children } = props

//   const variables = {

//   }

//   let dynamicPoolData

//   // multiple queries at the same time this (or use apollo-link-batch) to prevent multiple re-renders
//   const {
//     loading: poolQueryLoading,
//     error: poolQueryError,
//     data: poolQueryData,
//   } = useQuery(dynamicPrizePoolsQuery, {
//     variables,
//     fetchPolicy: 'network-only',
//     pollInterval: MAINNET_POLLING_INTERVAL
//   })

//   if (poolQueryError) {
//     poolToast.error(poolQueryError)
//     console.error(poolQueryError)
//   }

//   dynamicPoolData = getPoolDataFromQueryResult(poolAddresses, poolQueryData)



//   let dynamicPrizeStrategiesData

//   const {
//     loading: prizeStrategyQueryLoading,
//     error: prizeStrategyQueryError,
//     data: prizeStrategyQueryData,
//   } = useQuery(dynamicSingleRandomWinnerQuery, {
//     variables,
//     fetchPolicy: 'network-only',
//     pollInterval: MAINNET_POLLING_INTERVAL
//   })

//   if (prizeStrategyQueryError) {
//     poolToast.error(prizeStrategyQueryError)
//     console.error(prizeStrategyQueryError)
//   }

//   dynamicPrizeStrategiesData = getPrizeStrategyDataFromQueryResult(poolAddresses, prizeStrategyQueryData)


//   const dynamicDataLoading = poolQueryLoading || prizeStrategyQueryLoading

//   return children({
//     dynamicDataLoading,
//     dynamicPoolData,
//     dynamicPrizeStrategiesData,
//   })
// }
