"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    index,
    comingSoon
} : {
    children: React.ReactNode,
    index: number,
    comingSoon?: boolean
}) => {
    const card: any = useRef(null)
    const [cardScrolled, setCardScrolled] = useState(false)
    const scrollCoursesiSection = () => {
        if(card.current){
            if(card.current.offsetTop <= (window.scrollY + 500)){
                setCardScrolled(true)
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollCoursesiSection)
        if(card.current.offsetTop <= (window.scrollY + 500)){
            setTimeout(() => {
                setCardScrolled(true)
                console.log(card, index)
            }, 1200);
        }
    },[])

    const [showComingSoon, setShowComingSoon] = useState(false)

    const classNames = [
        styles.card,
    ]
    const handleComingSoon = () => {
        setShowComingSoon(true)
        console.log("SOON",showComingSoon)
        setTimeout(() => {
            setShowComingSoon(false)
            console.log("SOON",showComingSoon)
        }, 3000);
    }
  return (
    <div show-modal={showComingSoon.toString()} onClick={() => {comingSoon ? handleComingSoon() : null}} ref={card} className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        {children}
    </div>
  )
}

export default Card