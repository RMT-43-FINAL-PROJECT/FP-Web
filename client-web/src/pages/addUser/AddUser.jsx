import React from "react";
import "./addUser.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = (props) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    mobilePhone: "",
    address: "",
    role: "sales",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: import.meta.env.VITE_BASE_URL + "/users/register",
        data: input,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      console.log(data);
      toast.success("User added successfully!");
      props.setOpen(false);
      navigate("/users");
    } catch (error) {
      console.log(error);
      toast.error("Error adding user. Please check the form.");
    }
  };
  console.log(input);
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new user</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Name</label>
            <input name="name" type="text" id="name" onChange={handleChange} />
          </div>
          <div className="item">
            <label>Email</label>
            <input
              name="email"
              type="text"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Password</label>
            <input
              name="password"
              type="text"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Mobile Phone</label>
            <input
              name="mobilePhone"
              type="text"
              id="mobilePhone"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Adress</label>
            <input
              name="address"
              type="text"
              id="address"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddUser;
