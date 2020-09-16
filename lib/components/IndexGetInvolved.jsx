import React, { useEffect } from 'react'
import classnames from 'classnames'

import { ButtonLink } from 'lib/components/ButtonLink'

export const IndexGetInvolved = () => {
  return <>
    <div className='bg-secondary bg-get-involved'>
      <div className='pool-container mx-auto py-8 sm:py-24'>

        <h1
          className='text-center'
        >
          Get involved
        </h1>


        <div className='flex flex-col items-center rounded-lg p-4 py-12 sm:p-10 mt-8 bg-overlay'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Join our growing community
          </h3>
          <div
            className='font-normal font-number w-3/4 xs:w-2/3 sm:w-1/2 text-center text-xs sm:text-sm'
          >
            Make your contribution and get community support 24/7.
          </div>

          <div className='pt-12'>
            links to communities
          </div>
        </div>



        <div className='flex flex-col items-center rounded-lg p-4 py-12 sm:p-10 mt-12 bg-overlay'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Sign up for our newsletter
          </h3>
          <div
            className='font-normal font-number sm:w-1/2 text-center text-xs sm:text-sm px-4'
          >
            Get the latest updates about pools and new releases.
          </div>

          <div className='pt-12'>
            mail sign up
          </div>
        </div>


      </div>
    </div>
  </>
}
