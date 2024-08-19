"use client";
import Image from "next/image";
import Navbar from "./components/Navigation";
import Hero from "./components/Hero";
import OvaDrive from "./components/OvaDrive";
import About from "./about/page";
import CardScrollable from "./components/CardScrollable";
import TeamCard from "./components/TeamCard";
import { LampDemo } from "./components/LampEffect";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./components/Button";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main>
      <Hero />
      <OvaDrive />
      <About />
      <div className="h-[80vh]">
        <CardScrollable title="About Us" />
      </div>
      <div className="h-[80vh]">
        <TeamCard title="Our Team" />
      </div>
      <LampDemo />
      <Button />
    </main>
  );
}
