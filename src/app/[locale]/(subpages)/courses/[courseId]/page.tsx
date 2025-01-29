import React, { use } from 'react'
import styles from "./course-id.module.css"
import allCourses, { Course } from '@/components/CoursesCards/allCourses'
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'
import altImg from "../../../../../../public/images/course.jpg"
import Loader from '@/components/Loader/Loader'
import Testimonials from '@/components/Testimonials/Testimonials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faChevronDown, faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'

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
        src: altImg
    }
  return (
    <section className={styles.course}>
        <MainHeading>
            {course?.title}
        </MainHeading>
        <div className="container">
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
              </ul>
            </div>
          </div>
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
              This course aims to equip you with knowledge and insights that will enable you to understand and interpret cancer biology research effectively. The course materials, assignments, and interactive sessions are designed to ensure a solid grasp of key topics and the latest developments in the field.
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
              <ol className={styles.content}>
                <li>
                  <h3>
                    <span>Introduction to Cancer </span><FontAwesomeIcon icon={faChevronDown} />
                  </h3>
                  <ul>
                    <li>What is cancer?</li>
                    <li>Basic cell biology of cancer development</li>
                    <li>Differences between normal cells and cancer cells</li>
                    <li>Introduction to tumor progression</li>
                  </ul>
                </li>
                <li>
                  <h3>
                    <span>Basics of Cell Biology and the Cell Cycle </span><FontAwesomeIcon icon={faChevronDown} />
                  </h3>
                  <ul>
                    <li>Introduction to cell structure and function </li>
                    <li>Overview of the cell cycle and its regulation</li>
                    <li>How uncontrolled cell cycle leads to cancer</li>
                  </ul>
                </li>
                <li>
                  <h3>
                    <span>Tumor Types and Origins </span><FontAwesomeIcon icon={faChevronDown} />
                  </h3>
                  <ul>
                    <li>Origin of tumors from normal tissues</li>
                    <li>Classification of tumors: Benign vs. Malignant</li>
                    <li>Histopathology and architecture of tumors</li>
                    <li>Epithelial origin of carcinomas</li>
                  </ul>
                </li>
                <li>
                  <h3>
                    <span>Hallmarks of Cancer </span><FontAwesomeIcon icon={faChevronDown} />
                  </h3>
                  <ul>
                    <li>The "Hallmarks of Cancer" framework by Hanahan and Weinberg</li>
                    <li>Key traits of cancer cells: sustaining proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, and more</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Testimonials lo={locale} parentEl='courses' />
        <Loader></Loader>
      </section>
  )
}

export default CourseId