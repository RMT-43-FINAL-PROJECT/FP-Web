import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Table from "../../components/table/Table";

const Users = () => {
const [listUsers, setListUsers] = useState([])


  return (
    React.createElement("div", { className: "User" },
    React.createElement("div", { className: "info" },
      React.createElement("h1", null, "Products"),
      React.createElement("button", { onClick: () => setOpen(true) }, "Add New User")
    ),
    // React.createElement(Table, { slug: "users", columns: columns, rows: users }),
    // {open && React.createElement(Add, { slug: "product", columns: columns, setOpen: setOpen })}
  )
)
}

export default Users