import React from 'react'
import styles from "./stats.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faGraduationCap, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Stats = ({
    lo
} : {
    lo: string
}) => {
  return (
    <div className={lo === "ar" ? styles.stats + " " + styles.ar : styles.stats}>
        <div className={styles.box}>
            <span>
                <FontAwesomeIcon icon={faCirclePlay} />
            </span>
            <h4>
                +350
            </h4>
            <p>
                Videos
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
                Courses
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
                Youtube views
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
                Tiktok views
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
                Students
            </p>
        </div>
    </div>
  )
}

export default Stats