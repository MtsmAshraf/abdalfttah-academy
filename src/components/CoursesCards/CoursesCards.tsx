"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react'
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
    all,
    category
} : {
    lo: string,
    all?: boolean,
    category?: string
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
            setTimeout(() => {
                setCoursesScrolled(true)
            }, 1200);
        }
    },[])

  return (
    <section ref={coursesCards} className={coursesScrolled ? styles.scrolled + " " + styles.coursesCards : styles.coursesCards}>
        <MainHeading cat={category}>
            {/* {t("Heading")} */}
            {category ? category?.toLowerCase() : t("Heading")}
        </MainHeading>
        <div className={lo === "ar" ? styles.overlay + " " + styles.ar : styles.overlay}></div>
        <div className="container">
            {
                allCourses.map((course: Course,index: number) => {
                    if(category){
                        if(course.category.toLowerCase() === category.toLowerCase()){
                            return(
                                !all && index <= 3 &&
                                    <Card comingSoon={course.enrollType === "coming soon"} index={index} key={course.id}>
                                    <Link style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }} href={`/courses/${course.id}`}>
                                        <div>
                                            <Image src={course.src} alt={`${course.title} Course`}></Image>
                                        </div>
                                        <span>{course.category}</span>
                                        {/* <span style={{backgroundColor: course.category.toLowerCase() === "data analysis and technologies" ? "rgb(0, 94, 0)" : course.category.toLowerCase() === "advanced biology" ? "rgb(177, 0, 0)" : "var(--main-color)"}}>{course.category}</span> */}
                                    </Link>
                                        <div>
                                            <h4>{course.title}</h4>
                                            <div style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }}>
                                                <p>{course.enrollType === "paid" || course.enrollType === "google form" 
                                                ?
                                                course.discount && course.price
                                                ?
                                                <>
                                                    {`${course.discount}% off | `} <s style={{ opacity: 0.7 }}>{course.price}$ USD</s> {`${parseInt(course.price) * (100 - parseInt(course.discount)) * 0.01}$ USD`}
                                                </>
                                                :
                                                `${course.price}$ USD` : course.enrollType}</p>

                                                <MainLink inverted href={`/courses/${course.id}`}>Enroll</MainLink>
                                            </div>
                                        </div>
                                    </Card>
                                
                                || all &&
                                    <Card comingSoon={course.enrollType === "coming soon"} index={index} key={course.id}>
                                    <Link style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }} href={`/courses/${course.id}`}>
                                        <div>
                                            <Image src={course.src} alt={`${course.title} Course`}></Image>
                                        </div>
                                        <span>{course.category}</span>
                                        {/* <span style={{backgroundColor: course.category.toLowerCase() === "data analysis and technologies" ? "rgb(0, 94, 0)" : course.category.toLowerCase() === "advanced biology" ? "rgb(177, 0, 0)" : "var(--main-color)"}}>{course.category}</span> */}
                                    </Link>
                                        <div>
                                            <h4>{course.title}</h4>
                                            <div style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }}>
                                                <p>{course.enrollType === "paid" || course.enrollType === "google form" 
                                                ?
                                                course.discount && course.price
                                                ?
                                                <>
                                                    {`${course.discount}% off | `} <s style={{ opacity: 0.7 }}>{course.price}$ USD</s> {`${parseInt(course.price) * (100 - parseInt(course.discount)) * 0.01}$ USD`}
                                                </>
                                                :
                                                `${course.price}$ USD` : course.enrollType}</p>

                                                <MainLink inverted href={`/courses/${course.id}`}>Enroll</MainLink>
                                            </div>
                                        </div>
                                </Card>
                                
                            )
                        }
                    }else if(!category){
                        return(
                            !all && course.featured &&
                                <Card comingSoon={course.enrollType === "coming soon"} index={index} key={course.id}>
                                <Link style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }} href={`/courses/${course.id}`}>
                                    <div>
                                        <Image src={course.src} alt={`${course.title} Course`}></Image>
                                    </div>
                                    <span>{course.category}</span>
                                    {/* <span style={{backgroundColor: course.category.toLowerCase() === "data analysis and technologies" ? "rgb(0, 94, 0)" : course.category.toLowerCase() === "advanced biology" ? "rgb(177, 0, 0)" : "var(--main-color)"}}>{course.category}</span> */}
                                </Link>
                                    <div>
                                        <h4>{course.title}</h4>
                                        <div style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }}>
                                            <p>{course.enrollType === "paid" || course.enrollType === "google form" 
                                            ?
                                            course.discount && course.price
                                            ?
                                            <>
                                                {`${course.discount}% off | `} <s style={{ opacity: 0.7 }}>{course.price}$ USD</s> {`${parseInt(course.price) * (100 - parseInt(course.discount)) * 0.01}$ USD`}
                                            </>
                                            :
                                            `${course.price}$ USD` : course.enrollType}</p>

                                            <MainLink inverted href={`/courses/${course.id}`}>Enroll</MainLink>
                                        </div>
                                    </div>
                            </Card>
                            
                            || all &&
                                <Card comingSoon={course.enrollType === "coming soon"} index={index} key={course.id}>
                                <Link style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }} href={`/courses/${course.id}`}>
                                    <div>
                                        <Image src={course.src} alt={`${course.title} Course`}></Image>
                                    </div>
                                    <span>{course.category}</span>
                                    {/* <span style={{backgroundColor: course.category.toLowerCase() === "data analysis and technologies" ? "rgb(0, 94, 0)" : course.category.toLowerCase() === "advanced biology" ? "rgb(177, 0, 0)" : "var(--main-color)"}}>{course.category}</span> */}
                                </Link>
                                    <div>
                                        <h4>{course.title}</h4>
                                        <div style={{ pointerEvents: course.enrollType === "coming soon" ? "none" : "unset" }}>
                                            <p>{course.enrollType === "paid" || course.enrollType === "google form" 
                                            ?
                                            course.discount && course.price
                                            ?
                                            <>
                                                {`${course.discount}% off | `} <s style={{ opacity: 0.7 }}>{course.price}$ USD</s> {`${parseInt(course.price) * (100 - parseInt(course.discount)) * 0.01}$ USD`}
                                            </>
                                            :
                                            `${course.price}$ USD` : course.enrollType}</p>

                                            <MainLink inverted href={`/courses/${course.id}`}>Enroll</MainLink>
                                        </div>
                                    </div>
                            </Card>
                            
                        )
                    }
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
        <div className={styles.commingSoon}>
            <div>
                <p>Coming Soon</p>
                <p>Stay Tuned</p>
            </div>
        </div>
    </section>
  )
}

export default CoursesCards