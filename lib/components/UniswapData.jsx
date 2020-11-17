import { useUniswapTokensQuery } from 'lib/hooks/useUniswapTokensQuery'

export function UniswapData(props) {
  const {
    children,
    poolAddress,
    addresses,
  } = props

  const chainId = 1

  const { status, data, error, isFetching } = useUniswapTokensQuery(chainId, poolAddress, addresses)

  if (error) {
    console.warn(error)
  }

  return children({ 
    data
  })

}
