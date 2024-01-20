import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Table from "../../components/table/Table";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:3000/users"
      });
      // console.log("Data API:", data);
      // data pada apinya nested
      setListUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayedKeys = ["id", "photo", "name", "email", "joinDate"];
  const columns = listUsers && listUsers.length > 0
    ? displayedKeys.map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        width: key === "photo" ? 170 : 300,
        renderCell: (params) => {
          return key === "photo"
            ? <img src={params.value} alt={`User ${params.row.name}`} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            : params.value;
        },
      }))
    : [];

    const filteredListUsers =
    listUsers &&
    listUsers.map((user, index) =>
      displayedKeys.reduce((obj, key) => {
        if (key === "id") {
          obj[key] = index + 1;
        } else {
          obj[key] = user[key];
        }
        return obj;
      }, {})
    );

    return (
        <div className="users">
          <div className="info">
            <h1>Users</h1>
            <button onClick={() => setOpen(true)}>Add New Users</button>
          </div>
          <Table slug="users" columns={columns} rows={filteredListUsers} />
          {/* Add your modal or form component here */}
          {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
        </div>
      );
};

export default Users;
