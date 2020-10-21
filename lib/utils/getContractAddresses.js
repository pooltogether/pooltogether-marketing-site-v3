import { contractAddresses } from '@pooltogether/current-pool-data'

export const getContractAddresses = (chainId) => {
  let daiPoolAddress,
    daiPrizeStrategyAddress

  try {
    daiPoolAddress = contractAddresses[chainId].dai.prizePool
    daiPrizeStrategyAddress = contractAddresses[chainId].dai.prizeStrategy
  } catch (e) {
    throw e
  }

  return {
    daiPool: daiPoolAddress.toLowerCase(),
    daiPrizeStrategy: daiPrizeStrategyAddress.toLowerCase(),
  }
}
