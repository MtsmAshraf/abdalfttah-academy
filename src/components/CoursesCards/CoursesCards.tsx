import React from 'react'
import Card from './Card/Card'
import styles from "./courses-cards.module.css"
import MainHeading from '../MainHeading/MainHeading'
import allCourses, { Course } from './allCourses'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import MainLink from '../MainLink/MainLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CoursesCards = ({
    lo,
    all
} : {
    lo: string,
    all?: boolean
}) => {
  return (
    <section className={styles.coursesCards}>
        <MainHeading>Courses</MainHeading>
        <div className={styles.overlay}></div>
        <div className="container">
            {
                allCourses.map((course: Course,index: number) => {
                    return(
                        // index <= 14 &&
                        !all && index <= 2 &&
                        <Card key={course.id}>
                            <Link href={"/"}>
                                <div>
                                    <Image src={course.src} alt={`${course.title} Course`}></Image>
                                </div>
                                <span>{course.category}</span>
                            </Link>
                                <div>
                                    <h4>{course.title}</h4>
                                    <div>
                                        <p>{course.price}</p>
                                        <MainLink inverted href={"/"}>Enroll</MainLink>
                                    </div>
                                </div>
                        </Card>
                        || all &&
                        <Card key={course.id}>
                            <Link href={"/"}>
                                <div>
                                    <Image src={course.src} alt={`${course.title} Course`}></Image>
                                </div>
                                <span>{course.category}</span>
                            </Link>
                                <div>
                                    <h4>{course.title}</h4>
                                    <div>
                                        <p>{course.price}</p>
                                        <MainLink inverted href={"/"}>Enroll</MainLink>
                                    </div>
                                </div>
                        </Card>
                    )
                })
            }
        </div>
        {
            !all && 
            <span>
                <MainLink href={"/courses"}>
                    <span>Show More</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </MainLink>
            </span>
        }
    </section>
  )
}

export default CoursesCards