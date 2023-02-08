import React, { useEffect, useState } from "react";
import TogglerButton from "../Component/TogglerButton";
import CompanyDetail from "../Component/CompanyDetail";
import "react-toastify/dist/ReactToastify.css";
import "./HomePage.css";
import axios from "axios";
import NavigationBar from "../Component/NavigationBar";

const HomePage = () => {
  const [selected, setSelected] = useState("Resources");
  const [APIData, setAPIData] = useState([]);
  const [companies, setCompanies] = useState(null);
  const [filterResults, setFilterResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://media-content.ccbp.in/website/react-assignment/resources.json`
      )
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const handleClick = (name) => {
    setSelected(name);
    if (name !== "Resources") {
      name = name.substring(0, name.length - 1).toLowerCase();
      setCompanies(APIData.filter((company) => company.tag === name));
    } else setCompanies(APIData);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filterData = companies.filter((company) => {
        return Object.values(company).join("").includes(searchInput);
      });
      setFilterResults(filterData);
    } else setFilterResults(APIData);
  };

  return (
    <div>
      <NavigationBar hide={false}/>
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
          ? filterResults.map((company) => {
              return <CompanyDetail key={company.id} company={company} />;
            })
          : companies === null
          ? APIData.map((company) => {
              return <CompanyDetail key={company.id} company={company} />;
            })
          : companies.map((company) => {
              return <CompanyDetail key={company.id} company={company} />;
            })}
      </div>
    </div>
  );
};

export const globalId = 31;
export default HomePage;
