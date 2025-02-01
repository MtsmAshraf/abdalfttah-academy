import React from 'react'
import styles from "./alumni.module.css"
import MainHeading from '../MainHeading/MainHeading'

const Alumni = ({
    lo,
    children
} : {
    lo: string,
    children: React.ReactNode
}) => {
  return (
    <section className={styles.alumni}>
        <MainHeading>Alumni</MainHeading>
        <div className="container">
            {children}
        </div>
    </section>
  )
}

export default Alumni