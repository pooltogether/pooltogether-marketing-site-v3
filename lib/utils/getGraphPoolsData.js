import { contractAddresses } from '@pooltogether/current-pool-data'
import { request, gql } from 'graphql-request'

const GRAPH_CHAIN_URIS = {
  1: process.env.NEXT_JS_SUBGRAPH_URI_MAINNET,
  3: process.env.NEXT_JS_SUBGRAPH_URI_ROPSTEN,
  4: process.env.NEXT_JS_SUBGRAPH_URI_RINKEBY,
  // 42: process.env.NEXT_JS_SUBGRAPH_URI_KOVAN,
  // 1234: process.env.NEXT_JS_SUBGRAPH_URI_LOCALHOST
}

const QUERY_TEMPLATE = `pool__num__: prizePool(id: "__address__") {
  id
  underlyingCollateralDecimals
  ticket {
    totalSupply
  }
  sponsorship {
    totalSupply
  }
  
}`

export const getGraphPoolsData = async (_, chainId = 1) => {
  const addresses = [
    contractAddresses[chainId].dai.prizePool
  ]

  // build a query selection set from all the pool contract addresses
  let query = ``
  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i]

    const selection = QUERY_TEMPLATE
      .replace('__num__', i)
      .replace('__address__', address)

    query = `${query}\n${selection}`
  }
  console.log(query)

  const response = await request(
    GRAPH_CHAIN_URIS[chainId],
    gql`
      query prizePoolsQuery {
        ${query}
      }
    `
  )

  console.log({ response })
  const data = response.data
  console.log({ data})

  // unpack the data into a useful object 
  // let data = {}
  // for (let i = 0; i < addresses.length; i++) {
  //   const address = addresses[i]
  //   const pool = response[`token${i}`][0]

  //   data[address] = token
  // }

  // test
  // for (let i = 0; i < 10; i++) {
  //   const address = addresses[i]
  // }

  return data
}
