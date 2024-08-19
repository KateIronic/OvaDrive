import Image from "next/image";
import React from "react";

interface TitleSegment {
  text: string;
  highlight?: boolean;
}

interface MainItemsProps {
  title: TitleSegment[];
  description?: string;
  img: string;
  position?: "left" | "right";
}

const MainItems: React.FC<MainItemsProps> = ({
  title,
  description,
  img,
  position,
}) => {
  const isLeftAligned = position === "left";

  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col md:flex-row h-[60vh] min-w-full mt-36 ${
        isLeftAligned ? "md:flex-row-reverse" : ""
      } items-center justify-between mx-auto space-y-6 md:space-y-0`}>
      {/* Image section */}
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src={img}
          alt={title.map((segment) => segment.text).join(" ")}
          className="w-[70%] md:w-[90%] object-cover"
        />
      </div>

      {/* Text section */}
      <div
        className={`text-white md:w-1/2 mx-36 ${
          isLeftAligned ? "md:ml-8" : "md:mr-8"
        }`}>
        <h1 className="text-4xl leading-[70px] w-full font-semibold mt-10">
          {title.map((segment, index) => (
            <span
              key={index}
              className={segment.highlight ? "text-[#A600FC]" : ""}>
              {segment.text}
            </span>
          ))}
        </h1>
        <p className="text-xl font-normal mt-6">{description}</p>
      </div>
    </div>
  );
};

export default MainItems;
