"use client"
import React, { use, useEffect, useState } from 'react'
import altImg from "../../../../../../public/images/course.jpg"
import allBlogPosts, { BlogPost } from '@/components/BlogCards/allBlogPosts'

import styles from "./blog-post.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'
import BlogCards from '@/components/BlogCards/BlogCards'
import Loader from '@/components/Loader/Loader'
import DOMPurify from 'dompurify';

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
        _embedded?: {
          "wp:featuredmedia"?: {
            id: number;
            source_url: string;
          }[];
        };
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
        title: {
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
        featured_media: number; // ID of the featured media (image)
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

    interface WordPressMedia {
      id: number;
      source_url: string; // URL of the image
      // ... other media properties (e.g., sizes, alt text)
    }
    
    const [post, setPost] = useState<WordPressPost>({id: 999999, title: {rendered: "title"}, featured_media: parseInt("123123123123123")});

        useEffect(() => {
          console.log("REDNEDER")
          async function fetchPost() {
            try {
              // const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/abdalfttahacademy.wordpress.com/posts/${blogId}?_embed&_fields=id,title,content,date,_embedded.wp:featuredmedia`); // Replace with your WordPress URL
              const response = await fetch(`https://biotech-informatics.com/wp-json/wp/v2/posts/${blogId}?_embed&_fields=id,title,content,date,_embedded.wp:featuredmedia`); // Replace with your WordPress URL
              const data = await response.json();
              setPost(data);
            } catch (error) {
            console.error('Error fetching post:', error);
            }
        }
        
        fetchPost();
      },[]);
    
      useEffect(() => {
          console.log("pstssssssssss", post)
      }, [post]);
        
      const cleanHTML = post.content && post.content.rendered ? DOMPurify.sanitize(post.content.rendered) : "";

  return(
    <section className={styles.post}>
        <MainHeading>
          {post.title.rendered}
        </MainHeading>
        {/* <div className="container">
            {
                
                    <div>
                          {
                            <div className={styles.img}>
                                <Image
                                  width={2500} height={2500}
                                  src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || altImg}
                                  alt={`${post.title.rendered}`}>
                                </Image>
                            </div>
                          }
                        <div className={styles.body}>
                          <div dangerouslySetInnerHTML={{ __html: cleanHTML}}/>
                        </div>
                    </div>
            }
          </div> 
        <BlogCards lo={locale} />
        <Loader delay={1000}></Loader> */}
    </section>
  )
}

export default BlogId