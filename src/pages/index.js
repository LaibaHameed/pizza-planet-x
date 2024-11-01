import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";
import HomeMenu from "@/components/home/HomeMenu";
import AboutSection from "@/components/home/AboutSection";
import NewSection from "@/components/home/NewSection";
import ContactUs from "@/components/home/ContactUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>PIZZAPLANET </title>
      </Head>
      <HeroSection />
      <HomeMenu/>
      <AboutSection/>
      <NewSection/>
      <ContactUs/>
      <TestimonialsSection/>
    </>
  );
}
