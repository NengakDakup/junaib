"use client";
import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Testimonials from "@/components/Testimonials";
import WhatWeAre from "@/components/WhatWeAre";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <WhatWeAre />

      {/* <Info /> */}

      <Features />

      <Testimonials />

      <ContactUs />

      <Footer />
    </>
  );
}
