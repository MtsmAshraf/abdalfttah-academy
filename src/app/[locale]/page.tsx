import CoursesCards from "@/components/CoursesCards/CoursesCards";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Loader/Loader";
import Publications from "@/components/Publications/Publications";
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
      <Loader></Loader>
      <Hero lo={locale} />
      <Publications lo={locale} />
      <Features />
      <Timeline lo={locale} />
      <CoursesCards lo={locale}/>
      <Testimonials lo={locale} parentEl={"home"} />
    </main>
  );
}
