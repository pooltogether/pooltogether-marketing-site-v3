import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'lib/../i18n'

export const Nav = (props) => {
  const { t } = useTranslation()

  const navLinkClasses = 'text-accent-2 inline-flex items-center justify-center pr-12 capitalize leading-none rounded-full text-lg trans tracking-wider outline-none focus:outline-none active:outline-none font-bold'

  return <>
    <nav
      className='justify-end items-center hidden sm:flex w-2/3'
    >
      <Link
        href='/docs'
        as='/docs'
        shallow
      >
        <a
          className={classnames(
            navLinkClasses,
          )}
        >
          {t('docs')}
        </a>
      </Link>

      <Link
        href='/community'
        as='/community'
        shallow
      >
        <a
          className={classnames(
            navLinkClasses,
          )}
        >
          {t('community')}
        </a>
      </Link>


      <Link
        href='/account'
        as='/account'
        shallow
      >
        <a
          className={classnames(
            'inline-flex items-center justify-center uppercase font-bold tracking-wider outline-none focus:outline-none active:outline-none',
            'hover:bg-default rounded-full border-2 border-highlight-2 px-10 py-2 trans trans-fast text-lg',
          )}
        >
          {t('app')}
        </a>
      </Link>
    </nav>
  </>
    
}
