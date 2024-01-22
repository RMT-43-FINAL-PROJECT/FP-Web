import React from "react";
import Table from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import { useState } from "react";

const Schedules = () => {
  const [open, setOpen] = useState(false);
  const [lisSchedules, setListSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSchedules = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: import.meta.env.VITE_BASE_URL + "/schedules",
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE3ZDVkZWU5MzVjZjc3MzAwODg2OGEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNTkwMzk0N30.w37kI8OsYUzGOxCq776J8LEZeJrGMDIbr-5StCz0VC0"
        },
      });

      setTimeout(() => {
        setListSchedules(data);
        setLoading(false);
      }, 300);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const displayedKeys = [
    "id",
    "storeName",
    "userName",
    "address",
    "time",
    "status",
  ];

  const columns = displayedKeys.map((key) => ({
    field: key,
    headerName:
      key === "storeName"
        ? "Store Name"
        : key === "userName"
        ? "User Name"
        : key === "address"
        ? "address"
        : key.charAt(0).toUpperCase() + key.slice(1),
    width: key === "status" ? 200 : 220,
  }));

  const filteredSchedules =
    lisSchedules &&
    lisSchedules.map((schedule, index) => {
      const { id, storeInformations, userInformations, time, isCompleted } =
        schedule;

      const storeName = storeInformations?.name || "Unknown Store";
      const userName = userInformations?.name || "Unknown User";
      const address = storeInformations?.address || "Unknown Address";
      const status = isCompleted ? "Completed" : "Not Completed";

      return {
        id: index + 1,
        storeName,
        userName,
        address,
        time,
        status,
      };
    });

  return (
    <div className="products">
      <div className="info">
        <h1>Schedules Management</h1>
        <button onClick={() => setOpen(true)}>Add New Schedule</button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Table slug="schedules" columns={columns} rows={filteredSchedules} />
      )}

      {/* Add your modal or form component here */}
      {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Schedules;
