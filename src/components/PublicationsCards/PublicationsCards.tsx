"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./publications-cards.module.css"
import MainHeading from '../MainHeading/MainHeading'
import PublicationsCard from './PublicationsCard/PublicationsCard'
import Image from 'next/image'
import { Worker, Viewer } from "@react-pdf-viewer/core";
import allPublications, { Publication } from './allPublications'
import { useTranslations } from 'next-intl'
import MainLink from '../MainLink/MainLink'
import intro from "../../../public/images/publications.jpg"
import "@react-pdf-viewer/core/lib/styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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
            setTimeout(() => {
                setPublicationsScrolled(true)
            }, 1200);
        }
        window.addEventListener("scroll", scrollPublicationsiSection)
    },[publicationsScrolled])

    const classNames = [
        lo === "ar" ? styles.ar : null,
        publicationsScrolled ? styles.scrolled : null,
        styles.publications
    ]


    const [showModal, setShowModal] = useState(false);
    const [pdfUrl, setPdfUrl] = useState("")

  return (
    <section ref={publications} className={classNames.join(" ")}>
        <MainHeading>
            {t("Heading")}
        </MainHeading>
        <div className="container">
            <div className={styles.intro}>
                <div className={styles.text}>
                    <h1>
                        Master Thesis
                    </h1>
                    <p>
                    During my master’s thesis, I investigated colorectal cancer heterogeneity using single-cell and spatial transcriptomics, uncovering cancer cell states like LGR5+ cancer stem cells, EMP1+ high-relapse cells, and proliferative states in distinct spatial niches. I also identified critical tumor-microenvironment interactions, including SPP1+ macrophages and FAP+ fibroblasts co-localizing near high-relapse cells, revealing a potential CCL15-CCR1 signaling circuit driving macrophage recruitment and tumor progression.
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
                                <Image src={publication.src} 
                                alt={`${publication.title} Publication Image`} width={1000} height={1000}></Image>
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
                                    <a href={publication.link} target='_blank'>Link</a>
                                    <button
                                        onClick={() => {setShowModal(true); setPdfUrl(publication.pdf)}}
                                        >PDF
                                    </button> 
                                </div>
                            </div>
                        </PublicationsCard>
                        
                    )
                })
            }
                {showModal && (
                    <div className={styles.modal}>
                        <div className={styles.inner}>
                            <button
                                onClick={() => setShowModal(false)}
                            >
                            <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                                <Viewer fileUrl={pdfUrl} />
                            </Worker>
                        </div>
                    </div>
                )}
        </div>
    </section>
  )
}

export default PublicationsCards