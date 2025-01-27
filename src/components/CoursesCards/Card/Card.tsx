import React, { useState } from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    index,
} : {
    children: React.ReactNode,
    index: number,
}) => {
  const [done, setDone] = useState(false)
  setTimeout(() => {
    setDone(true)
  }, 2000);
  return (
    <div style={{ transitionDelay: `${ index * 0.1 }s` }} className={done ? styles.card + " " + styles.done : styles.card}>
        {children}
    </div>
  )
}

export default Card