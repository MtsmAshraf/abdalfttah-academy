"use client"
import { Link } from '@/i18n/routing'
import React from 'react'
import styles from "./nav.module.css"
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LangSwitch from '../Header/LangSwitch/LangSwitch'
const Nav = ({
    lo,
    shown
  }: {
    lo: string,
    shown: any
  }) => {
    const t = useTranslations("Header.Nav")
    const pathname = usePathname()
    console.log(pathname.split("/")[2])
  return (
    <>
        <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
            <ul className={shown ? styles.shown : ""}>
                <li>
                    <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>{t("0")}</Link>
                </li>
                <li>
                    <Link className={pathname.split("/")[2] === "courses" ? styles.active : ""} href={'/courses'}>{t("1")}</Link>
                </li>
                <li>
                    <Link className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>{t("3")}</Link>
                </li>
                <li>
                    <Link className={pathname === `/${lo}/contact` ? styles.active : ""} href={'/contact'}>{t("4")}</Link>
                </li>
            </ul>
            <div>
                <LangSwitch lo={lo}></LangSwitch>
            </div>
        </nav>
    </>
  )
}

export default Nav