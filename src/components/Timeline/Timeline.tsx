import React from 'react'
import styles from "./timeline.module.css"
import TimePeriod from './TimePeriod/TimePeriod'
import educationPeriods, { EducationPeriod } from './education'
import experiencePeriods, { ExperiencePeriod } from './experience'

const Timeline = ({
    lo
}:{
    lo: string
}) => {
  return (
    <section className={styles.timeline}>
        <div className={styles.overlay}></div>
        <div className="container">
            <div className={styles.part}>
                <h2>Education</h2>
                <div className={styles.cards}>
                    {
                        educationPeriods.map((period: EducationPeriod, index) => {
                            return(
                                <TimePeriod
                                    key={period.id}
                                    span={period.date}
                                    h3={period.degree}
                                    p={period.institute}
                                    inverted={index % 2 === 0 ? false : true}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.part}>
                <h2>Research & Work Experience</h2>
                <div className={styles.cards}>
                    {
                        experiencePeriods.map((period: ExperiencePeriod, index) => {
                            return(
                                <TimePeriod
                                    key={period.id}
                                    span={period.date}
                                    h3={period.position}
                                    h4={period.focus}
                                    p={period.institute}
                                    inverted={index % 2 === 0 ? false : true}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline