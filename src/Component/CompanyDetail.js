import React from "react";
import "./CompanyDetail.css";
const CompanyDetail = ({ company }) => {
  return (
    <div className="cardDiv">
      <div className="cardHeader">
        <img src={company.icon_url} alt={company.title} className="cardImg" />
        <div className="cardTitle">
          <div className="cardName">{company.title}</div>
          <div className="cardCategory">{company.category}</div>
        </div>
      </div>
      <div className="cardBody">
        <a href={company.link} className="cardLink">{company.link}</a>
        <div className="cardDescription">{company.description}</div>
      </div>
    </div>
  );
};

export default CompanyDetail;
