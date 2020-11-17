import gql from 'graphql-tag'

import { externalErc20AwardFragment } from 'lib/fragments/externalErc20AwardFragment'
import { singleRandomWinnerFragment } from 'lib/fragments/singleRandomWinnerFragment'

export const prizeStrategyFragment = gql`
  fragment prizeStrategyFragment on PrizeStrategy {
    id

    externalErc20Awards {
      ...externalErc20AwardFragment
    }
    
    singleRandomWinner {
      ...singleRandomWinnerFragment
    }
  }
  ${externalErc20AwardFragment}
  ${singleRandomWinnerFragment}
`
