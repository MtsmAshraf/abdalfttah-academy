import React from 'react'
import styles from "./publications-card.module.css"
const PublicationsCard = ({
    children,
    inverted
} : {
    children: React.ReactNode,
    inverted?: boolean
}) => {
  return (
    <div className={inverted ? styles.publicationsCard + " " + styles.inverted : styles.publicationsCard}>
        {children}
    </div>
  )
}

export default PublicationsCard