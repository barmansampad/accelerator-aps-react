import React, { Component } from "react";
import {
  Modal
} from "react-bootstrap";

class Footer extends Component {

  render() {
    return <Modal.Footer style={{ textAlign: "center" }}>
          <a href="https://www.cognizant.com">
            {" "}©2017 Cognizant, all rights reserved{" "}
          </a>
        </Modal.Footer>
  }
}

export default Footer;
