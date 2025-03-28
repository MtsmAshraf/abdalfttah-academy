import { Metadata } from 'next';
import React, { use } from 'react'
import allCourses, { Course } from '@/components/CoursesCards/allCourses';


// const course = allCourses.find(course => course.id === )

export const metadata: Metadata = {
    title: "Abdalfttah Academy",
    description: "Abdalfttah Academy official website",
    openGraph: {
        title:"title",
        url: "https://www.abdalfttah-academy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop.cf931c5a.jpeg&w=640&q=75",
    }
  };

const CoursesPagesLayout = ({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params:  Promise<{locale: string}>
}>) => {


  return children
}

export default CoursesPagesLayout