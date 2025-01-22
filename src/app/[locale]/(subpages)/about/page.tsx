import Timeline from '@/components/Timeline/Timeline'
import React, { use } from 'react'

const About = ({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) => {
    const {locale} = use(params)
  return (
    <section>
      <Timeline lo={locale} />
    </section>
  )
}

export default About