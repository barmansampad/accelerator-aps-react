import React, { Component } from "react";
import {
  Navbar
} from "react-bootstrap";

class Header extends Component {

  render() {
    return <Navbar style={{ background: "#212121" }}>
        <Navbar.Brand>
          <a href="https://accelerator.cognizant.com">
            <img
              src="./logo-accelerator.png"
              style={{ marginLeft: "-96px", marginTop: "-7px" }}
              alt=""
            />
          </a>
        </Navbar.Brand>
        <h1 style={{ color: "#FF6D00" }}> Attending Physician Statement </h1>
      </Navbar>
  }
}

export default Header;
