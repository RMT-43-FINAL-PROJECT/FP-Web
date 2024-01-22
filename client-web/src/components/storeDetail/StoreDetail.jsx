import React from "react";
import "./storeDetail.scss";

const StoreDetail = ({ listStore }) => {
  const getStatus = () => {
    return listStore.status ? "Verified" : "unverified";
  };

  const renderCoordinates = () => {
    if (listStore.location && listStore.location.coordinates) {
      const { coordinates } = listStore.location;
      return (
        <div>
          <h1 className="text-lg text-gray-700 dark:text-black font-bold">
            Latitude: {coordinates[1]}
          </h1>
          <h1 className="text-lg text-gray-700 dark:text-black font-bold">
            Longitude: {coordinates[0]}
          </h1>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="products">
      <div className="">
        <div className="info">
          <div className="container px-6 py-10 mx-auto">
            <div className="mt-8 lg:flex lg:items-center">
              <img
                className="h-65 lg:w-1/2 lg:h-70 rounded-xl mb-6 lg:mb-0"
                src={listStore.photo}
                alt=""
              />

              <div className="lg:w-1/2 lg:ml-6">
                <p className="text-lg text-black uppercase underline font-bold">
                  Store Detail
                </p>

                <a
                  href="#"
                  className="block mt-4 text-3xl font-semibold text-gray-800 hover:underline dark:text-black md:text-4xl"
                >
                  {listStore.name}
                </a>

                <div className="card-description mt-3 rounded-md">
                  <p className="text-lg text-gray-700 dark:text-black md:text-2xl underline">
                    {listStore.ownerName}
                  </p>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                    {getStatus()}
                  </h1>
                </div>
                <br />
                <div>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                    phone: {listStore.mobilePhone}
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                    address: {listStore.address}
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                    Since: {listStore.joinDate}
                  </h1>
                </div>

                <a
                  href="#"
                  className="inline-block mt-2 text-blue-500 underline hover:text-blue-400 text-lg"
                >
                  update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
