import Card from "@/components/home/Card";
import HeroSection from "@/components/home/HeroSection";
import cardData from "../store/CardData.json";

export default function Home() {
  const categories = new Set();
  const fooddata = [];

  const handleData = () => {
    cardData.map((data) => {
      fooddata.push(data);
      categories.add(data.category);
    });
  };

  handleData();

  const categoryArray = [...categories]; // Convert set into array

  return (
    <>
      <HeroSection />
      <div className="flex flex-col justify-center gap-4 p-4">
        {categoryArray.map((category) => (
          <div key={category}>
            <div className="text-2xl mt-10 mb-3 uppercase font-bold text-zinc-950">
              {category}
            </div>
            <hr className="mb-4" />
            {/* Flex container for cards */}
            <div className="flex flex-wrap gap-4 justify-center">
              {fooddata
                .filter((item) => item.category === category)
                .map((data) => (
                  <Card key={data.name} fooddata={data} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
