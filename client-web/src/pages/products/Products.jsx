import React from "react";
import { useState } from "react";
import "./Products.scss";
import { products } from "../../data";
import Table from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";

export const formatPriceToRupiah = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const Products = () => {
  const [open, setOpen] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:3000/products",
      });
      console.log("Data API:", data);
      // data pada apinya nested
      setTimeout(() => {
        setListProducts(data);
        setLoading(false);
      }, 300);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayedKeys = [
    "id",
    "image",
    "name",
    "category",
    "stock",
    "price",
    "discQty",
    "discPercent",
    "isAvailable",
  ];

  const columns =
    listProducts && listProducts.length > 0
      ? displayedKeys.map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: key === "image" ? 200 : 150,
          renderCell: (params) => {
            return key === "price" ? (
              formatPriceToRupiah(params.value)
            ) : key === "image" ? (
              <img
                src={params.value}
                alt={params.row.name}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              params.value
            );
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
        <h1>Products Management</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Table slug="products" columns={columns} rows={filteredListProducts} />
      )}

      {/* Add your modal or form component here */}
      {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Products;
