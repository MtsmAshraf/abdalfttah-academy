import { Link } from '@/i18n/routing'
import React from 'react'
import styles from "./main-link.module.css"

const MainLink = ({
  children,
  href,
  inverted
} : {
  children: React.ReactNode,
  href: string,
  inverted?: boolean
}) => {
  return (
    <Link className={inverted ? styles.mainLink + " " + styles.inverted : styles.mainLink} href={href}>{children}</Link>
  )
}

export default MainLink