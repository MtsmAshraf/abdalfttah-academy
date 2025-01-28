"use client"
import React, { useState } from 'react'
import { Link } from '@/i18n/routing'
import LangSwitch from './LangSwitch/LangSwitch'
import Nav from '../Nav/Nav'
import styles from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { useSelector } from 'react-redux'

const Header = ({
    lo
  }: {
    lo: string
  }) => {
    const [showNav, setShowNav] = useState(false)

  return (
    <>
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
                <button onClick={() => {setShowNav(!showNav)}}>
                  <span>
                    {showNav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />  }
                  </span>
                </button>
            </div>
        </header>
    </>
  )
}

export default Header