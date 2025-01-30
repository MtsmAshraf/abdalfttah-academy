import React from 'react'
import styles from "./blog-card.module.css"
const BlogCard = ({
    children,
    lo
} : {
    children: React.ReactNode,
    lo: string
}) => {
    const classNames = [
        styles.card,
        lo === "ar" ? styles.ar : undefined,
    ]
  return (
    <div className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>{children}</div>
  )
}

export default BlogCard