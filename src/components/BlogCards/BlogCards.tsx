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

const BlogCards = ({
    lo
} : {
    lo: string
}) => {

    

  return (
    <section className={styles.blogCards}>
        <MainHeading>Blog</MainHeading>
        <div className="container">
            <BlogCard lo={lo}>
                <Link href={"/blog"}>
                <h3>Blog Post Title</h3>
                <span>
                    <Image src={img} alt='blog img'></Image>
                </span>
                </Link>
                <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
                </p>
                <MainLink href={"/blog"}>
                    <span>
                    Read More
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </MainLink>
                </div>
            </BlogCard>
            <BlogCard lo={lo}>
                <Link href={"/blog"}>
                <h3>Blog Post Title</h3>
                <span>
                    <Image src={img} alt='blog img'></Image>
                </span>
                </Link>
                <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
                </p>
                <MainLink href={"/blog"}>
                    <span>
                    Read More
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </MainLink>
                </div>
            </BlogCard>
            <BlogCard lo={lo}>
                <Link href={"/blog"}>
                <h3>Blog Post Title</h3>
                <span>
                    <Image src={img} alt='blog img'></Image>
                </span>
                </Link>
                <div>
                <p>
                    Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
                </p>
                <MainLink href={"/blog"}>
                    <span>
                    Read More
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </MainLink>
                </div>
            </BlogCard>
            <BlogCard lo={lo}>
                <Link href={"/blog"}>
                <h3>Blog Post Title</h3>
                <span>
                    <Image src={img} alt='blog img'></Image>
                </span>
                </Link>
                <div>
                <p>
                    Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
                </p>
                <div>
                    <MainLink href={"/blog"}>
                    <span>
                        Read More
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                    </MainLink>
                </div>
                </div>
            </BlogCard>
        </div>
    </section>
  )
}

export default BlogCards