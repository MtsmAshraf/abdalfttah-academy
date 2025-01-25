import CoursesCards from '@/components/CoursesCards/CoursesCards'
import React, { use } from 'react'
import styles from "./course.module.css"

const Courses = ({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) => {
  const {locale} = use(params)
  return (  
    <section className={styles.courses}>
      <CoursesCards lo={locale} all={true}></CoursesCards>
    </section>
  )
}

export default Courses