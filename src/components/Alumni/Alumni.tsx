"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./alumni.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'

const Alumni = ({
    lo,
    children
} : {
    lo: string,
    children: React.ReactNode
}) => {
        const alumni: any = useRef(null)
        const [alumniScrolled, setAlumniScrolled] = useState(false)
        const scrollCoursesiSection = () => {
            if(alumni.current){
                if(alumni.current.offsetTop <= (window.scrollY + 500)){
                    setAlumniScrolled(true)
                }
            }
        }
        useEffect(() => {
            window.addEventListener("scroll", scrollCoursesiSection)
            if(alumni.current.offsetTop <= (window.scrollY + 500)){
                setTimeout(() => {
                    setAlumniScrolled(true)
                }, 1200);
            }
        },[])

    const t = useTranslations("Alumni")

    const classNames = [
        styles.alumni,
        alumniScrolled ? styles.scrolled : "",
        lo === "ar" ? styles.ar : "",
    ]

  return (
    <section ref={alumni} className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        <MainHeading>{t("Heading")}</MainHeading>
        <div className="container">
            {children}
        </div>
    </section>
  )
}

export default Alumni