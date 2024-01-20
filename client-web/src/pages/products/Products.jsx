import React from "react";
import { useState } from "react";
import "./Products.scss";
import { products } from "../../data";
import Table from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";

const formatPriceToRupiah = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const Products = () => {
  const [open, setOpen] = useState(false);
  const [listProducts, setListProducts] = useState([]);


  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:3000/products"
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

  const displayedKeys = ["id", "image", "name", "category", "stock", "price", "discQty", "discQty", "isAvailable"];

  const columns =
  listProducts && listProducts.length > 0
    ? displayedKeys.map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        width: 160,
        renderCell: (params) => {
          return key === "price"
            ? formatPriceToRupiah(params.value)
            : params.value;
        },
      }))
    : [];

    const filteredListProducts =
    listProducts &&
    listProducts.map((product, index) =>
      displayedKeys.reduce((obj, key) => {
        if (key === "id") {
          obj[key] = index + 1;
        } else if (key === "isAvailable") {
          obj[key] = product[key] ? "In Stock" : "Out of Stock";
        } else {
          obj[key] = product[key];
        }
        return obj;
      }, {})
    );

    return (
      <div className="products">
        <div className="info">
          <h1>Products</h1>
          <button onClick={() => setOpen(true)}>Add New Products</button>
        </div>
        <Table slug="products" columns={columns} rows={filteredListProducts} />
        {/* Add your modal or form component here */}
        {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
      </div>
    );
};

export default Products;


