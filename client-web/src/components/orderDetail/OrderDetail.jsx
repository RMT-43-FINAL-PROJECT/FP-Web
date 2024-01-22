import React from "react";

const OrderDetail = ({ listOrders }) => {
  const storeName = listOrders?.store?.name;
  // const storeAddress = listSchedule?.storeInformations?.address;
  const salesName = listOrders?.user?.name;
  const productOrder = listOrders?.productOrder?.name;

  const formattedTime = new Date(listOrders?.createdAt).toLocaleString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    }
  );

  return (
    <div className="products">
      <div className="">
        <div className="info">
          <div className="container px-6 py-10 mx-auto">
            <div className="mt-8 lg:flex lg:items-center">
              <img
                className="h-65 lg:w-1/2 lg:h-70 rounded-xl mb-6 lg:mb-0"
                src=""
                alt=""
              />

              <div className="lg:w-1/2 lg:ml-6">
                <p className="text-lg text-black uppercase underline font-bold">
                  Order Detail
                </p>

                <a
                  href="#"
                  className="block mt-4 text-3xl font-semibold text-gray-800 hover:underline dark:text-black md:text-4xl"
                >
                  {storeName}
                </a>
                <br />
                <div className="card-description mt-3 rounded-md">
                  <p className="text-lg text-gray-700 dark:text-black md:text-2xl underline">
                    Sales Name : {salesName}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-black md:text-2xl">
                    created At : {formattedTime}
                  </p>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                    Ordered :
                  </h1>
                  <br />
                  {listOrders?.productOrder?.map((product, index) => (
                    <div key={index}>
                      <h1 className="text-lg text-gray-700 dark:text-black md:text-2xl">
                        - Product {index + 1} :
                      </h1>
                      <p className="text-lg text-gray-700 dark:text-black md:text-2xl">
                        Name: {product.name}
                      </p>
                      <p className="text-lg text-gray-700 dark:text-black md:text-2xl">
                        Category: {product.category}
                      </p>
                      <p className="text-lg text-gray-700 dark:text-black md:text-2xl">
                        Price:{" "}
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(product.price)}
                      </p>
                    </div>
                  ))}
                </div>
                <br />
                <div>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                    Total Bill:{" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(listOrders.totalBill)}
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold"></h1>
                </div>
                <div>
                  <h1 className="text-lg text-gray-700 dark:text-black font-bold">
                    {/* Since: {listStore.joinDate} */}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
