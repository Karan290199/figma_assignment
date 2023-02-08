import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "../Component/NavigationBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddItem.css";
// import { globalId } from "./HomePage";

const AddItem = () => {

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [iconurl, setIconUrl] = useState("");
  const [tagName, setTagName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      title + "\n" + link + "\n" + iconurl + "\n" + tagName + "\n" + category
    );
    if (!title || !link || !iconurl || (!tagName || tagName === "selectTag") || !category) {
      toast.error("Required fields cannot be empty", {
        position: "bottom-center",
        autoClose: 1000,
      });
    } else {
      await toast.promise(
        fetch('https://media-content.ccbp.in/website/react-assignment/add_resource.json', {
          method: 'POST'
        }),
        {
          pending: "Connecting to the Server",
          success: "Data uploaded Successfully",
          error: "Failed to upload the data",
        },
        {
          position: "bottom-center",
          autoClose: 1000,
        }
      );
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
              className="formInput"
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
              onChange={(e) => setTagName(e.target.value)}
            >
              <option value="selectTag">Select a tag</option>
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
