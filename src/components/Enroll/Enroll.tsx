import React from 'react'
import styles from "./enroll.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faEye, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
const Enroll = ({
    courseLink
} : {
    courseLink?: string
}) => {
  return (
    <div className={styles.enroll}>
        <h2>How to enroll?</h2>
        <p>Enrolling in this course is simple and <span>free!</span> All lessons are available on YouTube, allowing you to learn at your own pace.</p>
        <ul className={styles.steps}>
            <li>
                <span>
                    <FontAwesomeIcon icon={faEye} />
                </span>
                <p>
                    Watch the full course on <span>Youtube</span>
                </p>
            </li>
            <li>
                <span>
                    <FontAwesomeIcon icon={faDollarSign} />
                </span>
                <p>
                    <span>No registration required</span> – just click and start learning!
                </p>
            </li>
            <li>
                <span>
                    <FontAwesomeIcon icon={faYoutube} />
                </span>
                <p>
                    <a href="https://www.youtube.com/@MoAbdalfttah">Subscribe to the channel</a> to stay updated on new lessons!
                </p>
            </li>
            <li>
                <span>
                    <FontAwesomeIcon icon={faRocket} />
                </span>
                <p>
                    Start your journey in molecular biology today!
                </p>
            </li>
        </ul>
        <a href={courseLink} target='_blank'>
            <FontAwesomeIcon icon={faYoutube} />
            <span>
                Start Learning!
            </span>
        </a>
    </div>
  )
}

export default Enroll