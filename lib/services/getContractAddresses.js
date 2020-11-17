import { contractAddresses } from '@pooltogether/current-pool-data'

export const getContractAddresses = (chainId) => {
  let daiPoolAddress//,
  // usdcPoolAddress

  let daiPrizeStrategyAddress//,
  // usdcPrizeStrategyAddress

  try {
    daiPoolAddress = contractAddresses[chainId].dai.prizePool
    // usdcPoolAddress = contractAddresses[chainId].usdc.prizePool

    daiPrizeStrategyAddress = contractAddresses[chainId].dai.prizeStrategy
    // usdcPrizeStrategyAddress = contractAddresses[chainId].usdc.prizeStrategy

    if (!daiPoolAddress) {
      throw new Error(`Unable to find DAI prize pool contract for chainId: ${chainId}`)
    }
  } catch (e) {
    throw e
  }

  return {
    pools: [daiPoolAddress.toLowerCase()],
    prizeStrategies: [daiPrizeStrategyAddress.toLowerCase()],
    daiPool: daiPoolAddress.toLowerCase(),
    // usdcPool: usdcPoolAddress.toLowerCase(),
    daiPrizeStrategy: daiPrizeStrategyAddress.toLowerCase(),
    // usdcPrizeStrategy: usdcPrizeStrategyAddress.toLowerCase(),
  }
}
