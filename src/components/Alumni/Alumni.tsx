import React from 'react'
import styles from "./alumni.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'

const Alumni = ({
    lo,
    children
} : {
    lo: string,
    children: React.ReactNode
}) => {

    const t = useTranslations("Alumni")

    const classNames = [
        styles.alumni,
        lo === "ar" ? styles.ar : "",
    ]

  return (
    <section className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        <MainHeading>{t("Heading")}</MainHeading>
        <div className="container">
            {children}
        </div>
    </section>
  )
}

export default Alumni