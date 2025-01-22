import React, { Fragment} from 'react'
import styles from "./subpages-layout.module.css"
const SubPagesLayout = ({
    children,
    params: {locale}
}: {
    children: React.ReactNode,
    params: {locale: string}
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