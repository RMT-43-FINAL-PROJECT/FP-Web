import React from 'react'
import "./scheduleDetail.scss";

const ScheduleDetail = ({listSchedule}) => {
    const storePhoto = listSchedule?.storeInformations?.photo;
    const storeName = listSchedule?.storeInformations?.name;
    const storeAddress = listSchedule?.storeInformations?.address;
    const salesName = listSchedule?.userInformations?.name;

    const formattedTime = new Date(listSchedule?.time).toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    });


    const getStatus = () => {
        return listSchedule.status ? "completed" : "uncompleted";
      };

  return (
    <div className="products">
    <div className="">
      <div className="info">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:flex lg:items-center">
            <img
              className="h-65 lg:w-1/2 lg:h-70 rounded-xl mb-6 lg:mb-0"
              src={storePhoto}
              alt=""
            />

            <div className="lg:w-1/2 lg:ml-6">
              <p className="text-lg text-black uppercase underline font-bold">
              {storeName}
              </p>

              <a
                href="#"
                className="block mt-4 text-3xl font-semibold text-gray-800 hover:underline dark:text-black md:text-4xl"
              >
                {storeAddress}
              </a>

              <div className="card-description mt-3 rounded-md">
                <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                  Status : {getStatus()}
                </h1>
              </div>
              <br />
              <div>
                <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                  sales : {salesName}
                </h1>
                <p className="text-lg text-gray-700 dark:text-black md:text-2xl underline">
                  {formattedTime}
                </p>
              </div>
              <div>
                <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                  {/* address: {listStore.address} */}
                </h1>
              </div>
              <div>
                <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                  {/* Since: {listStore.joinDate} */}
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
  )
}

export default ScheduleDetail