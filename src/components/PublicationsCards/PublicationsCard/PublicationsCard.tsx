"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./publications-card.module.css"
const PublicationsCard = ({
    children,
    inverted
} : {
    children: React.ReactNode,
    inverted?: boolean
}) => {
  
    const publicationCard: any = useRef(null)
    const [publicationCardScrolled, setPublicationCardScrolled] = useState(false)
  
      function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
  
    const scrollPublicationCardiSection = () => {
        if(publicationCard.current){
          let headingOffsetTop = getOffsetTopRelativeToWindow(publicationCard.current)
            if(headingOffsetTop <= (window.scrollY + 500)){
              setPublicationCardScrolled(true)
            }
        }
    }
    useEffect(() => {
        let headingOffsetTop = getOffsetTopRelativeToWindow(publicationCard.current)
        if(headingOffsetTop <= (window.scrollY + 500)){
          setPublicationCardScrolled(true)
        }
        window.addEventListener("scroll", scrollPublicationCardiSection)
    },[publicationCardScrolled])

    const classNames = [
      inverted ? styles.inverted : null,
      publicationCardScrolled ? styles.scrolled : null,
      styles.publicationsCard
    ]
    
  return (
    <div ref={publicationCard} className={classNames.join(" ")}>
        {children}
    </div>
  )
}

export default PublicationsCard