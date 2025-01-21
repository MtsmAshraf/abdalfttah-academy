import type { Metadata } from "next";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "Abdalfattah Academy",
  description: "Abdalfattah Academy official website",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={locale === "ar" ? "ar" : "en"}>
          <Header lo={locale}></Header>
            {children}
          <Footer lo={locale}></Footer>
          </body>
      </NextIntlClientProvider>
    </html>
  );
}
