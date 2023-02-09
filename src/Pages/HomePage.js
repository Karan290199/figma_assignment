import React, { useEffect, useState } from "react";
import TogglerButton from "../Component/TogglerButton";
import CompanyDetail from "../Component/CompanyDetail";
import "react-toastify/dist/ReactToastify.css";
import "./HomePage.css";
import axios from "axios";
import NavigationBar from "../Component/NavigationBar";

const PER_PAGE = 6;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState("Resources");
  const [Resources, setResources] = useState([]);
  const [Requests, setRequests] = useState([]);
  const [Users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://media-content.ccbp.in/website/react-assignment/resources.json`
      )
      .then((response) => {
        const responseData = response.data;
        setResources(responseData);
        setCompanies(responseData);
        const requestData = responseData.filter(
          (request) => request.tag === "request"
        );
        setRequests(requestData);
        const userData = responseData.filter((user) => user.tag === "user");
        setUsers(userData);
      });
  }, []);

  const handleClick = (name) => {
    setSelected(name);
    console.log(name);
    if (name === "Resources") setCompanies(Resources);
    else if (name === "Requests") setCompanies(Requests);
    else if (name === "Users") setCompanies(Users);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filterData = companies.filter((company) => {
        return Object.values(company).join("").includes(searchInput);
      });
      setFilterResults(filterData);
    } else setFilterResults(companies);
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(companies.length / PER_PAGE);

  return (
    <div>
      <NavigationBar hide={false} />
      <div className="Container">
        <TogglerButton
          name="Resources"
          selected={selected}
          onclick={handleClick}
        />
        <TogglerButton
          name="Requests"
          selected={selected}
          onclick={handleClick}
        />
        <TogglerButton name="Users" selected={selected} onclick={handleClick} />
      </div>
      <div className="searchBar">
        <img
          alt="searchIcon"
          src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-1.png"
          className="searchIcon"
        />
        <input
          type="search"
          className="inputSearch"
          onChange={(e) => searchItems(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className="companyContainer">
        {searchInput.length > 1
          ? filterResults
              .slice(offset, offset + PER_PAGE)
              .map((company) => (
                <CompanyDetail key={company.id} company={company} />
              ))
          : companies
              .slice(offset, offset + PER_PAGE)
              .map((company) => (
                <CompanyDetail key={company.id} company={company} />
              ))}
        <div className="paginationContainer">
          <button
            className={`paginationButton ${currentPage === 0 ? "disabledClass": ""}`}
            disabled={currentPage === 0 ? true: false}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <i className={`fa fa-chevron-left icon ${currentPage === 0 ? "disabledClass": ""}`} />
          </button>
          <button
            className={`paginationButton ${currentPage === pageCount - 1 ? "disabledClass": ""}`}
            disabled={currentPage === pageCount - 1 ? true: false}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <i className={`fa fa-chevron-right icon ${currentPage === pageCount - 1 ? "disabledClass": ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
