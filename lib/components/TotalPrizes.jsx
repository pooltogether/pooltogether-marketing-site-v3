import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useQueryCache } from 'react-query'

import { QUERY_KEYS } from 'lib/constants'
import { ChainQueries } from 'lib/components/ChainQueries'
import { UniswapData } from 'lib/components/UniswapData'
import { usePoolsQuery } from 'lib/hooks/usePoolsQuery'
import { compilePools } from 'lib/services/compilePools'
import { getContractAddresses } from 'lib/services/getContractAddresses'
import { readProvider } from 'lib/services/readProvider'
import { normalizeTo18Decimals } from 'lib/utils/normalizeTo18Decimals'

const bn = ethers.utils.bigNumberify

export const TotalPrizes = function(props) {
  const { children } = props

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

  const { status, data, error, isFetching } = usePoolsQuery(chainId, contractAddresses.pools)

  const daiPool = data?.[0]
  const graphPoolsData = {
    daiPool: {
      ...daiPool,
      poolAddress: daiPool?.id
    }
  }

  if (error) {
    console.warn(error)
  }





  return <>
    <ChainQueries
      {...props}
      cache={cache}
      chainId={chainId}
      provider={defaultReadProvider}
      graphPoolsData={graphPoolsData}
      graphDataLoading={isFetching}
    >
      {({ genericChainData }) => {
        const pools = compilePools(contractAddresses, cache, graphPoolsData, isFetching, genericChainData)

        const ethereumErc20Awards = cache.getQueryData([QUERY_KEYS.ethereumErc20sQuery, graphPoolsData?.daiPool?.poolAddress])
        const addresses = ethereumErc20Awards
          ?.filter(award => award.balance.gt(0))
          ?.map(award => award.address)

        return <UniswapData
          addresses={addresses}
          poolAddress={graphPoolsData?.daiPool?.poolAddress}
        >
          {() => {
            let totalPrizeAmountUSD = bn(0)

            pools?.forEach(_pool => {
              const decimals = _pool?.underlyingCollateralDecimals
              if (!_pool.prizeAmountUSD || !decimals) {
                return
              }

              const cumulativePrizeAmountsForPool = normalizeTo18Decimals(
                _pool.prizeAmountUSD,
                decimals
              )

              totalPrizeAmountUSD = totalPrizeAmountUSD.add(
                cumulativePrizeAmountsForPool
              )
            })

            return children(totalPrizeAmountUSD?.gt(0) ?
              totalPrizeAmountUSD : 
              bn('0')
            )
          }}
        </UniswapData>
      }}
    </ChainQueries>
  </>
}
