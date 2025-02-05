"use client"
import React, { use } from 'react'
import styles from "./course-id.module.css"
import allCourses, { Content, Course, Person } from '@/components/CoursesCards/allCourses'
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'
import altImg from "../../../../../../public/images/course.jpg"
import userImg from "../../../../../../public/images/user.webp"
import Loader from '@/components/Loader/Loader'
import Testimonials from '@/components/Testimonials/Testimonials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDollar, faHourglass1, faLocationPin, faVideo } from '@fortawesome/free-solid-svg-icons'
import MainLink from '@/components/MainLink/MainLink'
import CoursesCards from '@/components/CoursesCards/CoursesCards'
import dynamic from 'next/dynamic'
import Insructor from '@/components/Insructor/Insructor'
import Enroll from '@/components/Enroll/Enroll'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
const Alumni = dynamic(() => import("@/components/Alumni/Alumni"), { ssr: false });

const CourseId = ({
    params,
  }: Readonly<{
    params:  Promise<{courseId: string, locale: string}>
  }>) => {
    const {locale} = use(params)
    const {courseId} = use(params)
    const course: Course = allCourses.find((ele) => ele.id === courseId) || {
        id: "999",
        title: "",
        category: "",
        price: "",
        src: altImg,
        innerPage: {
          details: {
              noOfVideos: "999",
              duration: "999",
              location: "location",
              price: "9999999"
          },
            heading: "heading",
            description: "description",
            why: ["String"],
            content: [
              {
                button: "string",
                subList: ["String"]
              }
            ],
            who: ["String"],
            people: [
              {
                id: "string",
                name: "string",
                title: "string",
                src: userImg,
                country: "string",
                countryCode: "string"
              }
            ]
        }
    }
  return (
    <section className={styles.course}>
        <MainHeading>
            {course?.title}
        </MainHeading>
        <div className="container">
          <div className={styles.scroll}>
            <div className={styles.description}>
              <h2>{course.innerPage.heading}</h2>
              <p>{course.innerPage.description}</p>
            </div>
            <div>
              <h2>
                Why Take This Course?
                </h2>
                <ul className={styles.more}>
                  {
                    course.innerPage.why.map((li: string, index: number) => {
                      const splittedLi = li.split("*");
                      const text1 = splittedLi[0];
                      const boldText1 = splittedLi[1];
                      const text2 = splittedLi[2];
                      const boldText2 = splittedLi[3] ? splittedLi[3] : null;
                      return(
                        <li key={index}>
                          <p>
                            {text1} <b>{boldText1}</b> {text2} {boldText2 && <b>{boldText2}</b>}
                          </p>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
            <div>
              <h2>Course Content</h2>
              <ol className={styles.content} id='content'>
                {
                  course.innerPage.content.map((part: Content, index: number) => {
                    return(
                      <li key={index}>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                          {part.button} <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <ul>
                          {part.subList.map((li: string, index: number) => {
                            return(
                              <li key={index}>
                                <p>
                                  {li}
                                </p>
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    )
                  })
                }
              </ol>
            </div>
            <div>
              <h2>
                Who Should Enroll?
              </h2>
              <ul className={styles.more}>
                {
                  course.innerPage.who.map((li: string, index: number) => {
                    const splittedLi = li.split("*");
                    const text1 = splittedLi[0];
                    const boldText1 = splittedLi[1];
                    const text2 = splittedLi[2];
                    const boldText2 = splittedLi[3] ? splittedLi[3] : null;
                    return(
                      <li key={index}>
                        <p>
                          {text1} <b>{boldText1}</b> {text2} {boldText2 && <b>{boldText2}</b>}
                        </p>
                      </li>
                    )
                  })
                }
                </ul>
            </div>
            <Insructor></Insructor>
            <Enroll courseLink={course.innerPage.courseLink ? course.innerPage.courseLink : "https://www.youtube.com/@MoAbdalfttah"}></Enroll>
          </div>
          <div className={styles.fixed}>
            <div className={styles.img}>
              <Image loading='lazy' src={course.src} alt={`${course?.title} `}></Image>
            </div>
            <div className={styles.overview}>
              <ul className={styles.basicUl}>
                <li>
                  <span><FontAwesomeIcon icon={faVideo} /></span>
                  <h5>{course.innerPage.details.noOfVideos} Videos</h5>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faLocationPin} /></span>
                  <h5>{course.innerPage.details.location}</h5>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faHourglass1} /></span>
                  <h5>{course.innerPage.details.duration}</h5>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faDollar} /></span>
                  <h5>{course.innerPage.details.price}</h5>
                </li>
              </ul>
            </div>
            <div className={styles.enroll}>
              <a href={course.innerPage.courseLink ? course.innerPage.courseLink : "https://www.youtube.com/@MoAbdalfttah"} target='_blank' >
                <FontAwesomeIcon icon={faYoutube} />
                <span>Start Learning!</span>
              </a>
            </div>
          </div>
        </div>
        <Alumni lo={locale}>
          {
            course.innerPage.people.map((person: Person, index: number) => {
              const flagSrc = `https://flagcdn.com/w2560/${person.countryCode.toLocaleLowerCase()}.png`
              const delay = (Math.random() + 0.2).toFixed(2).toString()
              return(
                <div style={{ transitionDelay: `${delay === "0" ? "0.1" : delay}s` }} key={index}>
                  <div>
                    <div>
                    <Image src={person.src} alt={`Alumni: ${person.name} picture`}  width={2560} height={2560}></Image>
                    </div>
                    <span>
                      <Image src={flagSrc} alt={`${person.country} flag image`}  width={2560} height={2560}></Image>
                    </span>
                  </div>
                  <div>
                    <h4>{person.name}</h4>
                    <span>{person.title} </span>
                  </div>
                </div>
              )
            })
          }
        </Alumni>
        <CoursesCards lo={locale}></CoursesCards>
        <Testimonials lo={locale} parentEl='courses' />
        <Loader></Loader>
      </section>
  )
}

export default CourseId