import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { FetchGenericChainData } from 'lib/components/FetchGenericChainData'
import { GraphDataQueries } from 'lib/components/queryComponents/GraphDataQueries'
import { getContractAddresses } from 'lib/services/getContractAddresses'
import { readProvider } from 'lib/utils/readProvider'
import { networkNameToChainId } from 'lib/utils/networkNameToChainId'

export const PoolDataContext = React.createContext()

export const PoolDataContextProvider = (props) => {
  const networkName = process.env.NEXT_JS_DEFAULT_ETHEREUM_NETWORK_NAME
  const chainId = networkNameToChainId(networkName)

  const [defaultReadProvider, setDefaultReadProvider] = useState({})

  const router = useRouter()
  const querySymbol = router.query.symbol && router.query.symbol.toLowerCase()

  useEffect(() => {
    const getReadProvider = async () => {
      const defaultReadProvider = await readProvider(networkName)
      setDefaultReadProvider(defaultReadProvider)
    }
    getReadProvider()
  }, [networkName])

  const poolAddresses = getContractAddresses(chainId)

  return <>
    <GraphDataQueries
      {...props}
      poolAddresses={poolAddresses}
    >
      {({
        graphDataLoading,
        dynamicPoolData,
        dynamicPrizeStrategiesData,
      }) => {
        return <FetchGenericChainData
          {...props}
          chainId={chainId}
          provider={defaultReadProvider}
          poolAddresses={poolAddresses}
        >
          {({ genericChainData }) => {
            let pools = []

            
            if (!graphDataLoading) {
              pools = [
                {
                  ...genericChainData.daiPrizeStrategy,
                  ...dynamicPoolData.daiPool,
                  ...dynamicPrizeStrategiesData.daiPrizeStrategy,
                  name: 'DAI Pool',
                  frequency: 'Weekly',
                  symbol: 'PT-cDAI',
                },
                {
                  ...genericChainData.usdcPrizeStrategy,
                  ...dynamicPoolData.usdcPool,
                  ...dynamicPrizeStrategiesData.usdcPrizeStrategy,
                  name: 'USDC Pool',
                  frequency: 'Weekly',
                  symbol: 'PT-cUSDC',
                },
                // {
                //   ...genericChainData.usdtPrizeStrategy,
                //   ...dynamicPoolData.usdtPool,
                //   ...dynamicPrizeStrategiesData.usdtPrizeStrategy,
                //   name: 'Tether Pool',
                //   frequency: 'Weekly',
                //   symbol: 'PT-cUSDT',
                // },
                // {
                //   ...genericChainData.wbtcPrizeStrategy,
                //   ...dynamicPoolData.wbtcPool,
                //   ...dynamicPrizeStrategiesData.wbtcPrizeStrategy,
                //   yieldSource: 'Compound',
                //   name: 'Weekly Wrapped Bitcoin Pool',
                //   symbol: 'PT-cWBTC',
                // },
              ]
            }

            let pool
            if (querySymbol && pools?.length > 0) {
              pool = pools.find(_pool => {
                let symbol
                if (_pool && _pool.symbol) {
                  symbol = _pool.symbol.toLowerCase()
                }

                if (_pool && symbol) {
                  return symbol === querySymbol
                }
              })

              if (!pool) {
                pool = null
              }
            }

            return <PoolDataContext.Provider
              value={{
                loading: graphDataLoading,
                defaultReadProvider,
                pool,
                pools,
                poolAddresses,
                dynamicPoolData,
                genericChainData,
              }}
            >
              {props.children}
            </PoolDataContext.Provider>
          }}
        </FetchGenericChainData>
      }}
    </GraphDataQueries>
  </>
}
