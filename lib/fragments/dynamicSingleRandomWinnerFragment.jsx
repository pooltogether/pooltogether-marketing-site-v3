import gql from 'graphql-tag'

export const dynamicSingleRandomWinnerFragment = gql`
  fragment dynamicSingleRandomWinnerFragment on SingleRandomWinner {
    id
    
    ticket {
      id
      totalSupply
    }
    sponsorship {
      id
      totalSupply
    }
  }
`
