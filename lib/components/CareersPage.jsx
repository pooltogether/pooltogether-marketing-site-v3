import React, { Component } from 'react'
import Link from 'next/link'

export const CareersPage = class _CareersPage extends Component {

  render () {
    return <>
      <div
        className='pool-container mx-auto flex flex-col text-base h-full z-10 relative'
      >
        <h4
          className=''
        >
          Careers
        </h4>

        <h2
          className='my-0'
        >
          Join our team
        </h2>

        <p>
          PoolTogether is building the world's first fully trustless prize-linked savings account.
        </p>
        <p>
          We are a passionate group of blockchain believers who see the potential in financial contracts for social good.
        </p>

        <p>
          Our goal is to build consumer-driven applications that shatter traditional expectations of financial products.
        </p>

        <p>
          Join us to help create the future of finance.
        </p>

        <hr
          className='mt-8 mb-0 sm:mt-12'
        />

        <h4
          className='mt-8 sm:mt-12 mb-6'
        >
          Positions: Open
        </h4>


        <div className='mt-4'>
          <Link
            href='/careers/senior-designer'
            as='/careers/senior-designer'
            shallow={true}
          >
            <a
              className='mt-0 sm:mt-8 mb-0 text-lg trans'
            >
              Senior Product Designer
            </a>
          </Link>

          <h5
            className='mb-0 mt-0'
          >Full-time or Contract position</h5>
          <h6
            className='mb-4 -mt-1 text-sm'
          >Vancouver, New York, or remote</h6>
        </div>

        <h4
          className='mt-8 sm:mt-12 mb-6'
        >
          Positions: Not currently hiring
        </h4>

        <div className='mt-4'>
          <Link
            href='/careers/senior-ethereum-engineer'
            as='/careers/senior-ethereum-engineer'
            shallow={true}
          >
            <a
              className='mt-0 sm:mt-8 mb-0 text-lg trans'
            >
              Senior Ethereum Engineer
            </a>
          </Link>

          <h5
            className='mb-0 mt-0'
          >Full-time position</h5>
          <h6
            className='mb-4 -mt-1 text-sm'
          >Vancouver, New York, or remote</h6>
        </div>

        <hr
          className='mt-8 mb-0 sm:mt-12'
        />

        <p
          className='mt-8'
        >
          View one of the job postings above to get started.
        </p>
      </div>
    </>
  }

}