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

    type Title = string | undefined
    const [postTitle, setPostTitle] = useState<Title>("Title")

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
    
    const [posts, setPosts] = useState<WordPressPost[]>([{id: 999999, title: {rendered: "title"}, featured_media: parseInt("123123123123123")}]);
    const [featuredMedia, setFeaturedMedia] = useState<Record<number, WordPressMedia>>({});

        useEffect(() => {
          console.log("REDNEDER")
          async function fetchPost() {
            try {
              const response = await fetch('https://biotech-informatics.com/wp-json/wp/v2/posts'); // Replace with your WordPress URL
              const data = await response.json();
              setPosts(data);
              if (data) { // Check if data exists
                  const mediaPromises = data.map(async (post: WordPressPost) => {
                  if (post.featured_media) {
                      const mediaResponse = await fetch(
                          `https://biotech-informatics.com/wp-json/wp/v2/media/${post.featured_media}`
                      );
                      const resp = await mediaResponse.json();
                      return resp;
                      // return null; // No featured media
                  }
                  return null; // No featured media
                  });
                  const mediaData = await Promise.all(mediaPromises);
                  const mediaById: Record<number, WordPressMedia> = mediaData.reduce((acc, media) => {
                  if (media) {
                      acc[media.id] = media;
                  }
                  return acc;
                  }, {});
                  setFeaturedMedia(mediaById);
                  }
            setPosts(data);
            } catch (error) {
            console.error('Error fetching post:', error);
            }
        }
        
        fetchPost();
      },[]);
      const [title, setTitle] = useState<string>()
    
      useEffect(() => {
          console.log("pstssssssssss", posts)
          posts.map( (post: WordPressPost) => (post.id === parseInt(blogId) ? setTitle(post.title.rendered) : setPostTitle("Title")) )
      }, [featuredMedia]);
        
      

  return(
    <section className={styles.post}>
        <MainHeading>
          {title}
        </MainHeading>
        <div className="container">
            {
              posts.map((p: WordPressPost, index: number) => {
                const post: WordPressPost = p.id === parseInt(blogId) ? p : {id: 9999999999, title: {rendered: "Title"},featured_media: parseInt("123123123123123")}
                const cleanHTML = post.content && post.content.rendered ? DOMPurify.sanitize(post.content.rendered) : "";
                return(
                    <div key={index}>
                          {
                            featuredMedia[post.featured_media] ?  
                            <div className={styles.img}>
                                <Image
                                  width={2500} height={2500}
                                  src={featuredMedia[post.featured_media].source_url}
                                  alt={`${post.title.rendered}`}>
                                </Image>
                            </div>
                            :
                            <div style={{ display: posts  ? "none": ""}} className={styles.img}>
                              <Image
                                width={2500} height={2500}
                                src={altImg}
                                alt={`${post.title.rendered}`}>
                              </Image>
                            </div>
                          }
                        <div className={styles.body}>
                            <div dangerouslySetInnerHTML={{ __html: cleanHTML}}/>
                        </div>
                    </div>
                )
              })
            }
          </div> 
        <BlogCards lo={locale} />
        <Loader delay={12000}></Loader>
    </section>
  )
}

export default BlogId