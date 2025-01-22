import CoursesCards from '@/components/CoursesCards/CoursesCards'
import React, { use } from 'react'

const Courses = ({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) => {
  const {locale} = use(params)
  return (  
    <section>
      <CoursesCards lo={locale} all={true}></CoursesCards>
    </section>
  )
}

export default Courses