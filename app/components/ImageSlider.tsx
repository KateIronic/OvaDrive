"use client";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface ImageSliderProps {
  images: (string | StaticImageData)[];
}

const slideStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
};

const dotStyle: React.CSSProperties = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const currentImage =
    typeof images[currentIndex] === "string"
      ? images[currentIndex]
      : (images[currentIndex] as StaticImageData).src;

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${currentImage})`,
  };

  return (
    <div className="h-full relative">
      <div
        style={slideStylesWidthBackground}
        className="bg-black opacity-80"></div>
      <div className="flex justify-center text-[#808080] relative z-10">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              ...dotStyle,
              color: slideIndex === currentIndex ? "#FFFFFF" : "#808080",
            }}
            onClick={() => goToSlide(slideIndex)}>
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
