import React, { useState } from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    index,
} : {
    children: React.ReactNode,
    index: number,
}) => {
  const [delay, setDelay] = useState(1)
  setTimeout(() => {
    setDelay(0)
  }, 2000);
  return (
    <div style={{ transitionDelay: `${index * 0.1 * delay }s` }} className={styles.card}>
        {children}
    </div>
  )
}

export default Card