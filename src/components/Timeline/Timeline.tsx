import React from 'react'
import styles from "./timeline.module.css"
import TimePeriod from './TimePeriod/TimePeriod'

const Timeline = ({
    lo
}:{
    lo: string
}) => {
  return (
    <section className={styles.timeline}>
        <div className="container">
            <div className={styles.part}>
                <h2>Education</h2>
                <div className={styles.cards}>
                    <TimePeriod />
                    <TimePeriod inverted={true}/>
                    <TimePeriod />
                </div>
            </div>
            <div className={styles.part}>
                <h2>Research & Work Experience</h2>
                <div className={styles.cards}>
                    <TimePeriod />
                    <TimePeriod />
                    <TimePeriod />
                    <TimePeriod />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline