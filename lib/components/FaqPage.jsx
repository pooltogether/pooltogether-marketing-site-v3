import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react'

import { Collapsible } from 'lib/components/Collapsible'

const debug = require('debug')('pt:components:FaqPage')

export const FaqPage = class _FaqPage extends Component {

  state = {
    emailSubscribeModalOpen: false,
  }

  render() {
    return <>
      <div
        className='pool-container mx-auto flex flex-col text-base h-full z-10 relative'
      >
        <h4
          className='mb-6'
        >
          Questions &amp; Answers
        </h4>

        <Collapsible
          title='What is PoolTogether?'
        >
          PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a “savings ticket”. Each Savings Ticket gives you a chance to win a prize, but even if you don’t win, you keep all your money!<a href='#footnote1' className='super text-sm'>*</a> PoolTogether lets you have the best of both worlds -- saving money and the chance to win a prize!
        </Collapsible>

        <Collapsible
          title='Where does the money for the prize come from?'
        >
          When you join a pool, the PoolTogether Protocol transfers the money you deposit into <a href='https://compound.finance'>Compound.Finance</a>, an open money market. When your funds are deposited into Compound, they are lent out to other users of this money market. Interest earned from those loans accumulates during the duration of the prize period. When a prize is awarded, all the interest that has been earned since the last prize is pooled and given to the winner!

          Compound Finance has completed independent third party security audits and you can learn more about the <a href='https://compound.finance/docs/security'>risks of depositing money into Compound here</a>. As of May 2020, Compound has had more than one hundred million dollars in total deposits.
        </Collapsible>

        <Collapsible
          title='What are the risks?'
        >
          We’ve worked hard to ensure the security of PoolTogether. Our code has been independently audited by OpenZeppelin and Quantstamp. We also have a bug bounty program. You can see our audits and read more about <a href='https://compound.finance'>our bug bounty program here</a>.

          However, as with all early-stage products there are risks associated with using PoolTogether and users assume the full responsibility for these risks. <strong>You should not deposit any money you are not comfortable losing.</strong> You can <a href='/terms'>review our terms of service here</a>.

          You can also review details on the <a href='https://medium.com/pooltogether/a-simple-explanation-of-risks-using-pooltogether-fdf6fecd3864'>different types of risks involved in using PoolTogether here</a>.
        </Collapsible>

        <Collapsible
          title='Do I have to enter for each prize?'
        >
          No! Once you have entered into the pool you will continue to be eligible for future prizes. You do not need to take any further action. You will be eligible until you withdraw the money you deposited.
        </Collapsible>

        <Collapsible
          title='How do I know if I won?'
        >
          If you joined a Pool you can check if you’ve won by looking at your “<a
            href='https://app.pooltogether.com/en/account'
          >account</a>” page after a prize has been awarded that you were eligible for. We also send email notifications when a Pool concludes so <a
            className='trans trans-fast cursor-pointer'
            onClick={() => this.setState({ emailSubscribeModalOpen: true })}
          >sign up for those</a> if you want to get notified!
          <br />
          <br />
          If you win, your winnings will automatically be converted to tickets which will increase your chances of winning again!
        </Collapsible>

        <Collapsible
          title='What are my odds of winning?'
        >
          Your odds of winning depend on how much money is in the pool. For example, if 1,000 Dai is in the pool and you buy 1 ticket your chance of winning would be 1 in 1,000.  You can always check your odds of winning on <a href='https://app.pooltogether.com/en/account'>your account page</a>.
        </Collapsible>

        <Collapsible
          title='How do I know that the winning ticket is truly selected at random?'
        >
          You can read all the details on how randomness is generated and a winner is selected in <a href='https://medium.com/pooltogether/how-pooltogether-selects-winners-9301f8d76730'>our How PoolTogether Selects a Winner blog post here</a>.
        </Collapsible>

        <Collapsible
          title='When I buy tickets am I instantly eligible to win?'
        >
          No, when you buy tickets those tickets are eligible for the NEXT and all future prizes, but not the current prize. This rule prevents people from only buying tickets right before a prize is awarded and withdrawing immediately afterwards.
          <br />
          <br />
          You can confirm how many of your tickets are eligible to win by looking at <a href='https://app.pooltogether.com/en/account'>your account page</a> and expanding the details of the pool you are in.
        </Collapsible>

        <Collapsible
          title='What is the “Sponsored Dai?'
        >
          Sponsored Dai is Dai that is deposited in the pool but is NOT eligible to win. The interest earned from Sponsored Dai is pooled at the end of each pool and awarded to the winner. Sponsored Dai is provided by individuals and crypto companies that want to help grow the ecosystem.
        </Collapsible>

        <Collapsible
          title='What is Dai and USDC?'
        >
          Dai and USDC are stablecoins, or digital assets, whose price is intended to be pegged to the US dollar.  This means the value of one Dai or USDC is generally equals to 1 US Dollar, and their values are not intended to fluctuate like Bitcoin and other cryptocurrencies. However, because the prices of Dai and USDC are market driven, there are still price fluctuations. Using Dai and USDC, as with any cryptocurrency, comes with other risks. You can learn more about the risks associated with Dai and USDC by going <a href='https://makerdao.com/en/'>here</a> and <a href='https://www.circle.com/en/usdc'>here</a>.
        </Collapsible>

        <Collapsible
          title='How can I get Dai and USDC?'
        >
          There are many ways to acquire DAI and USDC. The simplest is to <a href='https://argent.link/poolt'>download the Argent Wallet app</a> and convert your money in the app. Another easy way is to purchase DAI and USDC on a cryptocurrency exchange. <a href='https://www.coinbase.com/'>Coinbase</a> is one exchange that is popular and easy to use. If you already own Ethereum, you can exchange your Ethereum for Dai or USDC on <a href='https://uniswap.exchange'>uniswap.exchange</a>.
        </Collapsible>

        <Collapsible
          title='Why does this matter?'
        >
          Over 80 billion dollars are spent on lottery tickets each year in North America alone. At the same time, 40% of Americans do not have more than $400 of cash saved [link to source]. PoolTogether wants to change these economics by turning money spent into money saved. We believe this is crucial to the economic safety and well being for millions of people around the world.
          You can learn more about our vision and <a href='https://www.youtube.com/watch?v=voDBfTzFh9g'>why we built Pooltogether here</a>.
        </Collapsible>

        <Collapsible
          title='How does PoolTogether make money?'
        >
          PoolTogether does not make money. PoolTogether is backed by some of the top venture capital firms in the world which allows us to focus on building an excellent product.
        </Collapsible>


        <h3 className='mt-10'>
          I have more questions ...
        </h3>
        <p className='pb-4  mt-1'>
          Feel free to reach out to us on Twitter <a
            target='_blank'
            rel='noreferrer nofollow'
            href='https://twitter.com/PoolTogether_'
          >
            @PoolTogether_
          </a> or email at <a
            href='mailto:hello@pooltogether.com'
            target='_blank'
            rel='noreferrer nofollow'
          >
            hello@pooltogether.com
          </a>.
        </p>

        {/* <h3>
          I'd like to be notified when draws happen.
        </h3>
        <p className='pb-4 text-purple mt-1'>
          You can&nbsp;
          <a
            className='trans trans-fast cursor-pointer'
            onClick={() => this.setState({ emailSubscribeModalOpen: true })}
          >

            <FeatherIcon
              icon='mail'
              className='inline-block w-3 h-3 md:h-4 md:w-4 -mt-1'
            /> Subscribe to Draw Announcements
          </a> at any time.
        </p> */}


        <h3>
          I'm ready to join the pool. 🏊
        </h3>
        <p className='pb-4  mt-1'>
          Great, <a
            href='https://app.pooltogether.com'
          >
            hop in
          </a>!
        </p>

        <div id='footnote1' className='text-xxs'>
          * Using the Pooltogether Protocol may result in the loss of some or all of your funds. Please read our FAQ and terms of service to understand the risks associated with Pooltogether.
        </div>

      </div>
    </>
  }

}