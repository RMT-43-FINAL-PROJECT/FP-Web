import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.scss";
import DetailPage from "../../components/detailPage/DetailPage";
import Table from "../../components/table/Table";

const SingleProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  //Fetch data and send to Single Component

  const {id} = useParams()

  // console.log("Type of listProducts:", typeof listProducts); check typedata because error

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: import.meta.env.VITE_BASE_URL + `/products/${id}` ,
        headers: {
            "ngrok-skip-browser-warning": "69420",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE3ZDVkZWU5MzVjZjc3MzAwODg2OGEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNTkwMzk0N30.w37kI8OsYUzGOxCq776J8LEZeJrGMDIbr-5StCz0VC0"
          },
      });
      console.log("Data API:", data);
      // data pada apinya nested
      setListProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



    return (
        <div className="product">
          <DetailPage listProducts={listProducts}/>
          {/* Pass the entityType prop to the Table component */}
        </div>
      );
};

export default SingleProduct;
