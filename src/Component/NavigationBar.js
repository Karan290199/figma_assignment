import React from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavigationBar.css";
const NavigationBar = ({ hide }) => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to = "/">
            <img
              src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg"
              alt="Next Wave img"
              className="companyLogo"
            />
          </Link>
        </Navbar.Brand>
        <Nav>
          {hide ? null : (
            <Link to="/addItem">
              <Button className="AddItemButton">ADD ITEM</Button>
            </Link>
          )}
        </Nav>
        <Nav>
          <div className="avatarDiv">
            <img
              src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
              alt="user-Profile"
              className="userProfile"
            />
          </div>
        </Nav>
        <div className="horizontaldiv" />
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
