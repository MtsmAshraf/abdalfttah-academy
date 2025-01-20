import React from 'react'
import styles from "./main-heading.module.css"

const MainHeading = ({
    children
} : {
    children: React.ReactNode,
}) => {
  return (
    <h2 className={styles.mainHeading}>{children}</h2>
  )
}

export default MainHeading