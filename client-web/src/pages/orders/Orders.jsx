import React from "react";
import Table from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import { useState } from "react";
import { formatPriceToRupiah } from "../products/Products";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const [listOrders, setListOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storeData, setStoreData] = useState({});
  const [userData, setUserData] = useState({});

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/orders");
      console.log("Data API:", data);

      const storeResponse = await axios.get("http://localhost:3000/stores");
      const userResponse = await axios.get("http://localhost:3000/users");

      const stores = storeResponse.data.reduce((acc, store) => {
        acc[store._id] = store.name;
        return acc;
      }, {});

      const users = userResponse.data.reduce((acc, user) => {
        acc[user._id] = user.name;
        return acc;
      }, {});

      console.log(stores);
      console.log(users);

      setStoreData(stores);
      setUserData(users);

      setTimeout(() => {
        setListOrders(data);
        setLoading(false);
      }, 300);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const displayedKeys = [
    "id",
    "storeName",
    "userName",
    "totalBill",
    "status",
    "createdAt",
  ];

  const columns = displayedKeys.map((key) => ({
    field: key,
    headerName:
      key === "storeName"
        ? "Store Name"
        : key === "userName"
        ? "User Name"
        : key === "totalBill"
        ? "Total Bill"
        : key === "status"
        ? "Status"
        : key.charAt(0).toUpperCase() + key.slice(1),
    width: 220,
  }));

  const filteredListOrders =
    listOrders &&
    listOrders.map((order, index) => {
      const { _id, status, createdAt, store, user, totalBill } = order;

      const { _id: storeId, name: storeName } = store;

      const { _id: userId, name: userName } = user;

      const statusText = status === "confirmed" ? "Confirmed" : "Pending";

      return {
        id: index + 1,
        storeId,
        storeName: storeName || "Unknown Store",
        userId,
        userName: userName || "Unknown User",
        status: statusText,
        totalBill: formatPriceToRupiah(totalBill),
        createdAt,
      };
    });

  return (
    <div className="products">
      <div className="info">
        <h1>Orders Management</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Table slug="orders" columns={columns} rows={filteredListOrders} />
      )}
      {/* Add your modal or form component here */}
      {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Orders;
