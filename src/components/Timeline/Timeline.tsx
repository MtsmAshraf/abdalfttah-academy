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
    return (
    <section id='timeline' className={lo === "ar" ? styles.timeline + " " + styles.ar : styles.timeline}>
        <div className={styles.overlay}></div>
        <MainHeading>{tr("Education.heading")}</MainHeading>
        <div className="container">
            <div className={styles.part}>
                <div className={styles.cards}>
                    {
                        educationPeriods.map((period: EducationPeriod, index) => {
                            const t = useTranslations("TimeLine.Education")
                            return(
                                <TimePeriod
                                    key={period.id}
                                    span={t(`dates.${index}`)}
                                    h3={t(`details.${index}.h3`)}
                                    p={t(`details.${index}.p`)}
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
                                const t = useTranslations("TimeLine.Experience")
                                return(
                                    <TimePeriod
                                        key={period.id}
                                        span={t(`dates.${index}`)}
                                        h3={t(`details.${index}.h3`)}
                                        p={t(`details.${index}.p`)}
                                        h4={t(`details.${index}.h4`)}
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