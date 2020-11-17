import { useQuery } from 'react-query'

import {
  UNISWAP_POLLING_INTERVAL,
  QUERY_KEYS
} from 'lib/constants'
import { getUniswapData } from 'lib/utils/getUniswapData'

export function useUniswapTokensQuery(chainId, poolAddress, addresses) {
  const cacheKey = [
    QUERY_KEYS.uniswapTokensQuery,
    poolAddress,
  ]

  return useQuery(
    cacheKey,
    async () => { return getUniswapData(chainId, addresses) },
    {
      enabled: chainId && poolAddress && addresses,
      refetchInterval: UNISWAP_POLLING_INTERVAL
    }
  )
}
