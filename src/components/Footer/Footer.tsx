import React from 'react'
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faClock, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

const Footer = ({
  lo
}: {
  lo: string,
}) => {
//   const t = useTranslations("Footer")
  return (
    <footer className={lo === "en" ? styles.footer + " " + styles.en : styles.footer}>
        <div className={styles.overlay}></div>
        <span>
        <Link className={styles.logo} href={"/"}>
            <span>Abdalfattah</span>
            <span>Academy</span>
        </Link>
        </span>
        <div className="container">
            <div>
            <h4>Pages</h4>
            <div>
                <Link href={"/"}>Home</Link>
                <Link href={`/courses`}>Courses</Link>
                <Link href={`/publications`}>Publications</Link>
                <Link href={`/about`}>About me</Link>
                <Link href={`/contact`}>Contact</Link>
            </div>
            </div>
            <div>
            <h4>About Me</h4>
            <div>
                <div>
                <span>
                    <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                </span>
                <address>
                    Place,
                    <br />
                    City,
                    <br />
                    Gov,
                    <br />
                    Country
                </address>
                </div>
                <div>
                <span>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </span>
                <div>
                    <div>
                    <a href="tel:12354645789">12354645789</a>
                    <br />
                    <a href="tel:12354645789">12354645789</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div>
            <h4>
                Social Media
            </h4>
            <div className={styles.socials}>
                <a href="/" title='Facebook' target='_blank'>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a href="https://wa.me/+23123123123" title='Whatsapp' target='_blank'>
                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </a>
                <a href="/" title='Linlkedin' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
            </div>
            </div>
        </div>
        <div className={styles.copyright}>
            by &copy; <a href="https://moatasim-ashraf.netlify.app/" target='_blank'>Moatasim</a> 2025
        </div>
    </footer>
  )
}

export default Footer