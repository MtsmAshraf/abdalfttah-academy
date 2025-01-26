import PublicationsCards from '@/components/PublicationsCards/PublicationsCards'
import React, { use } from 'react'

const Publications = ({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) => {
  const {locale} = use(params)
  return (
    <section>
        <PublicationsCards lo={locale}/>
    </section>
  )
}

export default Publications