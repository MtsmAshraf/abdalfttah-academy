import React from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import img from "../../../public/images/course.jpg"
import MainLink from '@/components/MainLink/MainLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from "./blog-cards.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import BlogCard from './BlogCard/BlogCard'

import allBlogPosts, { BlogPost } from './allBlogPosts'



const BlogCards = ({
    lo,
    all
} : {
    lo: string,
    all?: boolean
}) => {
  return (
    <section className={styles.blogCards}>
        <MainHeading>
            {
                all ? "Blog" : "More Posts"
            }
        </MainHeading>
        <div className="container">
            {
                allBlogPosts.map((post: BlogPost, index: number) => {
                    return(
                        all ? 
                        <BlogCard lo={lo}>
                            <Link href={`/blog/${post.id}`}>
                                <h3>{post.title}</h3>
                                <span>
                                    <Image src={post.src} alt={`${post.title} blog image`}></Image>
                                </span>
                            </Link>
                            <div>
                                <p>
                                    {
                                        post.brief
                                    }
                                </p>
                                <MainLink href={`/blog/${post.id}`}>
                                    <span>
                                        Read More
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </MainLink>
                            </div>
                        </BlogCard> : 
                        index < 3 && <BlogCard lo={lo}>
                            <Link href={`/blog/${post.id}`}>
                                <h3>{post.title}</h3>
                                <span>
                                    <Image src={post.src} alt={`${post.title} blog image`}></Image>
                                </span>
                            </Link>
                            <div>
                                <p>
                                    {
                                        post.brief
                                    }
                                </p>
                                <MainLink href={`/blog/${post.id}`}>
                                    <span>
                                        Read More
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </MainLink>
                            </div>
                        </BlogCard> 
                    )
                })
            }
        </div>
        <div className={styles.moreBtn}>
            {
                !all && 
                <MainLink href={"/blog"}>
                    <span>
                        All Posts
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </MainLink>
            }
        </div>
    </section>
  )
}

export default BlogCards