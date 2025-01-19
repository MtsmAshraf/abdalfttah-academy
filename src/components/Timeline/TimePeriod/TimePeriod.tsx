import React from 'react'
import styles from "./time-period.module.css"

const TimePeriod = ({
    inverted
} : {
    inverted: boolean
}) => {
  return (
    <div className={inverted ? styles.inverted + " " + styles.timePeriod : styles.timePeriod}>
        <div className={styles.date}>
            <span>
                September 2017 - June 2021
            </span>
        </div>
        <div className={styles.details}>
            <h3>Bachelor’s Degree in Biotechnology</h3>
            <span>Ain Shams University, Egypt</span>
        </div>
    </div>
  )
}

export default TimePeriod