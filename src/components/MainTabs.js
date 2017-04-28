import React, { Component } from "react";
import {
  Col, Nav, NavItem
} from "react-bootstrap";

class MainTabs extends Component {

  render() {
    return  <div>
    <Col xs={6} md={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="home">
                  Home
                </NavItem>
              </Nav>
            </Col>
            <Col xs={6} md={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="code-spike">
                  Code Spike
                </NavItem>
              </Nav>
            </Col>
            <Col xs={6} md={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="tips-tricks">
                  Tips & Tricks
                </NavItem>
              </Nav>
            </Col>
            </div>
  }
}

export default MainTabs;
