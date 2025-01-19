import React from 'react'
import styles from "./time-period.module.css"

const TimePeriod = ({
    inverted,
    span,
    h3,
    h4,
    p
} : {
    inverted: boolean,
    span: string,
    h3: string,
    h4?: string,
    p: string
}) => {
  return (
    <div className={inverted ? styles.inverted + " " + styles.timePeriod : styles.timePeriod}>
        <div className={styles.date}>
            <span>
                {span}
            </span>
        </div>
        <div className={styles.details}>
            <div>
                    
                <h3>{h3}</h3>
                <p>{p}</p>
                {
                    h4 && <h4>{h4}</h4>
                }
            </div>
        </div>
    </div>
  )
}

export default TimePeriod