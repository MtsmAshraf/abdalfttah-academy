"use client"
import React, { use } from 'react'
import styles from "./course-id.module.css"
import allCourses, { Course, Person } from '@/components/CoursesCards/allCourses'
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'
import altImg from "../../../../../../public/images/course.jpg"
import userImg from "../../../../../../public/images/user.webp"
import Loader from '@/components/Loader/Loader'
import Testimonials from '@/components/Testimonials/Testimonials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCalendar, faChevronDown, faClock, faDollar, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import MainLink from '@/components/MainLink/MainLink'
import CoursesCards from '@/components/CoursesCards/CoursesCards'
import dynamic from 'next/dynamic'
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
              <h2>Desciption</h2>
              <p>Welcome to the Introduction to Cancer Biology course! This course is structured to give participants a deep understanding of cancer biology, exploring everything from fundamental principles to advanced research topics. Each week, we will cover different aspects of cancer biology, from cellular mechanisms to therapeutic strategies.</p>
            </div>
            <div>
            <ul className={styles.more}>
                <li>
                  <span>Weekly Lecture:</span>
                  <p>One 3-hour session covering core concepts</p>
                </li>
                <li>
                  <span>Weekly Tutorial:</span>
                  <p>One 1-hour session each week for in-depth discussions on advanced topics</p>
                </li>
                <li>
                  <span>Weekly One-to-One Meetings:</span>
                  <p>One 1-hour session available upon request for personalized guidance or deeper exploration of topics</p>
                </li>
              </ul>
            </div>
            <div>
              <p>
                This course aims to equip you with knowledge and insights that will enable you to understand and interpret cancer biology research effectively. The course materials, assignments, and interactive sessions are designed to ensure a solid grasp of key topics and the latest developments in the field.
              </p>
            </div>
            <div>
              <h2>
                Who Can Join the Course?
              </h2>
              <ul className={styles.more}>
                  <li>
                    <span>Undergraduate and Graduate Students:</span>
                    <p>Ideal for those studying biomedical sciences, biotechnology, or related fields.</p>
                  </li>
                  <li>
                    <span>Early Career Researchers:</span>
                    <p>Suitable for researchers new to cancer biology or those transitioning into this field.</p>
                  </li>
                  <li>
                    <span>Enthusiastic Learners:</span>
                    <p>Anyone with a passion for understanding the complexities of cancer at the cellular level.</p>
                  </li>
                </ul>
                <p>
                  No prior experience in cancer research is required, though a basic understanding of Molecular Biology will be helpful!
                </p>
            </div>
            <div>
              <h2>Course Content</h2>
              <ol className={styles.content} id='content'>
                <li>
                  <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                    Introduction to Cancer <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <ul>
                    <li>
                      <p>
                        What is cancer?
                      </p>
                    </li>
                    <li>
                      <p>
                        Basic cell biology of cancer development
                      </p>
                    </li>
                    <li>
                      <p>
                        Differences between normal cells and cancer cells
                      </p>
                    </li>
                    <li>
                      <p>
                        Introduction to tumor progression
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                    Basics of Cell Biology and the Cell Cycle <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <ul>
                    <li>
                      <p>
                        Introduction to cell structure and function 
                      </p>
                    </li>
                    <li>
                      <p>
                        Overview of the cell cycle and its regulation
                      </p>
                    </li>
                    <li>
                      <p>
                        How uncontrolled cell cycle leads to cancer
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                    Tumor Types and Origins <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <ul>
                    <li>
                      <p>
                        Origin of tumors from normal tissues
                      </p>
                    </li>
                    <li>
                      <p>
                        Classification of tumors: Benign vs. Malignant
                      </p>
                    </li>
                    <li>
                      <p>
                        Histopathology and architecture of tumors
                      </p>
                    </li>
                    <li>
                      <p>
                        Epithelial origin of carcinomas
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                    Hallmarks of Cancer <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <ul>
                    <li>
                      <p>
                        The "Hallmarks of Cancer" framework by Hanahan and Weinberg
                      </p>
                    </li>
                    <li>
                      <p>
                        Key traits of cancer cells: sustaining proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, and more
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.fixed}>
            <div className={styles.img}>
              <Image loading='lazy' src={course.src} alt={`${course?.title} `}></Image>
            </div>
            <div className={styles.overview}>
              <ul className={styles.basicUl}>
                <li>
                  <span><FontAwesomeIcon icon={faCalendar} /></span>
                  <h5>25-01-2025</h5>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faLocationPin} /></span>
                  <h5>Online</h5>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faClock} /></span>
                  <h5>6 Weeks</h5>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faDollar} /></span>
                  <h5>{course.price}</h5>
                </li>
              </ul>
            </div>
            <div className={styles.enroll}>
              <MainLink href='/' >
                <span>Enroll</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </MainLink>
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