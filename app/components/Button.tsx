// import { PiStarFour } from "react-icons/pi";

// const Button = () => {
//   return (
//     <div className="relative top-0 flex justify-center items-center border-2 w-[167px] h-[57px] rounded-3xl font-medium text-sm bg-white cursor-pointer hover:translate-x-3 hover:translate-y-3">
//       Try Ovadrive
//       <GoArrowUpRight />
//     </div>
//   );
// };

// export default Button;

// components/CustomButton.tsx

// import React from "react";
// import { PiStarFour } from "react-icons/pi";

// const CustomButton: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center">
//       <a
//         href="#"
//         className="relative bottom-48 transition-all duration-400 hover:rotate-[-4deg] hover:scale-110">
//         <div className="relative top-0  justify-center  border-2 w-[167px] h-[57px] rounded-3xl font-medium text-sm cursor-pointer hover:translate-x-3 hover:translate-y-3 bg-white py-2 px-2 border-3 border-black text-black flex items-center overflow-hidden">
//           <span className="font-bold z-10 flex items-center justify-center gap-1">
//             Try Ovadrive <GoArrowUpRight />
//           </span>
//           {/* Reflection shapes */}
//           <div className="absolute inset-0 w-2 h-[120px] bg-black rotate-[30deg] top-0 left-[-180%] m-auto transition-left duration-600 ease-[.2,.5,.2,1.2] hover:left-[120%]"></div>
//           <div className="absolute inset-0 w-2 h-[120px] bg-black rotate-[30deg] top-0 left-[-180%] m-auto transition-left duration-600 ease-[.2,.5,.2,1.2] hover:left-[-70%]"></div>

//           {/* Geometric shapes */}
//           <PiStarFour className="hidden absolute transition-transform duration-500 group-hover:scale-110 group-hover:block w-5 top-[-14px] left-[-16px] rotate-[48deg] scale-[0.1]" />
//           <PiStarFour className="absolute transition-transform duration-500 hover:scale-110 hover:opacity-100 w-10 top-[-4px] right-[-10px] rotate-[-48deg] scale-[0.1]" />
//           <PiStarFour className="text-white relative transition-transform duration-500 hover:scale-110 hover:opacity-100 w-2 top-[-8px] left-[58px] scale-[0.1] hover:translate-y-[-8px]" />
//           <PiStarFour className="absolute transition-transform duration-500 hover:scale-110 hover:opacity-100 w-2 bottom-[-8px] right-[34px] scale-[0.1] hover:translate-x-[-20px] hover:translate-y-[20px]" />
//           <PiStarFour className="absolute transition-transform duration-500 hover:scale-110 hover:opacity-100 w-4 top-[-18px] right-[62px] scale-[0.1] hover:translate-y-[7px] rotate-[-24deg]" />
//           <PiStarFour className="absolute transition-transform duration-500 hover:scale-110 hover:opacity-100 w-8 bottom-[-16px] left-[15px] rotate-[-48deg] scale-[0.1] hover:rotate-[-12deg]" />

//           {/* Gradient shadow */}
//           <div className="absolute inset-0 w-full h-full bg-white py-5 px-12 rounded-full border-3 border-blue-900 z-[-1] transition-transform duration-300 hover:translate-x-[-0.5rem] hover:translate-y-[0.5rem]"></div>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default CustomButton;

// components/CustomButton.tsx

import React from "react";
import img1 from "@/public/star.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const CustomButton: React.FC = () => {
  return (
    <div className="relative bottom-40 flex items-center justify-center">
      <a
        href="#"
        className="relative transition-transform duration-400 hover:rotate-[-4deg] hover:scale-110">
        <div className="relative bg-white py-5 px-8 rounded-full border-3 border-black text-black flex items-center overflow-hidden">
          <span className="font-medium z-10 flex items-center justify-center gap-1">
            Try Ovadrive <GoArrowUpRight />
          </span>

          {/* Reflection shapes */}
          <div className="absolute inset-0 w-2 h-[120px] bg-yellow-100/30 rotate-[30deg] top-0 left-[-180%] m-auto transition-left duration-600 ease-[.2,.5,.2,1.2] hover:left-[120%]"></div>
          <div className="absolute inset-0 w-2 h-[120px] bg-yellow-100/30 rotate-[30deg] top-0 left-[-180%] m-auto transition-left duration-600 ease-[.2,.5,.2,1.2] hover:left-[-70%]"></div>

          {/* Geometric shapes */}
          <Image
            src={img1}
            alt=""
            className="absolute opacity-0 transition-transform duration-500 hover:scale-110 hover:opacity-100 w-5 top-[-14px] left-[-16px] rotate-[48deg] scale-[0.1]"
          />
          <Image
            src={img1}
            alt=""
            className="absolute opacity-0 transition-transform duration-500 hover:scale-110 hover:opacity-100 w-10 top-[-4px] right-[-10px] rotate-[-48deg] scale-[0.1]"
          />
          <Image
            src={img1}
            alt=""
            className="absolute opacity-0 transition-transform duration-500 hover:scale-110 hover:opacity-100 w-2 top-[-8px] left-[58px] scale-[0.1] hover:translate-y-[-8px]"
          />
          <Image
            src={img1}
            alt=""
            className="absolute opacity-0 transition-transform duration-500 hover:scale-110 hover:opacity-100 w-2 bottom-[-8px] right-[34px] scale-[0.1] hover:translate-x-[-20px] hover:translate-y-[20px]"
          />
          <Image
            src={img1}
            alt=""
            className="absolute opacity-0 transition-transform duration-500 hover:scale-110 hover:opacity-100 w-4 top-[-18px] right-[62px] scale-[0.1] hover:translate-y-[7px] rotate-[-24deg]"
          />
          <Image
            src={img1}
            alt=""
            className="absolute opacity-0 transition-transform duration-500 hover:scale-110 hover:opacity-100 w-8 bottom-[-16px] left-[15px] rotate-[-48deg] scale-[0.1] hover:rotate-[-12deg]"
          />

          {/* Gradient shadow */}
          <div className="absolute inset-0 w-full h-full bg-gray-800 py-5 px-12 rounded-full border-3 border-black z-[-1] transition-transform duration-300 hover:translate-x-[-0.5rem] hover:translate-y-[0.5rem]"></div>
        </div>
      </a>
    </div>
  );
};

export default CustomButton;
