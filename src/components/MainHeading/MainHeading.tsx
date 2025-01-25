"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./main-heading.module.css"

const MainHeading = ({
    children
} : {
    children: React.ReactNode,
}) => {
  const mainHeading: any = useRef(null)
  const [mainHeadingScrolled, setMainHeadingScrolled] = useState(false)

    function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return rect.top + scrollTop;
  }

  const scrollMainHeadingiSection = () => {
      if(mainHeading.current){
        let headingOffsetTop = getOffsetTopRelativeToWindow(mainHeading.current)
          if(headingOffsetTop <= (window.scrollY + 500)){
            setMainHeadingScrolled(true)
          }
      }
  }
  useEffect(() => {
      let headingOffsetTop = getOffsetTopRelativeToWindow(mainHeading.current)
      if(headingOffsetTop <= (window.scrollY + 500)){
        setMainHeadingScrolled(true)
      }
      window.addEventListener("scroll", scrollMainHeadingiSection)
  },[mainHeadingScrolled])
  return (
    <h2 ref={mainHeading} className={mainHeadingScrolled ? styles.mainHeading + " " + styles.scrolled : styles.mainHeading}>{children}</h2>
  )
}

export default MainHeading