"use client";
import ImageSlider from "./ImageSlider";
import image from "@/public/imagePV.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const slides = [image, image, image, image];
  return (
    <div
      id="hero"
      className="w-[100%] mt-48 mx-auto h-[75vh] relative">
      <div className="rounded-none z-20 absolute top-0 left-0 h-full min-w-full">
        <div>
          <div className="text-center text-white mt-24">
            <p className="text-xl font-medium text-[#E6B5FF]">
              The Ultimate Ai Assistant
            </p>
            <p className="text-5xl leading-[72px] font-bold relative mt-5">
              Unlock The Power Of Your 2nd Brain
            </p>
          </div>
          <div className="text-center text-white">
            <p className="text-base font-normal w-[50%] relative left-[25%] mt-10">
              Ovadrive is designed to turn your phone into an assistant
              following you everywhere, learning all about your life and helping
              to utilize that.
            </p>
            <p className="text-xl font-semibold mt-3">
              Own your data, own your life, own your future.
            </p>
          </div>
        </div>
        <div className="flex gap-3 absolute bottom-12 right-12">
          <CustomButton
            onClick={dummyFunction}
            text="Android App"
            className="bg-[#A600FC] w-[129px] h-[41px] rounded-3xl text-sm text-white"></CustomButton>
          <CustomButton
            onClick={dummyFunction}
            text="IOS App"
            className="bg-[#A600FC] w-[129px] h-[41px] rounded-3xl text-sm text-white"></CustomButton>
          <CustomButton
            onClick={dummyFunction}
            text="Learn More"
            className=" border-2 w-[129px] h-[41px] rounded-3xl text-sm text-white"></CustomButton>
        </div>
      </div>

      <ImageSlider images={slides} />
    </div>
  );
};

const dummyFunction = () => {
  console.log("dummy function");
};

export default Hero;
