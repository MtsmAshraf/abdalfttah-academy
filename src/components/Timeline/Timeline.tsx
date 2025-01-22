import React from 'react'
import styles from "./timeline.module.css"
import TimePeriod from './TimePeriod/TimePeriod'
import educationPeriods, { EducationPeriod } from './education'
import experiencePeriods, { ExperiencePeriod } from './experience'
import MainHeading from '../MainHeading/MainHeading'

const Timeline = ({
    lo
}:{
    lo: string
}) => {
    let latestEduIndex = educationPeriods.length;
    let latestExpIndex = experiencePeriods.length;
  return (
    <section id='timeline' className={styles.timeline}>
        <div className={styles.overlay}></div>
        <div className="container">
            <div className={styles.part}>
                <MainHeading>Education</MainHeading>
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
                                    index={index}
                                />
                            )
                        })
                    }
                    {/* <TimePeriod
                        span={""}
                        h3={"period.degree"}
                        p={"period.institute"}
                        inverted={true}
                        index={latestEduIndex}
                        hidden={true}
                    /> */}
                </div>
            </div>
            <div className={styles.part}>
                <MainHeading>Research & Work Experience</MainHeading>
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
                                    index={index}
                                />
                            )
                        })
                    }
                    {/* <TimePeriod
                        span={""}
                        h3={"period.degree"}
                        p={"period.institute"}
                        inverted={true}
                        index={latestExpIndex}
                        hidden={true}
                    /> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline