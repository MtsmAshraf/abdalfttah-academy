import CoursesCards from '@/components/CoursesCards/CoursesCards'
import React, { use } from 'react'
import styles from "./course.module.css"
import Loader from '@/components/Loader/Loader'
import Testimonials from '@/components/Testimonials/Testimonials'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: "Abdalfattah Academy",
  description: "Abdalfattah Academy official website",
  openGraph: {
      title:"title",
      url: "https://www.abdalfttah-academy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop-inner.5b927ffb.jpeg&w=1920&q=75",
  }
};
const Courses = ({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) => {
  
  const {locale} = use(params)
  return (  
    <section className={styles.courses}>
      <CoursesCards lo={locale} all={true} category={"Workshop"}></CoursesCards>
      <CoursesCards lo={locale} all={true} category={"Advanced Biology"}></CoursesCards>
      <CoursesCards lo={locale} all={true} category={"Data Analysis and Technologies"}></CoursesCards>
      <CoursesCards lo={locale} all={true} category={"Basics"}></CoursesCards>
      <Testimonials lo={locale} parentEl='courses' />
      <Loader></Loader>
    </section>
  )
}

export default Courses