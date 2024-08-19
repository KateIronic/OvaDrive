"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

interface NavBarProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavbarItems: React.FC<NavBarProps> = ({
  href,
  label,
  isActive,
  onClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      onClick();
      animatePageOut(href, router);
    }
  };

  return (
    <div
      className={`text-white font-poppins font-normal text-sm cursor-pointer flex items-center justify-center
        ${isActive ? "h-[41px] min-w-[120px] rounded-3xl bg-[#A600FC]" : ""}
      `}
      onClick={handleClick}>
      {label}
    </div>
  );
};

export default NavbarItems;
