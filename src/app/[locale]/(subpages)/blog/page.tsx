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
  return (
    <section className={styles.blog}>
        <BlogCards lo={locale}></BlogCards>
        
        <Loader></Loader>
    </section>
  )
}

export default Blog