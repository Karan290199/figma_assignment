import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "../Component/NavigationBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddItem.css";
import axios from "axios";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [iconurl, setIconUrl] = useState("");
  const [tagName, setTagName] = useState("user");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length > 20) {
      setError("Invalid Length");
      toast.error("Invalid Length", {
        position: "bottom-center",
        autoClose: 1000,
      });
    } else {
      const response = await axios.get(
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
      );
      if (response.status === 200) {
        setError(null);
        toast.success("Data is uploaded to the Server", {
          position: "bottom-center",
          autoClose: 1000,
        });
      } else if (response.status === 403) {
        toast.error("Forbidden Request", {
          position: "bottom-center",
          autoClose: 1000,
        });
      } else if (response.status === 404) {
        toast.error("Invalid Url Parsed", {
          position: "bottom-center",
          autoClose: 1000,
        });
      } else if (response.status === 500) {
        toast.error("Internal Server Error", {
          position: "bottom-center",
          autoClose: 1000,
        });
      }
    }
  };
  return (
    <div>
      <NavigationBar hide={true} />
      <div className="ItemContainer">
        <Link to="/">
          <div className="back">
            <i className="fa fa-chevron-left backIconClass" />
            <p className="backText">Users</p>
          </div>
        </Link>
        <Form className="formContainer" onSubmit={handleSubmit}>
          <div className="AddItemForm">Item Details</div>
          <div className="formDivs">
            <p className="formLable">ITEM TITLE</p>
            <input
              type="text"
              className={`formInput ${error ? "Error" : ""}`}
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="formDivs">
            <p className="formLable">LINK</p>
            <input
              type="url"
              className="formInput"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="formDivs">
            <p className="formLable">ICON URL</p>
            <input
              type="url"
              required={true}
              className="formInput"
              value={iconurl}
              onChange={(e) => setIconUrl(e.target.value)}
            />
          </div>
          <div className="formDivs">
            <p className="formLable">TAG NAME</p>
            <select
              className="formInput"
              value={tagName}
              required={true}
              onChange={(e) => setTagName(e.target.value)}
            >
              <option value="user">User</option>
              <option value="request">Request</option>
            </select>
          </div>
          <div className="formDivs">
            <p className="formLable">CATEGORY</p>
            <input
              type="text"
              className="formInput"
              value={category}
              required={true}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="formDivs">
            <p className="formLable">DESCRIPTION</p>
            <textarea
              className="formInput"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="formButton">CREATE</button>
          <ToastContainer />
        </Form>
        <div className="img"></div>
      </div>
    </div>
  );
};

export default AddItem;
