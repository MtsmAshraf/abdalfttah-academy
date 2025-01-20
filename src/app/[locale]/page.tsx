import CoursesCards from "@/components/CoursesCards/CoursesCards";
import Hero from "@/components/Hero/Hero";
import Timeline from "@/components/Timeline/Timeline";
import { use } from "react";

export default function Home({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) {
  const {locale} = use(params)
  return (
    <>
      <Hero lo={locale} />
      <Timeline lo={locale} />
      <CoursesCards lo={locale} />
    </>
  );
}
