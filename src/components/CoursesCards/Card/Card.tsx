import React from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    index
} : {
    children: React.ReactNode,
    index: number
}) => {
  return (
    <div style={{ transitionDelay: `${index * 0.1}s` }} className={styles.card}>
        {children}
    </div>
  )
}

export default Card