"use client"
import BlogCards from "@/components/BlogCards/BlogCards";
import Contact from "@/components/Contact/Contact";
import CoursesCards from "@/components/CoursesCards/CoursesCards";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Loader/Loader";
import Publications from "@/components/PublicationsCards/PublicationsCards";
import Testimonials from "@/components/Testimonials/Testimonials";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Timeline from "@/components/Timeline/Timeline";
import { store } from "@/store/store";
import { use, useEffect } from "react";
import { Provider } from "react-redux";

export default function Home({
  params
}: Readonly<{
  params:  Promise<{locale: string}>
}>) {
  const {locale} = use(params)

  return (
      <Provider store={store}>
        <main>
            <Loader></Loader>
            <ThemeToggle lo={locale} />
            <Hero lo={locale} />
            <CoursesCards lo={locale} />
            <Features lo={locale} />
            <Timeline lo={locale} />
            <Publications lo={locale} />
            {/* <BlogCards lo={locale} /> */}
            <Testimonials lo={locale} parentEl={"home"} />
        </main>
      </Provider>
  );
}
