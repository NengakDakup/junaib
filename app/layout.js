import { Inter } from "next/font/google";
import "@/public/assets/libs/tiny-slider/tiny-slider.css";
import "@/public/assets/libs/tobii/css/tobii.min.css";
import "@/public/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "@/public/assets/libs/swiper/css/swiper.min.css";
import "@/public/assets/libs/@iconscout/unicons/css/line.css";
import "@/public/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/public/assets/css/tailwind.min.css";
import "@/public/assets/css/font.css";
import Script from "next/script";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JUNAIB REALTY",
  description: "We will help you build your Wonderful home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="dark:bg-slate-900">{children}</body>
      <Script src="/assets/libs/tiny-slider/min/tiny-slider.js"></Script>
      <Script src="/assets/libs/tobii/js/tobii.min.js"></Script>
      <Script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"></Script>
      <Script src="/assets/libs/swiper/js/swiper.min.js"></Script>
      <Script src="/assets/js/easy_background.js"></Script>
      <Script src="/assets/libs/feather-icons/feather.min.js"></Script>
      <Script src="/assets/js/plugins.init.js"></Script>
      <Script src="/assets/js/app.js"></Script>
      <BackToTop />
    </html>
  );
}
