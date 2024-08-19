import { StaticImageData } from "next/image";

interface CardProps {
  img: string | StaticImageData;
  className?: string;
  onClick?: () => void;
}

const imgStyle: React.CSSProperties = {
  objectFit: "cover",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Card: React.FC<CardProps> = ({ img, className, onClick }) => {
  const imgSrc = typeof img === "string" ? img : img.src;

  const imgStylesWithBackground = {
    ...imgStyle,
    backgroundImage: `url(${imgSrc})`,
  };

  return (
    <div
      className={`${className} transition-all duration-500 ease-in-out cursor-pointer`}
      style={imgStylesWithBackground}
      onClick={onClick}></div>
  );
};

export default Card;
