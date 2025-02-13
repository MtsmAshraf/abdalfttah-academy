import Loader from '@/components/Loader/Loader';
import React, { use } from 'react'

import styles from "./blog.module.css"
import BlogCards from '@/components/BlogCards/BlogCards';

const Blog = ({
  params
}: Readonly<{
  params: Promise<{locale: string}>
}>) => {
  const { locale } = use(params)

  const classNames = [
    styles.blog,
    locale === "ar" ? styles.ar : ""
  ]

  return (
    <section className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        <BlogCards lo={locale} all></BlogCards>
        {/* <Loader delay={3000}></Loader> */}
    </section>
  )
}

export default Blog