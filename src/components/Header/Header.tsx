"use client"
import React, { useState } from 'react'
import { Link } from '@/i18n/routing'
import LangSwitch from './LangSwitch/LangSwitch'
import Nav from '../Nav/Nav'
import styles from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from '@/store/store'
import OpenSideNav from './openSideNav/openSideNav'

const Header = ({
    lo
  }: {
    lo: string
  }) => {
    const [showNav, setShowNav] = useState(false)

  return (
    <Provider store={store}>
        <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
            <div className="container">
                <Link className={styles.logo} href={"/"}>
                    <span>Abdalfttah</span>
                    <span>Academy</span>
                </Link>
                <Nav shown={showNav} lo={lo}></Nav>
                <div className={styles.langSwitch}>
                  <LangSwitch lo={lo}></LangSwitch>
                </div>
                <OpenSideNav />
            </div>
        </header>
    </Provider>
  )
}

export default Header