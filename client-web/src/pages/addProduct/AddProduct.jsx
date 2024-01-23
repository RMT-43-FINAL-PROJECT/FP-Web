import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./addProduct.scss";

const AddProduct = (props) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    category: "",
    stock: 0,
    price: 0,
    discQty: 10,
    discPercent: 5,
    isAvailable: true,
  });
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([
    "Beauty & Wellbeing",
    "Personal Care",
    "Home Care",
    "Nutrition",
    "Ice Cream",
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", input.name);
      formData.append("category", input.category);
      formData.append("stock", input.stock);
      formData.append("price", input.price);
      formData.append("discQty", input.discQty);
      formData.append("discPercent", input.discPercent);
      formData.append("isAvailable", input.isAvailable);

      const { data } = await axios({
        method: "post",
        url: import.meta.env.VITE_BASE_URL + "/products",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      console.log(data);
      toast.success("Product added successfully!");
      props.setOpen(false);
      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Error adding product. Please check the form.");
    }
  };

  console.log(input);
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Name</label>
            <input name="name" type="text" id="name" onChange={handleChange} />
          </div>
          <div className="item">
            <label>Category</label>
            <select
              name="category"
              id="category"
              onChange={handleChange}
              value={input.category}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="item">
            <label>Stock</label>
            <input
              name="stock"
              type="number"
              id="stock"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Price</label>
            <input
              name="price"
              type="number"
              id="price"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>DiscQty</label>
            <input
              name="discQty"
              type="number"
              id="discQty"
              value={10}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>discPercent</label>
            <input
              name="discPercent"
              type="number"
              id="discPercent"
              value={5}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>isAvailable</label>
            <input
              name="isAvailable"
              type="text"
              id="isAvailable"
              value={input.isAvailable}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
