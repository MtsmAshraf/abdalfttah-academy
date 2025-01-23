import React, { Fragment } from 'react'
import styles from "./subpages-layout.module.css"
const SubPagesLayout = ({
    children,
}: {
    children: React.ReactNode,
}) => {


  return (
    <Fragment>
        <main className={styles.main}>
            {children}
        </main>
    </Fragment>
  )
}

export default SubPagesLayout