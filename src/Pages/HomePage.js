import React, { useEffect, useState } from "react";
import TogglerButton from "../Component/TogglerButton";
import { useCompanyContext } from "../Hooks/useCompanyContext";
import CompanyDetail from "../Component/CompanyDetail";
import "react-toastify/dist/ReactToastify.css";
import "./HomePage.css";

const HomePage = () => {
  const [selected, setSelected] = useState(null);
  const { companies, dispatch } = useCompanyContext();
  const [filterCompanies, setCompanies] = useState();

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      const response = await fetch(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      );
      let json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_COMPANY", payload: json });
      }
    };
    fetchCompanyDetails();
  }, [dispatch]);

  const handleClick = (name) => {
    setSelected(name);
    if (name === "Requests") {
      setCompanies(companies.filter((company) => company.tag === "request"));
    } else if (name === "Users") {
      setCompanies(companies.filter((company) => company.tag === "user"));
    } else setCompanies(companies);
  };

  return (
    <div>
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
        <input type="search" placeholder="Search" className="inputSearch"/>
      </div>
      <div className="companyContainer">
        {filterCompanies &&
          filterCompanies.map((company) => (
            <CompanyDetail id={company.id} company={company} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
