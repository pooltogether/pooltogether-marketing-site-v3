import React from 'react'

import { useTranslation } from 'lib/../i18n'
import { IndexHero } from 'lib/components/IndexHero'
import { IndexHowItWorks } from 'lib/components/IndexHowItWorks'
import { IndexIntegrations } from 'lib/components/IndexIntegrations'
import { IndexSecurity } from 'lib/components/IndexSecurity'

export const IndexUI = (
  props,
) => {
  const { t } = useTranslation()

  return <>
    <IndexHero />
    <IndexIntegrations />
    <IndexHowItWorks />
    <IndexSecurity />
  </>
}
