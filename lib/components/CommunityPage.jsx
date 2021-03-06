import React from 'react'

import { ButtonLink } from 'lib/components/ButtonLink'

export const CommunityPage = (props) => {
  return <>
    <div
      className='bg-get-involved absolute l-0 r-0 b-0 w-full h-full'
      style={{ 
        backgroundPosition: '0 -20px',
        backgroundAttachment: 'initial',
        top: -100,
        zIndex: 1
      }}
    />
    
    <div
      className='pool-container mx-auto flex flex-col text-base h-full xs:pr-32 sm:pr-32 lg:pr-64 z-10 relative'
    >
      <h2
        className='mt-12 mb-20 text-center xs:text-left'
      >
        Join the discussion and <span className='text-flashy'>help shape the future</span> of PoolTogether
      </h2>

      {/* w-1/2 w-128 sm:w-1/2 lg:w-7/12 */}
      <div className='flex flex-col xs:flex-row'>
        <div className='mb-4 xs:mr-4'>
          <ButtonLink
            secondary
            href='https://gov.pooltogether.com/'
            as='https://gov.pooltogether.com/'
          >
            Governance
          </ButtonLink>
        </div>
        
        
        <div className='mb-4'>
          <ButtonLink
            blue
            secondary
            href='https://discord.gg/hxPhPDW'
            as='https://discord.gg/hxPhPDW'
            className='discord-button flex items-center'
          >
            <svg
              width='19'
              height='21'
              viewBox='0 0 19 21'
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2'
            >
              <path fill='#7289DA' d='M11.1565 8.76562C10.556 8.76562 10.0819 9.28185 10.0819 9.9245C10.0819 10.5671 10.5665 11.0834 11.1565 11.0834C11.757 11.0834 12.2311 10.5671 12.2311 9.9245C12.2311 9.28185 11.7465 8.76562 11.1565 8.76562ZM7.31116 8.76562C6.71066 8.76562 6.23657 9.28185 6.23657 9.9245C6.23657 10.5671 6.72119 11.0834 7.31116 11.0834C7.91167 11.0834 8.38575 10.5671 8.38575 9.9245C8.39628 9.28185 7.91167 8.76562 7.31116 8.76562Z' />
              <path fill='#7289DA' d='M16.2769 0H2.15971C0.969237 0 0 0.969237 0 2.15971V16.2769C0 17.4673 0.969237 18.4366 2.15971 18.4366H14.1066L13.5482 16.5086L14.8967 17.7518L16.1715 18.9212L18.4471 20.8913V2.15971C18.4366 0.969237 17.4673 0 16.2769 0ZM12.2103 13.6431C12.2103 13.6431 11.831 13.19 11.515 12.8002C12.8951 12.4104 13.4218 11.5571 13.4218 11.5571C12.9899 11.8415 12.579 12.0417 12.2103 12.1787C11.6835 12.3999 11.1778 12.5369 10.6827 12.6317C9.6713 12.8213 8.7442 12.7686 7.95406 12.6211C7.35356 12.5053 6.83733 12.3472 6.40539 12.1681C6.16308 12.0733 5.8997 11.9574 5.63632 11.8099C5.60472 11.7889 5.57311 11.7783 5.54151 11.7573C5.52044 11.7467 5.5099 11.7362 5.49937 11.7362C5.30973 11.6308 5.20438 11.5571 5.20438 11.5571C5.20438 11.5571 5.71007 12.3894 7.04804 12.7897C6.73198 13.1901 6.34218 13.6536 6.34218 13.6536C4.0139 13.5799 3.12895 12.0628 3.12895 12.0628C3.12895 8.70206 4.64602 5.97345 4.64602 5.97345C6.16308 4.84618 7.59587 4.87779 7.59587 4.87779L7.70122 5.00421C5.80489 5.54151 4.941 6.37379 4.941 6.37379C4.941 6.37379 5.17277 6.24736 5.56258 6.0788C6.68984 5.58365 7.58533 5.45723 7.95406 5.41508C8.01727 5.40455 8.06995 5.39401 8.13316 5.39401C8.77581 5.30973 9.50274 5.28866 10.2613 5.37294C11.2621 5.48883 12.3367 5.78382 13.4324 6.37379C13.4324 6.37379 12.6001 5.58365 10.8091 5.04635L10.9566 4.87779C10.9566 4.87779 12.3999 4.84618 13.9064 5.97345C13.9064 5.97345 15.4235 8.70206 15.4235 12.0628C15.4235 12.0522 14.5386 13.5693 12.2103 13.6431Z' />
            </svg> Chat
          </ButtonLink>
        </div>
      </div>
    </div>
  </>
}
