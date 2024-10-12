import HeroSection from "@/components/home/HeroSection";
import Menu from "@/pages/menu";
import Head from "next/head";
import { baseUrl } from "@/utils/baseUrl";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>PIZZAPLANET </title>
      </Head>
      <HeroSection />
      <Menu data={data} />
    </>
  );
}

export async function getStaticProps() {
  let data = null;
  try {
    const response = await fetch(baseUrl + "api/foodData", { method: "GET" });
    const pizzaData = await response.json();
    data = pizzaData.data || [];
  } catch (error) {
    console.log('Error fetching food data:', error);
  }

  return {
    props: {
      data,
    },
  };
}