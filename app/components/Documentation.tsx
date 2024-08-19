import React from "react";
import Navbar from "./documentation/Navbar";
import Sidebar from "./documentation/Sidebar";
import Main from "./documentation/Main";

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
