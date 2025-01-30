import Loader from '@/components/Loader/Loader';
import React from 'react'

import styles from "./blog.module.css"
import MainHeading from '@/components/MainHeading/MainHeading';

const Blog = () => {
  return (
    <section className={styles.blog}>
        <MainHeading>Blog</MainHeading>
        <div className="container">
          BLOG PAGE CONTENT IS GOING TO BE HERE
        </div>
        <Loader></Loader>
    </section>
  )
}

export default Blog