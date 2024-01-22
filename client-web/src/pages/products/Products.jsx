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
        url: import.meta.env.VITE_BASE_URL + "/products",
        headers: {
          "ngrok-skip-browser-warning": "69420",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log("Data API:", data);
      const productsWithIds = data.map((product, index) => ({
        ...product,
        id: index + 1,
      }));
      // data pada apinya nested
      setListProducts(productsWithIds);
      setLoading(false);
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
          headerName:
            key === "isAvailable"
              ? "Status"
              : key.charAt(0).toUpperCase() + key.slice(1),
          width: key === "image" ? 170 : 150,
          renderCell: (params) => {
            return key === "price" ? (
              formatPriceToRupiah(params.value)
            ) : key === "image" ? (
              <img
                src={params.value}
                alt={params.row.name}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : key === "isAvailable" ? (
              params.value ? (
                "In Stock"
              ) : (
                "Out of Stock"
              )
            ) : (
              params.value
            );
          },
        }))
      : [];

  return (
    <div className="products">
      <div className="info">
        <h1>Products Management</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Table slug="products" columns={columns} rows={listProducts} />
      )}

      {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Products;
