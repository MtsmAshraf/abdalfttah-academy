import React from 'react'
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

const Footer = ({
  lo
}: {
  lo: string,
}) => {
  const t = useTranslations("Footer")
  return (
    <footer className={lo === "ar" ? styles.footer + " " + styles.ar : styles.footer}>
        <div className={styles.overlay}></div>
        {/* <span>
        <Link className={styles.logo} href={"/"}>
            <span>Abdalfattah</span>
            <span>Academy</span>
        </Link>
        </span> */}
        <div className="container">
            <div>
            <h4>{t("Pages.Heading")}</h4>
            <div>
                <Link href={"/"}>{t("Pages.Links.Home")}</Link>
                <Link href={`/courses`}>{t("Pages.Links.Courses")}</Link>
                <Link href={`/publications`}>{t("Pages.Links.Publications")}</Link>
                <Link href={`/about`}>{t("Pages.Links.AboutMe")}</Link>
                <Link href={`/contact`}>{t("Pages.Links.Contact")}</Link>
            </div>
            </div>
            <div>
                <h4>{t("Address.Heading")}</h4>
                <div>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                        </span>
                        <address>
                            {t("Address.Details.Address")},
                            <br />
                            {t("Address.Details.City")},
                            <br />
                            {t("Address.Details.Gov")},
                            <br />
                            {t("Address.Details.Country")}
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
            <h4>{t("SocialMedia.Heading")}</h4>
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
            by: &copy; <a href="https://moatasim-ashraf.netlify.app/" target='_blank'>
                {t("DevFooter.Name")}
            </a>  2025
        </div>
    </footer>
  )
}

export default Footer