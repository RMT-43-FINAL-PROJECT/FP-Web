import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Table from "../../components/table/Table";
import Spinner from "../../components/spinner/Spinner";

const Stores = () => {
  const [open, setOpen] = useState(false);
  const [listStores, setListStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: import.meta.env.VITE_BASE_URL + "/stores",
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log("Data API:", data);
      const storesWithIds = data.map((store, index) => ({
        ...store,
        id: index + 1,
      }));
      // data pada apinya nested

      setListStores(storesWithIds);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayedKeys = [
    "id",
    "photo",
    "name",
    "confirmedOrderValue",
    "joinDate",
  ];

  const columns =
    listStores && listStores.length > 0
      ? displayedKeys.map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: key === "photo" ? 170 : 300,
          renderCell: (params) => {
            return key === "photo" ? (
              <img
                src={params.value}
                alt={`Store ${params.row.name}`}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              params.value
            );
          },
        }))
      : [];

  // const filteredListStores =
  //   listStores &&
  //   listStores.map((store, index) =>
  //     displayedKeys.reduce((obj, key) => {
  //       if (key === "id") {
  //         obj[key] = index + 1;
  //       } else {
  //         obj[key] = store[key];
  //       }
  //       return obj;
  //     }, {})
  //   );

  return (
    <div className="products">
      <div className="info">
        <h1>Stores Management</h1>
        <button onClick={() => setOpen(true)}>Add New Store</button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Table slug="stores" columns={columns} rows={listStores} />
      )}
      {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Stores;
