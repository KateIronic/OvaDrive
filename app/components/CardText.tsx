interface CardTextProps {
  name: string;
  description: string;
}

const CardText: React.FC<CardTextProps> = ({ name, description }) => {
  return (
    <div className="w-[50%] text-left mx-auto">
      <div className="text-[2.50rem] font-medium leading-[3.75rem] text-white">
        {name}
      </div>
      <div className="text-base font-normal leading-6 text-white mt-6">
        {description}
      </div>
    </div>
  );
};

export default CardText;
