import React from "react";
// import Navbar from "../components/navbar";

import Sidebar from "../components/Sidebar";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <div className="flex-1">
          <HomeCard />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default HomePage;
