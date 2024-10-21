import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import ".././globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fitness premium ABC",
  description: "Jedini All-inclusive fitness u gradu",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // get i18n translations
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <meta
        name="google-site-verification"
        content="__nXvvBwbYypxgBSZF1aN_BIxB1mBDydOvY5bBiG57g"
      />
      <body
        className={`${rubik.className} bg-neutral-950 text-gray-300 overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
