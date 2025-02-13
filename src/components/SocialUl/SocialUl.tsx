import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogleScholar, faLinkedinIn, faOrcid, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li className={styles.youtube}>
            <a href="https://www.youtube.com/@MoAbdalfttah" title='Youtube' target='_blank'>
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                <span>
                    Youtube
                </span>
            </a>
        </li>
        <li className={styles.facebook}>
            <a href="https://www.facebook.com/mohamed.abotreka.547" title='Facebook' target='_blank'>
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                <span>
                    Facebook
                </span>
            </a>
        </li>
        <li className={styles.linkedin}>
            <a href="https://www.linkedin.com/in/mohmed-ahmed/" title='Linlkedin' target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                <span>
                    Linlkedin
                </span>
            </a>
        </li>
        <li className={styles.tiktok}>
            <a href="https://www.tiktok.com/@mo_abdalfttah?lang=ar" title='Whatsapp' target='_blank'>
                <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                <span>
                    Whatsapp
                </span>
            </a>
        </li>
        <li className={styles.scholar}>
            <a href="https://scholar.google.com/citations?user=vTOa4sIAAAAJ&hl=ar" title='Google Scholar' target='_blank'>
                <FontAwesomeIcon icon={faGoogleScholar}></FontAwesomeIcon>
                <span>
                    Scholar
                </span>
            </a>
        </li>
        <li className={styles.orcid}>
            <a href="https://orcid.org/0000-0002-8294-2979" title='ORCID' target='_blank'>
                <FontAwesomeIcon icon={faOrcid}></FontAwesomeIcon>
                <span>
                    ORCID
                </span>
            </a>
        </li>
        <li className={styles.x}>
            <a href="https://x.com/mo_abdalfattah" title='X' target='_blank'>
                <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
                <span>
                    X
                </span>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl