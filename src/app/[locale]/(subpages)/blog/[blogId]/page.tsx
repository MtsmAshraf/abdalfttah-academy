import React, { use } from 'react'
import altImg from "../../../../../../public/images/course.jpg"
import allBlogPosts, { BlogPost } from '@/components/BlogCards/allBlogPosts'

import styles from "./blog-post.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'
import BlogCards from '@/components/BlogCards/BlogCards'
import Loader from '@/components/Loader/Loader'

const BlogId = ({
    params,
  }: Readonly<{
    params:  Promise<{blogId: string, locale: string}>
    
  }>) => {

    const {locale} = use(params)
    const {blogId} = use(params)
    const post: BlogPost = allBlogPosts.find((ele) => ele.id === blogId) || {
        id: "999",
        title: "Title",
        category: "Cat",
        brief: "Brief",
        body: "Body",
        src: altImg,
    }

  return (
    <section className={styles.post}>
        <MainHeading>{post.title}</MainHeading>
        <div className="container">
            <div className={styles.img}>
                <Image loading='lazy' src={post.src} alt={`${post.title} post iamge`}></Image>
            </div>
            <div className={styles.body}>
                <p>
                    {post.body}
                </p>
            </div>
        </div>
        <BlogCards lo={locale} />
        <Loader></Loader>
    </section>
  )
}

export default BlogId