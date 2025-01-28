"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./hero.module.css" 
// import { Link } from '@/i18n/routing'
import { useTranslations } from 'use-intl'
import Image from 'next/image'
import heroImg from "../../../public/images/hero-img.png"
import Stats from '../Stats/Stats'
import { useSelector } from 'react-redux'

const Hero = ({
    lo
}:{
    lo: string
}) => {

    const theme = useSelector((state: any) => state.theme.theme);


    const t = useTranslations("HomePage.Hero")
    const hero = useRef(null);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1200);
    },[])

    
    const classNames = [
        lo === "ar" ? styles.ar : null,
        loaded ? styles.loaded : null,
        styles.hero
    ]

  return (
    <section id={theme === "light" ? "light" : undefined} ref={hero} className={classNames.join(" ")}>
        <div className={styles.overlay}></div>
        <div className="container">
            <div className={styles.text}>
                <h2>{t("h2")}</h2>
                {/* <p>{t("p")}</p> */}
                <p>
                    {t("p1")}<span>{t("span")}</span>{t("p2")}
                </p>
                {/* <div className={styles.btns}>
                    <MainLink href={"/courses"}>
                        {t("btn1")}
                    </MainLink>
                    <MainLink inverted={true} href={"/contact"}>
                        {t("btn2")}
                    </MainLink>
                </div> */}
                <div className={styles.stats}>
                    <Stats lo={lo} />
                </div>
            </div>
            <div className={styles.img}>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/U5CjOuW0VQI?si=tKMfqqZVmymcEqAE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                <Image src={heroImg} alt='Instructor Mohamed Abdalfattag iamge' loading='lazy'></Image>
            </div>
        </div>
    </section>
  )
}

export default Hero