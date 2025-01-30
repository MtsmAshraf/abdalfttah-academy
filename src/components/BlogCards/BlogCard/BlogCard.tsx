"use client"
import React, { useEffect } from 'react'
import styles from "./blog-card.module.css"
const BlogCard = ({
    children,
    lo
} : {
    children: React.ReactNode,
    lo: string
}) => {

    
       useEffect(() => {
            const handleOnMouseMove = (e: HTMLElement | any) => {
                const {currentTarget: target} = e;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                target.style.setProperty("--mouse-x",`${x}px`)
                target.style.setProperty("--mouse-y",`${y}px`)
                // target.style.setProperty("--mouse-x-deg",`${-1 * ((1/10) * x - 10)}deg`)
                // target.style.setProperty("--mouse-y-deg",`${1 * ((1/10) * y - 10)}deg`)
            }
            
            
            document.querySelectorAll('.card').forEach((card: HTMLElement | any) => {
                card.onmousemove = (e: HTMLElement | any) => {
                    handleOnMouseMove(e);
                }
            })
       },[])
    

    const classNames = [
        styles.card,
        "card",
        lo === "ar" ? styles.ar : undefined,
    ]
  return (
    <div className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
      <div className={styles.cardBorder}></div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  )
}

export default BlogCard