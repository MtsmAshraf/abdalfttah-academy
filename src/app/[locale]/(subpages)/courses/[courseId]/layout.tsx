import React, { use } from 'react'
import allCourses, { Course } from '@/components/CoursesCards/allCourses';
import { Metadata } from 'next';


// const course = allCourses.find(course => course.id === )

// export const metadata: Metadata = {

//     title: "Abdalfttah Academy",
//     description: "Abdalfttah Academy official website",
//     openGraph: {
//         title:"title",
//         url: "https://www.abdalfttah-academy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop.cf931c5a.jpeg&w=640&q=75",
//     }
//   };


export const generateMetadata = async ({
    params,
  }: Readonly<{
    params:  Promise<{courseId: string}>
  }>) : Promise<Metadata> => {
    const { courseId } = await params;
    const course = allCourses.find((course) => course.id === courseId)
    return{
          title: `Abdalfttah Academy | ${course?.title}` ,
          description: "Abdalfttah Academy official website",
          openGraph: {
              title: course?.title,
              url: course?.openGraphUrl ? course.openGraphUrl : "https://www.abdalfttah-academy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcourse.d2a5fcc6.webp&w=3840&q=75",
          }
      }
  }


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