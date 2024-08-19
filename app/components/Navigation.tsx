"use client";
import NavbarItems from "@/app/components/NavItems";
import CustomButton from "./CustomButton";
import image from "@/public/logoPV.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#team", label: "Our Team" },
    { href: "/#careers", label: "Careers" },
    { href: "/#privacy", label: "Privacy Policy" },
    { href: "/#doc", label: "Documentation" },
  ];

  return (
    <nav className="flex items-center justify-between border-white border-[1px]  rounded-l-full rounded-r-full p-4 w-[70%] h-[8%] mx-auto bg-[#4D4D4D] fixed left-[15%] z-50 mt-6">
      <div className="h-[40px] w-[40px] rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src={image}
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center gap-9">
        {" "}
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <NavbarItems
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={activeItem === item.href}
              onClick={() => handleItemClick(item.href)}
            />
          ))}
        </nav>
      </div>
      <CustomButton
        text={"Get The App"}
        onClick={dummyFunction}
        className={
          "font-poppins text-xs text-white h-[41px] min-w-[115px] rounded-3xl bg-[#A600FC]"
        }
      />
    </nav>
  );
};

const dummyFunction = () => {
  console.log("dummy function");
};

export default Navbar;
