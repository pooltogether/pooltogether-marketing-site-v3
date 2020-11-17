import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useQueryCache } from 'react-query'

import { QUERY_KEYS } from 'lib/constants'
import { ChainQueries } from 'lib/components/ChainQueries'
import { GraphDataQueries } from 'lib/components/queryComponents/GraphDataQueries'
import { UniswapData } from 'lib/components/UniswapData'
import { usePoolsQuery } from 'lib/hooks/usePoolsQuery'
import { compilePools } from 'lib/services/compilePools'
import { getContractAddresses } from 'lib/services/getContractAddresses'
import { readProvider } from 'lib/services/readProvider'
import { normalizeTo18Decimals } from 'lib/utils/normalizeTo18Decimals'

export const TotalPrizes = function(props) {
  const chainId = 1
  const networkName = 'mainnet'

  const cache = useQueryCache()

  const [defaultReadProvider, setDefaultReadProvider] = useState({})

  useEffect(() => {
    const getReadProvider = async () => {
      const defaultReadProvider = await readProvider(networkName)
      setDefaultReadProvider(defaultReadProvider)
    }
    getReadProvider()
  }, [networkName])

  const contractAddresses = getContractAddresses(chainId)

  const { status, data, error, isFetching } = usePoolsQuery(chainId, poolAddresses.pools)

  if (error) {
    console.warn(error)
  }

  
  // console.log(totalPrizes.toString())





  return <>
    <ChainQueries
      {...props}
      cache={cache}
      chainId={chainId}
      provider={defaultReadProvider}
      poolData={poolData}
      graphDataLoading={graphDataLoading}
    >
      {({ genericChainData }) => {
        const pools = compilePools(contractAddresses, cache, data, graphDataLoading, genericChainData)

        const ethereumErc20Awards = cache.getQueryData([QUERY_KEYS.ethereumErc20sQuery, poolData?.daiPool?.poolAddress, -1])
        const addresses = ethereumErc20Awards
          ?.filter(award => award.balance.gt(0))
          ?.map(award => award.address)

        return <UniswapData
          addresses={addresses}
          poolAddress={poolData?.daiPool?.poolAddress}
        >
          {() => {
            let totalPrizes = ethers.utils.bigNumberify(0)
            pools?.forEach(_pool => {
              console.log(_pool)
              const decimals = _pool?.underlyingCollateralDecimals
              if (!decimals) { return }

              const cumulativePrizeAmountsForPool = normalizeTo18Decimals(
                _pool.prizeAmount,
                decimals
              )

              totalPrizes = totalPrizes.add(
                cumulativePrizeAmountsForPool
              )
            })

            return totalPrizeAmountUSD

          }}
        </UniswapData>
      }}
    </ChainQueries>
  </>
}
