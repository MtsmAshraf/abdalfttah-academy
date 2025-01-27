"use client"
import React from 'react'
import styles from "./hero.module.css" 
// import { Link } from '@/i18n/routing'
import { useTranslations } from 'use-intl'
import MainLink from '../MainLink/MainLink'
import Image from 'next/image'
import heroImg from "../../../public/images/hero-img.png"
import Stats from '../Stats/Stats'

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
                {/* <p>{t("p")}</p> */}
                <p>
                    Hi, I’m <span>Mohmed</span>, a passionate PhD candidate who finds true joy in sharing knowledge and helping others grow. From the very start of my journey, I’ve always believed that education is the key to unlocking potential—not just in myself, but in the countless students I’ve had the privilege to teach.
                </p>
                <p>
                    Over the years, I’ve poured my heart into creating spaces where learning biology and bioinformatics becomes accessible, exciting, and empowering. I’ve taught thousands of students, guided master’s and PhD researchers across the globe, and witnessed the incredible spark of understanding in their eyes. Each of those moments has fueled my dedication to keep teaching and inspiring.
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