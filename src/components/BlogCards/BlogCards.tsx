"use client"
import React, { use, useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import img from "../../../public/images/course.jpg"
import MainLink from '@/components/MainLink/MainLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from "./blog-cards.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import BlogCard from './BlogCard/BlogCard'
import DOMPurify from 'dompurify';

import allBlogPosts, { BlogPost } from './allBlogPosts'
import { useTranslations } from 'next-intl'

import altImg from "../../../public/images/course.jpg"


const BlogCards = ({
    lo,
    all
} : {
    lo: string,
    all?: boolean
}) => {
    const classNames = [
        styles.blogCards,
        lo === "ar" ? styles.ar : ""
    ]

    const t = useTranslations("Blog")

    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [mediaId, setMediaId] = useState(0)
    const [featuredMedia, setFeaturedMedia] = useState<Record<number, WordPressMedia>>({});


    interface WordPressPost {
        id: number;
        date: string; // ISO 8601 format
        date_gmt: string;
        guid: {
            rendered: string;
        };
        modified: string;
        modified_gmt: string;
        slug: string;
        status: string;
        type: string; // 'post', 'page', etc.
        link: string;
        title: {
            rendered: string;
        };
        content: {
            rendered: string; // The HTML content
            protected: boolean;
        };
        excerpt: {
            rendered: string;
            protected: boolean;
        };
        author: number; // ID of the author
        featured_media: number; // ID of the featured media (image)
        comment_status: string;
        ping_status: string;
        sticky: boolean;
        template: string;
        format: string; // 'standard', 'aside', 'gallery', etc.
        meta: any; // Often an empty object initially, but can hold custom fields
        categories: number[]; // Array of category IDs
        tags: number[]; // Array of tag IDs
    
        // ... potentially more properties depending on your WordPress setup
    }

    interface WordPressMedia {
        id: number;
        source_url: string; // URL of the image
        // ... other media properties (e.g., sizes, alt text)
    }

    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(3)
    
    async function fetchPosts(s: number, e: number) {
    const perPage = e - s + 1; // Number of posts to fetch
    const offset = s - 1; // Offset should be 0-based
    console.log("start", start)
    console.log("end", end)
    console.log("perPage", perPage)
    console.log("offset", offset)
    try {
        const response = await fetch(`https://biotech-informatics.com/wp-json/wp/v2/posts?per_page=${perPage}&offset=${offset}&_fields=id,title,excerpt,featured_media`); // Replace with your WordPress URL
        const data = await response.json();
        setPosts([...posts, ...data]); 
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
            setFeaturedMedia({...featuredMedia, ...mediaById}); 
            setStart(start + 4);
            setEnd(end + 4);
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
    }
    useEffect(() => {
        fetchPosts(start,end);
    }, []);

    useEffect(() => {
        console.log("posts sep", "posts");
    }, [posts]);


    useEffect(() => {
        console.log("featuredMedia sep", featuredMedia);
    }, [featuredMedia]);
    

  return (
    <section className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        <MainHeading>
            {
                all ? t("HeadingAll") : t("Heading")
            }
        </MainHeading>
        <div className="container">
            {
                posts.length > 0 ? 
                posts.map((post: WordPressPost, index: number) => {
                    const cleanHTML = DOMPurify.sanitize(post.excerpt.rendered)
                    return(
                        all ? 
                        <BlogCard key={post.id} lo={lo}>
                            <Link href={`/blog/${post.id}`}>
                                <h3>{post.title.rendered}</h3>
                                <span>
                                    {
                                        featuredMedia[post.featured_media] ? <Image 
                                        src={featuredMedia[post.featured_media].source_url}
                                        alt={`${post.title.rendered}`} width={2500} height={2500}>
                                        </Image> :
                                        <Image 
                                            src={altImg}
                                            alt={`${post.title.rendered}`} width={2500} height={2500}>
                                        </Image>
                                    }
                                </span>
                            </Link>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: cleanHTML}}/>
                                <MainLink href={`/blog/${post.id}`}>
                                    <span>
                                        {t("ReadMore")}
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </MainLink>
                            </div>
                        </BlogCard> : 
                        index < 3 && <BlogCard key={post.id} lo={lo}>
                            <Link href={`/blog/${post.id}`}>
                                <h3>{post.title.rendered}</h3>
                                <span>
                                    <Image 
                                        src={featuredMedia[post.id] ? featuredMedia[post.featured_media].source_url : altImg}
                                        alt={`${post.title.rendered}`}>
                                    </Image>
                                </span>
                            </Link>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: cleanHTML}}/>
                                <MainLink href={`/blog/${post.id}`}>
                                    <span>
                                        {t("ReadMore")}
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </MainLink>
                            </div>
                        </BlogCard> 
                    )
                }) : 
                    <>
                        <BlogCard lo={lo}>
                            <Link href={`/blog/`}>
                                <h3>...</h3>
                                <span>
                                    <Image 
                                        src={altImg}
                                        alt={`altImg`}>
                                    </Image>
                                </span>
                            </Link>
                            <div>
                                <p>...</p>
                                <MainLink href={`/blog/`}>
                                    <span>
                                        ...
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </MainLink>
                            </div>
                        </BlogCard>
                        <BlogCard lo={lo}>
                            <Link href={`/blog/`}>
                                <h3>...</h3>
                                <span>
                                    <Image 
                                        src={altImg}
                                        alt={`altImg`}>
                                    </Image>
                                </span>
                            </Link>
                            <div>
                                <p>...</p>
                                <MainLink href={`/blog/`}>
                                    <span>
                                        ...
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </MainLink>
                            </div>
                        </BlogCard>
                        <BlogCard lo={lo}>
                            <Link href={`/blog/`}>
                                <h3>...</h3>
                                <span>
                                    <Image 
                                        src={altImg}
                                        alt={`altImg`}>
                                    </Image>
                                </span>
                            </Link>
                            <div>
                                <p>...</p>
                                <MainLink href={`/blog/`}>
                                    <span>
                                        ...
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </MainLink>
                            </div>
                        </BlogCard>
                    </>        
                
            }
        </div>
        <div className={styles.loadMore}>
            <button
                onClick={() => {fetchPosts(start,end)}}>
                Load More
            </button>
        </div>
        <div className={styles.moreBtn}>
            {
                !all && 
                <MainLink href={"/blog"}>
                    <span>
                        {t("AllPosts")}
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </MainLink>
            }
        </div>
    </section>
  )
}

export default BlogCards