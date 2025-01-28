import React, { use } from 'react'
import styles from "./course-id.module.css"
import allCourses, { Course } from '@/components/CoursesCards/allCourses'
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'
import altImg from "../../../../../../public/images/course.jpg"
import Loader from '@/components/Loader/Loader'

const CourseId = ({
    params
  }: Readonly<{
    params:  Promise<{courseId: string}>
  }>) => {
    const {courseId} = use(params)
    const course: Course = allCourses.find((ele) => ele.id === courseId) || {
        id: "999",
        title: "",
        category: "",
        price: "",
        src: altImg
    }
  return (
    <section className={styles.course}>
        <MainHeading>
            {course?.title}
        </MainHeading>
        <div className="container">
            <div className={styles.img}>
                <Image loading='lazy' src={course.src} alt={`${course?.title} `}></Image>
            </div>
        </div>
        <Loader></Loader>
      </section>
  )
}

export default CourseId