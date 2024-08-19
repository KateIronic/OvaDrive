import React from "react";

interface MatterProps {
  description: string;
}

const Matter: React.FC<MatterProps> = ({ description }) => {
  return (
    <div>
      {" "}
      <p className="text-xl font-normal text-white mt-12">{description}</p>
    </div>
  );
};

export default Matter;
