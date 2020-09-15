import React from 'react'

import { useTranslation } from 'lib/../i18n'
import { IndexHero } from 'lib/components/IndexHero'
import { IndexIntegrations } from 'lib/components/IndexIntegrations'

export const IndexUI = (
  props,
) => {
  const { t } = useTranslation()

  return <>
    <IndexHero />
    <IndexIntegrations />
  </>
}
