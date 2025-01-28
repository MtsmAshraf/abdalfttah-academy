"use client"
import React, { use } from 'react'
import styles from "./subpages-layout.module.css"
import { Provider, useSelector } from 'react-redux'
import { store } from '@/store/store'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
const SubPagesLayout = ({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params:  Promise<{locale: string}>
}>) => {

    const { locale } = use(params)


  return (
    <Provider store={store}>
        <main className={styles.main}>
            <ThemeToggle lo={locale} />
            {children}
        </main>
    </Provider>
  )
}

export default SubPagesLayout