"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./contact.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import SocialUl from '../SocialUl/SocialUl'
import { useTranslations } from 'next-intl'

const Contact = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("Contact")

    const contact: any = useRef(null)
    const [contactScrolled, setContactScrolled] = useState(false)
    const scrollContactiSection = () => {
        if(contact.current){
            if(contact.current.offsetTop <= (window.scrollY + 500)){
                setContactScrolled(true)
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollContactiSection)
    },[])

    
    const classNames = [
        lo === "ar" ? styles.ar : null,
        contactScrolled ? styles.scrolled : null,
        styles.contact
    ] 

  return (
    <section ref={contact} className={classNames.join(" ")}>
        <MainHeading>{t("Heading")}</MainHeading>
        <div className="container">
            <div className={styles.info}>
                <div>
                    <a href='/' target='_blank'>
                        <span>
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <h4>
                            +1224535565676
                        </h4>
                    </a>
                    <a href='/' target='_blank'>
                        <span>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </span>
                        <h4>
                            +1224535565676
                        </h4>
                    </a>
                    <a href="mailto:mohamed.biotech98@gmail.com" target='_blank'>
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <h4>
                            mohamed.biotech98@gmail.com
                        </h4>
                    </a>
                </div>
                <div>
                    <SocialUl />
                </div>
                <div className={styles.address}>
                    <span>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    <address>
                        {t("Address.Details.City")}, {t("Address.Details.Country")}
                    </address>
                </div>
            </div>
            <div className={styles.location}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.47826877935!2d-3.844346296540949!3d40.438098610766225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2seg!4v1738731384484!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact