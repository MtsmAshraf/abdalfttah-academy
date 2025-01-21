import CoursesCards from "@/components/CoursesCards/CoursesCards";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timeline from "@/components/Timeline/Timeline";
import { use } from "react";

export default function Home({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) {
  const {locale} = use(params)
  return (
    <main>
      <Hero lo={locale} />
      <Timeline lo={locale} />
      <CoursesCards lo={locale} />
      <Testimonials lo={locale} parentEl={"home"} />
    </main>
  );
}
