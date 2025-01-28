"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./stats.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faGraduationCap, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useTranslations } from 'next-intl'

const Stats = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("Stats")
    
    const stats = useRef(null);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1000);
    },[])
    
    const classNames = [
        lo === "ar" ? styles.ar : null,
        loaded ? styles.loaded : null,
        styles.stats
    ]

  return (
    <div ref={stats} className={classNames.join(" ")}>
        <div className={styles.box}>
            <span>
                <FontAwesomeIcon icon={faCirclePlay} />
            </span>
            <h4>
                +350
            </h4>
            <p>
                {t("Videos")}
            </p>
        </div>
        <div className={styles.box}>
            <span>
                <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            <h4>
                +10
            </h4>
            <p>
                {t("Courses")}
            </p>
        </div>
        <div className={styles.box}>
            <span>
                <FontAwesomeIcon icon={faYoutube} />
            </span>
            <h4>
                +1M
            </h4>
            <p>
                {t("YoutubeViews")}
            </p>
        </div>
        <div className={styles.box}>
            <span>
                <FontAwesomeIcon icon={faTiktok} />
            </span>
            <h4>
                +20M
            </h4>
            <p>
                {t("TiktokViews")}
            </p>
        </div>
        <div className={styles.box}>
            <span>
                <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <h4>
                +40K
            </h4>
            <p>
                {t("Students")}
            </p>
        </div>
    </div>
  )
}

export default Stats