"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import styles from "./testimonials.module.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import 'swiper/css';
import 'swiper/css/navigation'; // If using navigation module
import 'swiper/css/pagination'; // If using pagination module
import MainHeading from '../MainHeading/MainHeading'

import allTestimonials, { Testimonial } from './allTestimonials'

const Testimonials = ({
        lo,
        parentEl
    }: {
        lo: string,
        parentEl: string
    }) => {
  const t = useTranslations("HomePage")
  const testimonials: any = useRef(null)
      const [testimonialsScrolled, setTestimonialsScrolled] = useState(false)
      const scrollTestimonialsiSection = () => {
          if(testimonials.current){
              if(testimonials.current.offsetTop <= (window.scrollY + 500)){
                setTestimonialsScrolled(true)
              }
          }
      }
      useEffect(() => {
          window.addEventListener("scroll", scrollTestimonialsiSection)
      },[])
  return (
    <section ref={testimonials} className={lo === "ar" ? styles.testimonials + " " + styles.ar : styles.testimonials}>
        <div className={testimonialsScrolled ? styles.overlay + " " + styles.scrolled : styles.overlay }></div>
            <MainHeading>
                Testimonials
            </MainHeading>
            <div className="container">
            <div className={styles.swiper}>
                <Swiper
                    loop
                    autoplay={{
                        delay: 7000,
                    }}
                    slidesPerView= {1}
                    spaceBetween={80}
                    pagination={{
                        clickable: true,
                        el: `.pagination`
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: `.featured-swiper-button-next`,
                        prevEl: `.featured-swiper-button-prev`
                    }}
                    className={`mySwiperProd${parentEl}`}
                    autoHeight={true}
                    >
                        {
                            allTestimonials.map((testimonial: Testimonial) => {
                                return(
                                    <SwiperSlide key={testimonial.id} className={styles.SwiperSlide}>
                                            <span>
                                                <FontAwesomeIcon icon={faQuoteLeft} />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon icon={faQuoteRight} />
                                            </span>
                                            <span>
                                                <Image src={testimonial.flagSrc} alt={"nationality flag"}></Image>
                                            </span>
                                        <div className={styles.img}>
                                            <Image src={testimonial.src} alt={`${testimonial.name} testimonial`}></Image>
                                        </div>
                                        <div className={styles.text}>
                                            <p>
                                                {testimonial.text}
                                            </p>
                                            <div className={styles.clientInfo}>
                                                <h4>{testimonial.name}</h4>
                                                <span>{testimonial.title}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
                <div className={styles.pagination}>
                    <div className={`pagination`}></div>
                </div>
                <div className={styles.btns}>
                    <button className={`featured-swiper-button-prev`}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className={`featured-swiper-button-next`}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials