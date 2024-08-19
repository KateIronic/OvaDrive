import React from "react";
import Navbar from "@/app/components/documentation/Navbar";
import Sidebar from "@/app/components/documentation/Sidebar";
import Main from "@/app/components/documentation/Main";

const App = () => {
  return (
    <React.Fragment>
      <div className="mt-[2%]">
        <Navbar />
        <div className="flex justify-center items-center">
          <Sidebar />
          <Main />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
