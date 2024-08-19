import Card from "./Card";
import img1 from "@/public/HorizonatalScrollerIMG1.jpeg";
import img2 from "@/public/HorizonatalScrollerIMG2.jpeg";

import img3 from "@/public/HorizonatalScrollerIMG3.jpeg";

import img4 from "@/public/HorizonatalScrollerIMG4.jpeg";

interface CardScrollableProps {
  title: string;
}

const CardScrollable: React.FC<CardScrollableProps> = ({ title }) => {
  return (
    <div id="team" className="ml-[9%]">
      <div className="text-4xl text-white font-medium leading-[48px] mt-36">
        {title}
      </div>
      <div className="flex gap-[20px] overflow-x-visible overflow-y-visible mt-10">
        <Card
          img={img1}
          className="min-h-[420px] w-[424px]"
        />
        <Card
          img={img2}
          className="min-h-[420px] w-[424px]"
        />
        <Card
          img={img3}
          className="min-h-[420px] w-[424px]"
        />
        <Card
          img={img4}
          className="min-h-[420px] w-[424px]"
        />
      </div>
    </div>
  );
};

export default CardScrollable;
