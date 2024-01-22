import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./detailPage.scss";

const DetailPage = ({ listProducts }) => {
  const getStatus = () => {
    return listProducts.isAvailable ? "In Stock" : "Out of Stock";
  };
  return (
    <div className="products">


<div className="">
  <div className="info">


  <div className="container px-6 py-10 mx-auto">

    <div className="mt-8 lg:flex lg:items-center">
      <img className="w-full h-65 lg:w-1/2 lg:h-70 rounded-xl mb-6 lg:mb-0" src={listProducts.image} alt={listProducts.name} />

      <div className="lg:w-1/2 lg:ml-6">
        <p className="text-lg text-black uppercase underline font-bold">Product Detail</p>

        <a href="#" className="block mt-4 text-3xl font-semibold text-gray-800 hover:underline dark:text-black md:text-4xl">
          {listProducts.name}
        </a>
        

        <div className="card-description mt-3 rounded-md">
          <p className="text-lg text-gray-700 dark:text-black md:text-2xl underline">
            {listProducts.category}
          </p>
          <h1 className="text-lg text-gray-700 dark:text-black font-bold">{getStatus()}</h1>
        </div>
        <br />
        <div>
        <p className="text-lg text-gray-700 dark:text-black font-bold">Price:  
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(listProducts.price)} 
        </p>
        <h1 className="text-lg text-gray-700 dark:text-black font-bold">Stock:{listProducts.stock}</h1>
        <h1 className="text-lg text-gray-700 dark:text-black font-bold">Discount:{listProducts.discPercent}%</h1>
  
        <h1 className="text-lg text-gray-700 dark:text-black font-bold">Disc Quantity:{listProducts.discQty}</h1>

        </div>


        <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400 text-lg">
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

export default DetailPage;


