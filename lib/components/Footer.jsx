import React, { useEffect } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import { useTranslation } from 'lib/../i18n'

// import MailIcon from 'assets/images/mail-footer.svg'

import MediumLogo from 'assets/images/medium-logo.svg'
import GithubLogo from 'assets/images/github-logo.svg'
import DiscordLogo from 'assets/images/discord-logo.svg'
import TwitterLogo from 'assets/images/twitter-logo.svg'

import PoolTogetherLogo from 'assets/images/pooltogether-logo.svg'

export const Footer = () => {
  const [t] = useTranslation()

  let mailHref = 'mailto:hello@pooltogether.com'
  let twitterHref = 'https://twitter.com/PoolTogether_'

  const linkClassNames = 'trans trans-fast text-accent-1 mt-1 sm:mt-3 mb-0 no-underline'
  
  return <>
    <footer
      className='footer pool-container w-full text-accent-1 text-sm mx-auto'
    >
      <div
        className='flex flex-col pt-10 lg:pt-20'
      >
        <div
          className='pt-6 sm:pt-0 pb-8 flex flex-col sm:flex-row justify-between'
        >

                <div
                  className='footer--pool-logo-container '
                >
                  <Link
                    href='/'
                    as='/'
                    shallow
                  >
                    <a
                      title={'Back to home'}
                      className='pool-logo border-0 trans block w-full'
                    >
                      <img
                        src={PoolTogetherLogo}
                      />
                    </a>
                  </Link>
                </div>

                <nav
                  className='flex flex-wrap w-full sm:flex-no-wrap sm:justify-between sm:w-1/2'
                >

                  <div
                    className='w-full sm:w-1/3 sm:w-auto flex flex-col mb-8 mt-12 sm:my-0'
                  >
                    <span
                      className='font-bold block'
                    >
                      Protocol
                    </span>
                    <Link
                      href='/audits'
                      as='/audits'
                    >
                      <a
                        className={linkClassNames}
                      >
                        Security
                      </a>
                    </Link>
                  </div>


                  <div
                    className='w-full sm:w-1/3 flex flex-col mb-8 sm:my-0'
                  >
                    <span
                      className='font-bold block'
                    >
                      Company
                    </span>
                    <Link
                      href='/'
                      as='/#learn'
                    >
                      <a
                        className={linkClassNames}
                      >
                        Learn
                          </a>
                    </Link>
                    <Link
                      href='/faq'
                      as='/faq'
                    >
                      <a
                        className={linkClassNames}
                      >
                        FAQ
                          </a>
                    </Link>
                    <Link
                      href='/'
                      as='/#stats'
                    >
                      <a
                        className={linkClassNames}
                      >
                        Stats
                      </a>
                    </Link>
                  </div>


                  <div
                    className='w-1/2 md:w-auto flex flex-col mb-8 md:my-0'
                    style={{ 
                      width: 108
                    }}
                  >
                    <span
                      className='font-bold block'
                    >
                      Community
                    </span>

                    <a
                      className={classnames(
                        linkClassNames,
                        'flex'
                      )}
                      href='https://twitter.com/PoolTogether_'
                    >
                      <img
                        alt='twitter logo'
                        src={TwitterLogo}
                        className='mr-4 w-4'
                      /> Twitter
                    </a>

                    <a
                      className={classnames(
                        linkClassNames,
                        'flex'
                      )}
                      href='https://discord.gg/hxPhPDW'
                    >
                      <img
                        alt='discord logo'
                        src={DiscordLogo}
                        className='mr-4 w-4'
                      /> Discord
                    </a>

                    <a
                      className={classnames(
                        linkClassNames,
                        'flex'
                      )}
                      href='https://github.com/pooltogether'
                    >
                      <img
                        alt='github logo'
                        src={GithubLogo}
                        className='mr-4 w-4'
                      /> Github
                    </a>

                    <a
                      className={classnames(
                        linkClassNames,
                        'flex'
                      )}
                      href='https://medium.com/pooltogether'
                    >
                      <img
                        alt='medium logo'
                        src={MediumLogo}
                        className='mr-4 w-4'
                      /> Medium
                    </a>

                    <a
                      className={linkClassNames}
                      href=''
                    >
                      Advocates
                    </a>
                    <a
                      className={linkClassNames}
                      href=''
                    >
                      Invite friends
                    </a>

                  </div>

      {/* 
                  <div
                    className='w-full sm:w-1/3 md:w-auto flex flex-col mb-8 md:my-0'
                  >
                    <span
                      className='font-bold block'
                    >
                      Products
                    </span>
                    <a
                      className={linkClassNames}
                      href='https://help.pooltogether.com'
                      title='Get answers at the help centre'
                    >
                      Help Centre
                    </a>
                    <a
                      className={linkClassNames}
                      href='https://app.pooltogether.com'
                    >
                      v2
                    </a>
                    <a
                      className={linkClassNames}
                      href='https://v1.pooltogether.com'
                    >
                      v1
                    </a>
                  </div> */}

                </nav>
        </div>

        <div
          className='flex justify-between flex-col sm:flex-row sm:pt-2 pb-10 sm:pb-20 lg:pb-20 text-xs border-t'
        >
          <div className='sm:w-1/2'>
            <span
              className='block mt-4'
            >
              &copy; {new Date().getFullYear()} PoolTogether Inc.
            </span>
          </div>

          <div className='w-1/2 sm:w-1/4'>
            <nav
              className='flex justify-between w-full'
            >
              <a
                className={linkClassNames}
                href=''
              >
                Privacy
              </a>
              <a
                className={linkClassNames}
                href=''
              >
                Terms
              </a>
              <a
                className={linkClassNames}
                href=''
              >
                Sitemap
              </a>
            </nav>
          </div>

          
        </div>
      </div>

    </footer>
  </>
}