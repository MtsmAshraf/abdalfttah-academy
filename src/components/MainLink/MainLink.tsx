import { Link } from '@/i18n/routing'
import React from 'react'
import styles from "./main-link.module.css"

const MainLink = ({
  children,
  href,
  inverted,
  target
} : {
  children: React.ReactNode,
  href: string,
  inverted?: boolean,
  target?: string
}) => {
  return (
    <Link className={inverted ? styles.mainLink + " " + styles.inverted : styles.mainLink} href={href} target={target}>{children}</Link>
  )
}

export default MainLink