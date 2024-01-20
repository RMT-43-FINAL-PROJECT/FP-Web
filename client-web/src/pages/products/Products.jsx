import React from "react";
import { useState } from "react";
import "./Products.scss";
import { products } from "../../data";
import Table from "../../components/table/Table";


const formatPriceToRupiah = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};


const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return React.createElement("img", { src: params.row.image || "/noavatar.png", alt: "" });
    },
  },
  {
    field: "name",
    headerName: "name",
    width: 250,
  },
  {
    field: "stock",
    headerName: "stock",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
    renderCell: (params) => {
      return formatPriceToRupiah(params.value);
    },
  },
  {
    field: "discQty",
    headerName: "discQty",
    width: 200,
  },
  {
    field: "discPercent",
    headerName: "discPercent",
    width: 200,
  },
  {
    field: "category",
    headerName: "category",
    width: 200,
  },
  {
    field: "isAvailable",
    headerName: "Availability",
    width: 150,
    renderCell: (params) => {
      return params.value ? "In Stock" : "Out of Stock";
    },
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    React.createElement("div", { className: "products" },
      React.createElement("div", { className: "info" },
        React.createElement("h1", null, "Products"),
        React.createElement("button", { onClick: () => setOpen(true) }, "Add New Products")
      ),
      React.createElement(Table, { slug: "products", columns: columns, rows: products }),
      // {open && React.createElement(Add, { slug: "product", columns: columns, setOpen: setOpen })}
    )
  );
};

export default Products;
