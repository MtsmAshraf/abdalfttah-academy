import Hero from "@/components/Hero/Hero";
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
    </>
  );
}
