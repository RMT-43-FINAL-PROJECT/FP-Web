import React from "react";

const HomeCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl mt-2 shadow-lg">
      <main className="overflow-auto px-4 py-10">
        {/* Put your content inside of the <main/> tag */}
        <h1 className="text-2xl font-black text-gray-800">Welcome Back!</h1>
        <p className="mb-6 text-gray-600">
          Here's an overview of your monthly transactions.
        </p>
        <div className="flex flex-wrap gap-x-20 gap-y-10 justify-start mb-9">
          <div className="h-96 w-72 rounded-3xl bg-white p-10 shadow-lg">
            <div className="h-80 w-65 rounded-3xl bg-blue-500 p-10"></div>
          </div>
          <div className="h-96 w-72 rounded-3xl bg-white p-10 shadow-lg">
            <div className="h-80 w-65 rounded-3xl bg-blue-500 p-10"></div>
          </div>
          <div className="h-96 w-72 rounded-3xl bg-white p-10 shadow-lg">
            <div className="h-80 w-65 rounded-3xl bg-blue-500 p-10">sasasasaas</div>
          </div>
          <div className="h-86 w-96 rounded-3xl bg-white-500 p-10 shadow-lg">CHART</div>


        <div className="h-72 w-96 rounded-3xl bg-white p-10 shadow-lg mx-auto">
            {/* Content of the centered div */}
          </div>
          <div className="h-72 w-96 rounded-3xl bg-white p-10 shadow-lg mx-auto">
            {/* Content of the centered div */}
          </div>
          <div className="h-72 w-96 rounded-3xl bg-white p-10 shadow-lg mx-auto">
            {/* Content of the centered div */}
          </div>

        </div>
      </main>
    </div>
  );
};

export default HomeCard;
