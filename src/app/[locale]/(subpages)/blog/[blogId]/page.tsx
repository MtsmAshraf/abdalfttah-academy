"use client"
import React, { use, useEffect, useState } from 'react'
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
    interface WordPressPost {
        id?: number;
        date?: string; // ISO 8601 format
        date_gmt?: string;
        guid?: {
            rendered?: string;
        };
        modified?: string;
        modified_gmt?: string;
        slug?: string;
        status?: string;
        type?: string; // 'post', 'page', etc.
        link?: string;
        title?: {
            rendered?: string;
        };
        content?: {
            rendered?: string; // The HTML content
            protected?: boolean;
        };
        excerpt?: {
            rendered?: string;
            protected?: boolean;
        };
        author?: number; // ID of the author
        featured_media?: number; // ID of the featured media (image)
        comment_status?: string;
        ping_status?: string;
        sticky?: boolean;
        template?: string;
        format?: string; // 'standard', 'aside', 'gallery', etc.
        meta?: any; // Often an empty object initially, but can hold custom fields
        categories?: number[]; // Array of category IDs
        tags?: number[]; // Array of tag IDs
    
        // ... potentially more properties depending on your WordPress setup
    }

    
    const [posts, setPosts] = useState<WordPressPost[]>([{id: 999999}]);

        useEffect(() => {
          console.log("REDNEDER")
        async function fetchPost() {
            try {
            const response = await fetch(`https://biotech-informatics.com/wp-json/wp/v2/posts`); // Replace with your WordPress URL
            const data = await response.json();
            console.log("POST", data)
            setPosts(data);
            } catch (error) {
            console.error('Error fetching post:', error);
            }
        }
    
        fetchPost();
      },[]);
      

  return(
    <section className={styles.post}>
        {/* <MainHeading>{post.title?.rendered}</MainHeading> */}
            {
              posts.map((post, index: number) => {
                return(
                  post.id === parseInt(blogId) && 
                  <div className="container" key={index}>
                    <div className={styles.img}>
                      {/* <Image loading='lazy' src={post.src} alt={`${post.title} post iamge`}></Image> */}
                      </div>
                      <div className={styles.body}>
                          <p>
                              {post.author}
                          </p>
                      </div>
                  </div> 
                )
              })
            }
        <BlogCards lo={locale} />
        {/* <Loader></Loader> */}
    </section>
  )
}

export default BlogId