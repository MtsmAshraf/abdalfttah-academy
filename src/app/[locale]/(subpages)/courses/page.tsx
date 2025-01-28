import CoursesCards from '@/components/CoursesCards/CoursesCards'
import React, { use } from 'react'
import styles from "./course.module.css"
import Loader from '@/components/Loader/Loader'

const Courses = ({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) => {
  const {locale} = use(params)
  return (  
    <section className={styles.courses}>
      <CoursesCards lo={locale} all={true} category={"Advanced Biology"}></CoursesCards>
      <CoursesCards lo={locale} all={true} category={"Data Analysis and Technologies"}></CoursesCards>
      <CoursesCards lo={locale} all={true} category={"Basics"}></CoursesCards>
      <Loader></Loader>
    </section>
  )
}

export default Courses