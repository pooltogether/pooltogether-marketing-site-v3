export const SUPPORTED_CHAIN_IDS = [1, 3, 4]

export const CREATOR_ADDRESS = '0xe0f4217390221af47855e094f6e112d43c8698fe'

export const SECONDS_PER_BLOCK = 14

export const DEFAULT_TOKEN_PRECISION = 18

export const GRAPH_POLLING_INTERVAL = process.env.NEXT_JS_DOMAIN_NAME ? (30 * 1000) : (15 * 1000)

const domain = process.env.NEXT_JS_DOMAIN_NAME && `.${process.env.NEXT_JS_DOMAIN_NAME}`

export const COOKIE_OPTIONS = {
  sameSite: 'strict',
  secure: process.env.NEXT_JS_DOMAIN_NAME === 'pooltogether.com',
  domain
}

export const QUERY_KEYS = {
  'graphPoolsQuery': 'graphPoolsQuery'
}