export const getPoolDataFromQueryResult = (addresses, data) => {
  let poolData = {
    daiPool: {}
  }

  if (addresses && data?.prizePools?.length > 0) {
    const dynamicDaiData = data.prizePools.find(prizePool => addresses.daiPool === prizePool.id)
    poolData.daiPool = { poolAddress: addresses.daiPool, ...poolData.daiPool, ...dynamicDaiData }
  }

  return poolData
}
