import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";
import HomeMenu from "@/components/home/HomeMenu";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>PIZZAPLANET </title>
      </Head>
      <HeroSection />
      <HomeMenu/>
    </>
  );
}
