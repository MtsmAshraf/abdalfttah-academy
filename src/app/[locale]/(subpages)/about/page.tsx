import Timeline from '@/components/Timeline/Timeline'
import React, { use } from 'react'
import styles from "./about.module.css"
import Hero from '../../../../components/Hero/Hero'

const About = ({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) => {
    const {locale} = use(params)
  return (
    <section className={styles.about}>
      <Hero lo={locale} />
      <Timeline lo={locale} />
    </section>
  )
}

export default About