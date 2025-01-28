"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./publications-cards.module.css"
import MainHeading from '../MainHeading/MainHeading'
import PublicationsCard from './PublicationsCard/PublicationsCard'
import Image from 'next/image'

import allPublications, { Publication } from './allPublications'
import { useTranslations } from 'next-intl'
import MainLink from '../MainLink/MainLink'
import intro from "../../../public/images/publications.jpg"

const PublicationsCards = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Publications")

    
        const publications: any = useRef(null)
        const [publicationsScrolled, setPublicationsScrolled] = useState(false)
      
          function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            return rect.top + scrollTop;
        }
      
        const scrollPublicationsiSection = () => {
            if(publications.current){
              let headingOffsetTop = getOffsetTopRelativeToWindow(publications.current)
                if(headingOffsetTop <= (window.scrollY + 500)){
                  setPublicationsScrolled(true)
                }
            }
        }
        useEffect(() => {
            let headingOffsetTop = getOffsetTopRelativeToWindow(publications.current)
            if(headingOffsetTop <= (window.scrollY + 500)){
              setPublicationsScrolled(true)
            }
            window.addEventListener("scroll", scrollPublicationsiSection)
        },[publicationsScrolled])
    
        const classNames = [
            lo === "ar" ? styles.ar : null,
            publicationsScrolled ? styles.scrolled : null,
            styles.publications
          ]

  return (
    <section ref={publications} className={classNames.join(" ")}>
        
        <MainHeading>
            {t("Heading")}
        </MainHeading>
        <div className="container">
            <div className={styles.intro}>
                <div className={styles.text}>
                    <h1>
                        PH.D Thesis
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni sapiente beatae dolorum ipsa porro tempora ex repellendus ad, illo debitis reprehenderit exercitationem sed, cumque ducimus doloribus veniam omnis fuga!
                    </p>
                    <MainLink href='https://scholar.google.com/citations?user=vTOa4sIAAAAJ&hl=ar' target="_blank">Google Scholer</MainLink>
                </div>
                <div className={styles.img}>
                    <Image src={intro} alt='Publication section intro image'></Image>
                </div>
            </div>
        </div>
        <div className="container">
            {
                allPublications.map((publication: Publication, index: number) => {
                    return(
                        <PublicationsCard key={publication.id} inverted={index % 2 === 0 ? false : true}>
                            <div>
                                <Image src={publication.src} alt={`${publication.title} Publication Image`}></Image>
                            </div>
                            <div>       
                                <h4>
                                    {publication.title}
                                </h4>
                                <p>
                                    {publication.authors.join(", ")}
                                </p>
                                <span>
                                    {publication.date}
                                </span>
                                <div>
                                    <button>Link</button>
                                    <button>PDF</button>
                                </div>
                            </div>
                        </PublicationsCard>
                    )
                })
            }
        </div>
    </section>
  )
}

export default PublicationsCards