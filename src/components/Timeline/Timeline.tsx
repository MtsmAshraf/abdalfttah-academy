import React from 'react'
import styles from "./timeline.module.css"
import TimePeriod from './TimePeriod/TimePeriod'
import educationPeriods, { EducationPeriod } from './education'
import experiencePeriods, { ExperiencePeriod } from './experience'
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'

const Timeline = ({
    lo
}:{
    lo: string
}) => {
    const tr = useTranslations("TimeLine")
    const tEdu = useTranslations("TimeLine.Education")
    const tExp = useTranslations("TimeLine.Experience")
    return (
    <section id='timeline' className={lo === "ar" ? styles.timeline + " " + styles.ar : styles.timeline}>
        <div className={styles.overlay}></div>
        <MainHeading>{tr("Education.heading")}</MainHeading>
        <div className="container">
            <div className={styles.part}>
                <div className={styles.cards}>
                    {
                        educationPeriods.map((period: EducationPeriod, index) => {
                            return(
                                <TimePeriod
                                    key={period.id}
                                    span={tEdu(`dates.${index}`)}
                                    h3={tEdu(`details.${index}.h3`)}
                                    p={tEdu(`details.${index}.p`)}
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
        </div>
        <MainHeading>{tr("Experience.heading")}</MainHeading>
        <div className="container">
            <div className={styles.part}>
                    <div className={styles.cards}>
                        {
                            experiencePeriods.map((period: ExperiencePeriod, index) => {
                                return(
                                    <TimePeriod
                                        key={period.id}
                                        span={tExp(`dates.${index}`)}
                                        h3={tExp(`details.${index}.h3`)}
                                        p={tExp(`details.${index}.p`)}
                                        h4={tExp(`details.${index}.h4`)}
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