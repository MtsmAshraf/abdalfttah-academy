"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    index,
} : {
    children: React.ReactNode,
    index: number,
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

      const classNames = [
        styles.card
      ]

  return (
    <div ref={card} className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        {children}
    </div>
  )
}

export default Card