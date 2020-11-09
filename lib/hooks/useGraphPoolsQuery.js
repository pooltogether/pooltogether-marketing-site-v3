import { useQuery } from 'react-query'

import {
  GRAPH_POLLING_INTERVAL,
  QUERY_KEYS
} from 'lib/constants'
import { getGraphPoolsData } from 'lib/utils/getGraphPoolsData'

export function useGraphPoolsQuery() {
  console.log('hi')
  return useQuery(
    [QUERY_KEYS.graphPoolsQuery],
    getGraphPoolsData,
    {
      refetchInterval: GRAPH_POLLING_INTERVAL
    }
  )
}
