import Timeline from '@/components/Timeline/Timeline'
import React, { use } from 'react'
import styles from "./about.module.css"
import Hero from '../../../../components/Hero/Hero'
import Loader from '@/components/Loader/Loader'

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
      <Loader></Loader>
    </section>
  )
}

export default About