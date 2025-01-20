"use client"
import React from 'react'
import styles from "./hero.module.css" 
import { Link } from '@/i18n/routing'
import { useTranslations } from 'use-intl'
import MainLink from '../MainLink/MainLink'


const Hero = ({
    lo
}:{
    lo: string
}) => {
    const t = useTranslations("HomePage.Hero")
  return (
    <section className={lo === "ar" ? styles.hero + " " + styles.ar : styles.hero}>
        <div className={styles.overlay}></div>
        <div className="container">
            <div className={styles.text}>
                <h2>{t("h2")}</h2>
                <p>{t("p")}</p>
                <div className={styles.btns}>
                    <MainLink href={"/courses"}>
                        {t("btn1")}
                    </MainLink>
                    <MainLink inverted={true} href={"/contact"}>
                        {t("btn2")}
                    </MainLink>
                </div>
            </div>
            <div className={styles.img}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/U5CjOuW0VQI?si=tKMfqqZVmymcEqAE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                {/* <Image src={heroImg} alt='Instructor Mohamed Abdalfattag iamge'></Image> */}
            </div>
        </div>
    </section>
  )
}

export default Hero