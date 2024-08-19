import React from "react";
import NavbarItems from "@/app/components/NavItems";
import CustomButton from "../CustomButton";
import logo from "../../assets/logoPV.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  const router = useRouter();

  const loginPage = (): void => {
    router.push("/login");
  };

  const dummyFunction = (): void => {
    console.log("Dummy function");
  };

  return (
    <div className="flex items-center justify-between px-4 mx-[6%]">
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="logo"
          className="h-[46px] w-[46px] rounded-full"
        />
        <span className="text-white text-xl font-medium font-poppins">
          OvaDrive
        </span>
      </div>

      {/* Documentation Link */}
      <div className="flex-grow text-start ml-20">
        <NavbarItems
          href="/documentation"
          label="Documentation"
          isActive={true}
          onClick={() => loginPage}
        />
      </div>

      <div className="flex space-x-4">
        <CustomButton
          text="Sign Up"
          onClick={dummyFunction}
          className="font-poppins text-sm text-[#A600FC] h-[41px] w-[94px] border-[1px] border-[#A600FC] rounded-3xl"
        />
        <CustomButton
          text="Login"
          onClick={loginPage}
          className="font-poppins text-sm w-[78px] h-[41px] text-white rounded-3xl bg-[#A600FC]"
        />
      </div>
    </div>
  );
};

export default Navbar;
