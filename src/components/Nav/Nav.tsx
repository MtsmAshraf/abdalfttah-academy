"use client"
import { Link } from '@/i18n/routing'
import React from 'react'
import styles from "./nav.module.css"
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LangSwitch from '../Header/LangSwitch/LangSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowSideNav } from '@/store/showNavSlice'
const Nav = ({
    lo,
    shown
  }: {
    lo: string,
    shown: any
  }) => {
    const t = useTranslations("Header.Nav")
    const pathname = usePathname()
    const showSideNav = useSelector((state: any) => state.showSideNav.showSideNav);
    const dispatch = useDispatch();
  return (
    <>
        <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
            <ul className={showSideNav ? styles.shown : ""}>
                <li>
                    <Link onClick={() => dispatch(toggleShowSideNav())} className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>{t("0")}</Link>
                </li>
                <li>
                    <Link onClick={() => dispatch(toggleShowSideNav())} className={pathname.split("/")[2] === "courses" ? styles.active : ""} href={'/courses'}>{t("1")}</Link>
                </li>
                {/* <li>
                    <Link onClick={() => dispatch(toggleShowSideNav())} className={pathname === `/${lo}/publications` ? styles.active : ""} href={'/publications'}>{t("2")}</Link>
                </li> */}
                <li>
                    <Link onClick={() => dispatch(toggleShowSideNav())} className={pathname.split("/")[2] === "blog" ? styles.active : ""} href={'/blog'}>{t("3")}</Link>
                </li>
                <li>
                    <Link onClick={() => dispatch(toggleShowSideNav())} className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>{t("4")}</Link>
                </li>
            </ul>
            <div>
                <LangSwitch lo={lo}></LangSwitch>
            </div>
            <button
                onClick={() => dispatch(toggleShowSideNav())}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className={styles.langSwitch}>
                <LangSwitch lo={lo} />
            </div>
        </nav>
    </>
  )
}

export default Nav