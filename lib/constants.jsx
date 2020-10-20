export const SUPPORTED_CHAIN_IDS = [4, 42, 31337, 1234]

export const CREATOR_ADDRESS = '0x38e842cfc75951d08e9e13bf6a8def90c639c136'

export const MAINNET_POLLING_INTERVAL = 15000

const domain = process.env.NEXT_JS_DOMAIN_NAME && `.${process.env.NEXT_JS_DOMAIN_NAME}`

export const COOKIE_OPTIONS = {
  sameSite: 'strict',
  secure: process.env.NEXT_JS_DOMAIN_NAME === 'pooltogether.com',
  domain
}
