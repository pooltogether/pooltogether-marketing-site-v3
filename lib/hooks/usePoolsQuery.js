import { useQuery } from 'react-query'

import {
  MAINNET_POLLING_INTERVAL,
  QUERY_KEYS
} from 'lib/constants'
import { getPoolsData } from 'lib/utils/getPoolsData'

export function usePoolsQuery(chainId, poolAddresses) {
  return useQuery(
    [QUERY_KEYS.poolsQuery, poolAddresses],
    async () => { return getPoolsData(chainId, poolAddresses) },
    {
      enabled: poolAddresses,
      refetchInterval: MAINNET_POLLING_INTERVAL
    }
  )
}
