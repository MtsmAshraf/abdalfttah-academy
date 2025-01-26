"use client"
import React, { useEffect, useRef, useState } from 'react'
import Card from './Card/Card'
import styles from "./courses-cards.module.css"
import MainHeading from '../MainHeading/MainHeading'
import allCourses, { Course } from './allCourses'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import MainLink from '../MainLink/MainLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'

const CoursesCards = ({
    lo,
    all
} : {
    lo: string,
    all?: boolean
}) => {

    const t = useTranslations("Courses")

    const coursesCards: any = useRef(null)
    const [coursesScrolled, setCoursesScrolled] = useState(false)
    const scrollCoursesiSection = () => {
        if(coursesCards.current){
            if(coursesCards.current.offsetTop <= (window.scrollY + 500)){
                setCoursesScrolled(true)
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollCoursesiSection)
        if(coursesCards.current.offsetTop <= (window.scrollY + 500)){
            setCoursesScrolled(true)
        }
    },[])
  return (
    <section ref={coursesCards} className={coursesScrolled ? styles.scrolled + " " + styles.coursesCards : styles.coursesCards}>
        <MainHeading>
            {t("Heading")}
        </MainHeading>
        <div className={lo === "ar" ? styles.overlay + " " + styles.ar : styles.overlay}></div>
        <div className="container">
            {
                allCourses.map((course: Course,index: number) => {
                    return(
                        // index <= 14 &&
                        !all && index <= 3 &&
                        <Card index={index} key={course.id}>
                            <Link href={`/courses/${course.id}`}>
                                <div>
                                    <Image src={course.src} alt={`${course.title} Course`}></Image>
                                </div>
                                <span>{course.category}</span>
                            </Link>
                                <div>
                                    <h4>{course.title}</h4>
                                    <div>
                                        <p>{course.price}</p>
                                        <MainLink inverted href={`/courses/${course.id}`}>Enroll</MainLink>
                                    </div>
                                </div>
                        </Card>
                        || all &&
                        <Card index={index} key={course.id}>
                            <Link href={`/courses/${course.id}`}>
                                <div>
                                    <Image src={course.src} alt={`${course.title} Course`}></Image>
                                </div>
                                <span>{course.category}</span>
                            </Link>
                                <div>
                                    <h4>{course.title}</h4>
                                    <div>
                                        <p>{course.price}</p>
                                        <MainLink inverted href={`/courses/${course.id}`}>Enroll</MainLink>
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