import React, { PureComponent } from 'react'

import { BoxLinkWithIcon } from 'lib/components/BoxLinkWithIcon'

import PoolTogetherPurpleWordmarkImg from 'assets/images/pooltogether-purple-wordmark.svg'
import PoolTogetherBlackMarkImg from 'assets/images/pooltogether-black-mark.svg'

export const BrandAssetsPage = class _BrandAssetsPage extends PureComponent {

  render () {
    return <>
      <div
        className='pool-container mx-auto flex flex-col text-base h-full z-10 relative'
      >
        <h4
          className='my-0'
        >
          Brand Assets
        </h4>

        <h2
          className='mb-6'
        >
          PoolTogether Logos &amp; Usage
        </h2>

        <p>
          Here is a handy zipped-up package of all the latest logos, wordmarks, and symbols to assist you in building PoolTogether integrations or linking to us:
        </p>

        <BoxLinkWithIcon
          isExternal
          href='https://github.com/pooltogether/pooltogether--brand-assets/blob/141936c859553a2a42ac96ed807551b85a4d56d9/pooltogether-brand-assets-v1.2.0.zip?raw=true'
          title='Download brand assets zip package'
          icon={'download'}
        >
          pooltogether-brand-assets-v1.2.0.zip
        </BoxLinkWithIcon>

        <br/>

        <h4
          className='my-5'
        >
          By Style
        </h4>

        <p>
          If you would rather download one or two specific styles you can find them on the <a href='https://github.com/pooltogether/pooltogether--brand-assets'>GitHub brand assets repository</a>.
        </p>

        
        <div className='my-5'>
          <p className='text-base my-0 text-accent-1'>
            Examples:
          </p>
          <div className='flex flex-wrap overflow-hidden sm:-mx-2 text-center'>
            <div className='w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:w-1/3 py-10 bg-card'>
              <div className='flex justify-center h-20'>
                <img
                  alt={`PoolTogether Purple Wordmark`}
                  src={PoolTogetherPurpleWordmarkImg}
                  className='w-1/2 mx-auto'
                />
              </div>
              <br />
              <span className='text-accent-1'>
                Purple Wordmark
              </span>
            </div>

            <div className='w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:w-1/3 py-10 bg-card'>
              <div className='flex justify-center h-20'>
                <img
                  alt={`PoolTogether Black Mark`}
                  src={PoolTogetherBlackMarkImg}
                  className='w-3/4 mx-auto'
                />
              </div>

              <br />
              <span className='text-accent-1'>
                Black Mark
              </span>
            </div>
          </div>

        </div>
        
        <h4
          className='my-5'
        >Usage</h4>

        <p>
          We would like you to use any of the the assets 'as is'. If you need a modified version of any of the logos feel free to <a
            href='mailto:hello@pooltogether.com'
          >reach out to us</a> and we'll be happy to help.
        </p>

        <p>
          Please do not use any of the PoolTogether assets as the logo or in your logo for your app or brand. Thanks!
        </p>
      </div>
    </>
  }

}
