import React from 'react'
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogleScholar, faLinkedinIn, faOrcid, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
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
                <Link href={`/blog`}>{t("Pages.Links.Blog")}</Link>
                <Link href={`/about`}>{t("Pages.Links.AboutMe")}</Link>
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
                            {t("Address.Details.City")}, {t("Address.Details.Country")}
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
                <a href="https://www.youtube.com/@MoAbdalfttah" title='Youtube' target='_blank'>
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </a>
                <a href="https://www.facebook.com/mohamed.abotreka.547" title='Facebook' target='_blank'>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/mohmed-ahmed/" title='Linlkedin' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
                <a href="https://www.tiktok.com/@mo_abdalfttah?lang=ar" title='Whatsapp' target='_blank'>
                    <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                </a>
                <a href="https://scholar.google.com/citations?user=vTOa4sIAAAAJ&hl=ar" title='Google Scholar' target='_blank'>
                    <FontAwesomeIcon icon={faGoogleScholar}></FontAwesomeIcon>
                </a>
                <a href="https://scholar.google.com/citations?user=vTOa4sIAAAAJ&hl=ar" title='ORCID' target='_blank'>
                    <FontAwesomeIcon icon={faOrcid}></FontAwesomeIcon>
                </a>
                <a href="mailto:mohamed.biotech98@gmail.com" title='Gmail' target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </a>
                <a href="https://x.com/mo_abdalfattah" title='X' target='_blank'>
                    <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
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