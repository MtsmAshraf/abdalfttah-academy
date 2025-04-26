"use client"
import React, { Fragment, use, useEffect, useRef, useState } from 'react'
import styles from "./course-id.module.css"
import allCourses, { Content, ContentList, Course, GeneralContent, OptionalDiv, OptionalDivContent, Person, WhoNote } from '@/components/CoursesCards/allCourses'
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'
import altImg from "../../../../../../public/images/course.webp"
import userImg from "../../../../../../public/images/user.webp"
import Loader from '@/components/Loader/Loader'
import Testimonials from '@/components/Testimonials/Testimonials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faClock, faDollar, faHourglass1, faLocationPin, faVideo } from '@fortawesome/free-solid-svg-icons'
import CoursesCards from '@/components/CoursesCards/CoursesCards'
import dynamic from 'next/dynamic'
import Insructor from '@/components/Insructor/Insructor'
import Enroll from '@/components/Enroll/Enroll'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import BoldText from '@/components/BoldText/BoldText'
import { notFound } from 'next/navigation'
const Alumni = dynamic(() => import("@/components/Alumni/Alumni"), { ssr: false });


const CourseId = ({
    params,
  }: Readonly<{
    params:  Promise<{courseId: string, locale: string}>
  }>) => {


  const crs: any = useRef(null)
  const [crsScrolled, setCrsScrolled] = useState(false)
    
  function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return rect.top + scrollTop;
  }
  
  const scrollCrsiSection = () => {
  if(crs.current){
      let headingOffsetTop = getOffsetTopRelativeToWindow(crs.current)
      if(headingOffsetTop <= (window.scrollY + 500)){
          setCrsScrolled(true)
      }
      }
  }
  useEffect(() => {
      let headingOffsetTop = getOffsetTopRelativeToWindow(crs.current)
      if(headingOffsetTop <= (window.scrollY + 500)){
          setTimeout(() => {
              setCrsScrolled(true)
          }, 1800);
      }
      // window.addEventListener("scroll", scrollCrsiSection)
  },[crsScrolled])

    const {locale} = use(params)
    const {courseId} = use(params)
    const course: Course = allCourses.find((ele) => ele.id === courseId) || {
        id: "999",
        enrollType: "",
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

    const classNames = [
      styles.course,
      crsScrolled ? styles.loaded : ''
    ]

    if(parseInt(courseId) >= allCourses.length){
      return notFound();
    }

  return (
    <section ref={crs} className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        <MainHeading>
            {course?.title}
        </MainHeading>
        <div className="container">
          <div className={styles.scroll}>
            <div className={styles.description}>
              {
                locale === "ar" && course.innerPage.descriptionAr? 
                <>
                  <h2 className={styles.welcomeAr}>مرحبًا بك في دورة {course.title}!</h2>
                  <BoldText text={course.innerPage.descriptionAr || course.innerPage.description } />
                </>
                : 
                <>
                  {
                    course.enrollType === "google form" ? 
                    <h2>Welcome to the {course.title}</h2> : 
                    <h2>Welcome to {course.title} Course!</h2>
                  }
                  <BoldText text={course.innerPage.description} />
                </>
              }
              
            </div>
            {
              course.innerPage.divs ? course.innerPage.divs.map((div: OptionalDiv, ind: number) => {
                return(
                  <div key={ind}>
                    {
                      locale === "ar" && div.contentAr ?  
                      <>
                        <h2>{div.h2Ar}</h2>
                        {
                          div.contentAr.map((part: OptionalDivContent | string, index: number) => {
                            return(
                              <div key={index}>{
                                typeof(part) === "string" ? 
                                <ul>
                                  <li><BoldText text={`- ${part}`} /></li>
                                </ul> 
                                :
                                <>
                                  <h3><BoldText text={`${part.heading}`} /></h3>
                                  <ul>{part.paragraphs.map((p: string, i: number) => {
                                    return(
                                      <li key={i}><BoldText text={`- ${p}`} /></li>
                                    )
                                  })}
                                  </ul>
                                </>
                              }</div>
                            )
                          })
                        }
                      </>
                      : 
                      <>
                        <h2>{div.h2}</h2>
                        {
                          div.content.map((part: OptionalDivContent | string, index: number) => {
                            return(
                              <div key={index}>{
                                typeof(part) === "string" ? 
                                <ul>
                                  <li><BoldText text={`- ${part}`} /></li>
                                </ul> 
                                :
                                <>
                                  <h3><BoldText text={`${part.heading}`} /></h3>
                                  <ul>{part.paragraphs.map((p: string, i: number) => {
                                    return(
                                      <li key={i}><BoldText text={`- ${p}`} /></li>
                                    )
                                  })}
                                  </ul>
                                </>
                              }</div>
                            )
                          })
                        }
                      </>
                    }
                  </div>
                )
              }) : null
            }
            {/* <div>
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
            </div> */}
            {
              course.innerPage.content ? 
              <div>
                <h2>Course Content</h2>
                {Object.keys(course.innerPage.content[0])[0] === "heading" ?  
                  course.innerPage.content.map((part: any, index) => {
                    return(
                      <Fragment key={index}>
                      <h2><BoldText text={part.heading} /> </h2>
                      <div className={styles.partDetails}>
                        <span>{part.vids} videos</span>
                        <span>{part.duration}</span>
                        <span><a href={part.partLink} target='_blank'><FontAwesomeIcon icon={faYoutube} /> Watch</a></span></div>
                      <ol className={styles.content} id='content'>
                        {
                          part.contentPieces.map((piece: GeneralContent | Content | any, index: number) => {
                              return(
                                <li key={index}>
                                  <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                                  <BoldText text={piece.button} /> {piece.subList && <FontAwesomeIcon icon={faChevronDown} />}
                                  </button>
                                  {
                                    piece.subList &&
                                    <ul>
                                      {piece.subList.map((li: string | ContentList, index: number) => {
                                        return(
                                          <li key={index}>
                                              {typeof(li) === "object" ? 
                                                <>
                                                  <BoldText text={li.heading} />  
                                                  <ul>
                                                    {li.list.map((item: string, index) => {
                                                      return(
                                                        <li key={index}>
                                                        <BoldText text={item} />
                                                        {/* {item} */}
                                                        </li>
                                                      )
                                                    })}
                                                  </ul>
                                                </>
                                                : 
                                                <BoldText text={li} />
                                                }
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  }
                                </li>
                              )
                          })
                        }
                      </ol>
                      </Fragment>
                      

                    )
                  })
                : 
                <ol className={styles.content} id='content'>
                  {
                    course.innerPage.content?.map((part: GeneralContent | Content | any, index: number) => {
                        return(
                          <li key={index}>
                            <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <BoldText text={part.button} /> <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                            <ul>
                              {part.subList.map((li: string | ContentList, index: number) => {
                                return(
                                  <li key={index}>
                                      {typeof(li) === "object" ? 
                                        <>
                                          <BoldText text={li.heading} />  
                                          <ul>
                                            {li.list.map((item: string, index) => {
                                              return(
                                                <li key={index}>
                                                <BoldText text={item} />
                                                {/* {item} */}
                                                </li>
                                              )
                                            })}
                                          </ul>
                                        </>
                                        : 
                                        <BoldText text={li} />
                                        }
                                  </li>
                                )
                              })}
                            </ul>
                          </li>
                        )
                    })
                  }
                </ol>
                }
              </div>
              : null
            }
            <div>
              {
                locale === "ar"  && course.innerPage.whoAr ? 
                <h2>
                  من يمكنه طلب هذه الدورات؟
                </h2> 
                : 
                <h2>
                  Who Should Enroll?
                </h2>
              }
              <ul className={styles.more}>
                {
                  locale === "ar" && course.innerPage.whoAr ? 
                    course.innerPage.whoAr.map((li: string | WhoNote, index: number) => {
                      if(typeof(li) === "string"){
                        return(
                          <li key={index}>
                            <BoldText text={`- ${li}`} />
                          </li>
                        )
                      }else if(typeof(li) === "object"){
                        return(
                          <li className={styles.prohibited} key={index}>
                            <BoldText text={`${li.notNote ? li.notNote : li.note}`} />
                          </li>
                        )
                      }
                    })
                  :
                    course.innerPage.who.map((li: string | WhoNote, index: number) => {
                      if(typeof(li) === "string"){
                        return(
                          <li key={index}>
                            <BoldText text={`- ${li}`} />
                          </li>
                        )
                      }else if(typeof(li) === "object"){
                        return(
                          <li className={li.notNote ? styles.prohibited : ""} key={index}>
                            <BoldText text={`${li.notNote ? li.notNote : li.note}`} />
                          </li>
                        )
                      }
                    })
                }
                </ul>
            </div>
            <Insructor lo={locale} showAr={course.innerPage.whoAr ? true : false}></Insructor>
            <Enroll lo={locale} showAr={course.innerPage.whoAr ? true : false} courseName={course.title} enrollType={course.enrollType} courseLink={course.innerPage.courseLink ? course.innerPage.courseLink : "https://www.youtube.com/@MoAbdalfttah"}></Enroll>
          </div>
          <div className={styles.fixed}>
            <div className={styles.img}>
              <Image loading='lazy' src={course.innerSrc ? course.innerSrc : course.src} alt={`${course?.title} `}></Image>
            </div>
            {
              (course.enrollType === "free" || course.enrollType === "paid" || course.enrollType === "google form") &&  <div className={styles.overview}>
                <ul className={styles.basicUl}>
                  <li>
                    {
                      course.innerPage.details.noOfVideos ? 
                      <>
                        <span><FontAwesomeIcon icon={faVideo} /></span>
                        <h5>{course.innerPage.details.noOfVideos} Videos 
                          {
                            course.innerPage.details.parts && <>
                              {/* <br /> */}
                              &nbsp; / {course.innerPage.details.parts} parts
                            </>
                          }
                        </h5>
                      </>
                      :
                      course.innerPage.details.when ? 
                      <>
                        <span><FontAwesomeIcon icon={faClock} /></span>
                        <h5>{course.innerPage.details.when}</h5>
                      </> : null
                    }
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
                    <h5>{
                      course.innerPage.details.price
                      ?
                      course.innerPage.details.discount && course.innerPage.details.price
                      ?
                      <>
                          {`${course.innerPage.details.discount}% off`} <br /> <s style={{ opacity: 0.7 }}>{course.innerPage.details.price}$ EGP</s> <br />{`${parseInt(course.innerPage.details.price) * (100 - parseInt(course.innerPage.details.discount)) * 0.01}$ EGP`}
                      </>
                      // `${parseInt(course.innerPage.details.price) * (100 - parseInt(course.innerPage.details.discount)) * 0.01 } EGP` 
                      :
                      `${course.innerPage.details.price} EGP` 
                      :
                      "Free"}
                      </h5>
                  </li>
                </ul>
              </div>
            }
            <div className={styles.enroll}>
                {
                  course.enrollType === "free" ?  
                  <a className={styles.youtube} href={course.innerPage.courseLink ? course.innerPage.courseLink : "https://www.youtube.com/@MoAbdalfttah"} target='_blank' >
                    <FontAwesomeIcon icon={faYoutube} />
                    <span>Start Learning!</span>
                  </a> :
                  course.enrollType === "upon request" ? 
                  <a href="#enroll">{
                    locale === "ar" && course.innerPage.whoAr ? "اطلب الدورة" : "Request Course" 
                  }</a> : <a href="#enroll">Enroll</a>
                }
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