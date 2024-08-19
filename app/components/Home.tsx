import React from "react";
import Hero from "./Hero";
import CardScrollable from "./CardScrollable";
import TeamCard from "./TeamCard";
import OvaDrive from "./OvaDrive";
import { LampDemo } from "./LampEffect";
import Template from "./template";

const App = () => {
  return (
    <React.Fragment>
      <div
        className="relative top-14 overflow-x-hidden"
        style={{ perspective: "1000px" }}>
          <Hero />
          <OvaDrive />


        <div className="h-[100vh]">
          <CardScrollable title="OvaDrive" />
        </div>
        <div className="h-[100vh]">
          <TeamCard title="OvaDrive" />
        </div>
      </div>
      <LampDemo />
    </React.Fragment>
  );
};

export default App;
