import React, { Component } from "react";
import "./App.css";
import {
  Nav,
  NavItem,
  Navbar,
  Tab,
  Row,
  Col,
  Accordion,
  Panel,
  Modal
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar style={{ background: "#212121" }}>
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

        <Tab.Container id="left-tabs-example" defaultActiveKey="home">
          <Row className="clearfix">
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

            <div className="Container">
              <Col xs={10} md={12}>
                <Tab.Content animation>
                  <Tab.Pane
                    eventKey="home"
                    style={{
                      backgroundImage: "url('/home_background.jpg')",
                      textAlign: "left",
                      marginTop: "12px"
                    }}
                  >
                    <p>
                      <b>A</b>
                      n attending physician statement (APS) is a report by a physician,hospital or medical facility who has treated, or who is currently treating,
                      a person seeking insurance. In traditional underwriting, an APS is one of the most frequently ordered additional sources of medical background information.
                    </p>
                    <p>
                      <b>A</b>
                      {" "}
                      report by a physician, hospital or medical facility who has treated, or who is currently treating, a person seeking insurance.
                    </p>
                    <p>
                      <b>C</b>
                      ontains information from medical records to allow proper pricing of mortality or morbidity risk APS Summary : Health history synopsis that chronologically details tobacco use, medications,prior conditions,
                      lab tests, BP, cholesterol, HDL, LDL and cholesterol/HDL ratio etc.
                    </p>
                    <p>
                      <b>D</b>
                      igitization of APS - A web application that pulls, compiles, normalizes and presents unified digital medical records to inform the life insurance underwriting systems.
                    </p>

                  </Tab.Pane>
                  <Tab.Pane eventKey="home">
                    <Accordion>
                      <Panel header="Glossary" eventKey="1" bsStyle="info">
                        Content of Glossary
                      </Panel>
                      <Panel
                        header="Industry Players"
                        eventKey="2"
                        bsStyle="info"
                      >
                        Content of Industry Players
                      </Panel>
                      <Panel
                        header="Industry Articles"
                        eventKey="3"
                        bsStyle="info"
                      >
                        Content of Industry Articles
                      </Panel>
                    </Accordion>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="code-spike"
                    style={{
                      backgroundImage: "url('/code-spike.png')",
                      textAlign: "middle",
                      marginTop: "12px"
                    }}
                  >
                    <p>
                      <b>HL7 (Health Level-7) </b>
                      <br />
                      HL7 refers to a set of international standards for transfer of clinical and administrative data between software applications used by various healthcare providers.HL7 International specifies a number of flexible standards, guidelines, and methodologies by which various healthcare systems can communicate with each other.Such guidelines or data standards are a set of rules that allow information to be shared and processed in a uniform and consistent manner.These data standards are meant to allow healthcare organizations to easily share clinical information.
                    </p>

                    <p>
                      <b>HIE (Health information exchange) </b>
                      <br />
                      HIE provides the capability to electronically move clinical information among different health care information systems. The goal of HIE is to facilitate access to and retrieval of clinical data to provide safer and more timely, efficient, effective, and equitable patient-centered care. HIE is also useful to public health authorities to assist in analyses of the health of the population.
                    </p>

                    <p>
                      <b>HIPPA Compliance </b>
                      <br />
                      HIPPA stands for Health Insurance Portability and Accountability Act. HIPPA sets the standard for protecting sensitive patient data. Any company that deals with protected health information (PHI) must ensure that all the required physical, network, and process security measures are in place and followed.
                    </p>

                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="tips-tricks"
                    style={{
                      backgroundImage: "url('/code-spike.png')",
                      textAlign: "middle",
                      marginTop: "12px"
                    }}
                  >
                    <b> Project Management : </b>
                    Pivotal Tracker
                    
                    <a href="https://www.pivotaltracker.com/"> [link] </a>
                    
                    <br />
                    <b> Source Code Management : </b>
                    GitHub
                    
                    <a href="https://github.com/"> [link] </a>
                    
                    <br />
                    <b> Document Management : </b>
                    Box
                    
                    <a href="https://app.box.com/"> [link] </a>
                    
                    <br />
                    <b> Communication : </b>
                    Slack
                    
                    <a href="https://slack.com/"> [link] </a>
                    
                    <br />
                    <b> Deployment Platform : </b>
                    Heroku
                    
                    <a href="https://www.heroku.com/"> [link] </a>
                    
                    <br />
                    <b> Build and Deployment : </b>
                    CircleCI
                    
                    <a href="https://circleci.com/"> [link] </a>
                    
                    <br />
                    <b> Development IDE : </b>
                    
                    VS-Code
                    
                    <a href="https://code.visualstudio.com/download">
                      [link]
                    </a>
                    
                    <br />
                    <b> Monitoring and Tracking :</b>
                    
                    HeartBeat
                    
                    <a href="HeartBeat https://heartbeat2.quickleft.com/login">
                      [link]
                    </a>
                    
                    <br />
                  </Tab.Pane>

                  <Tab.Pane eventKey="tips-tricks">
                    <h2
                      style={{
                        borderBottom: "1px solid #ccc",
                        textAlign: "left"
                      }}
                    >
                      FAQ
                    </h2>
                    <Accordion style={{ textAlign: "left" }}>

                      <Panel
                        header="Q. How to create a Pull Request on gitHub?"
                        eventKey="1"
                        bsStyle="info"
                      >
                        Pull requests let you tell others about changes you've pushed to a repository on GitHub.
                        Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before the changes are merged into the repository.
                        
                        To create a pull request, you must have changes committed to the your new branch. Go to the repository page on github. And click on Pull Request button in the repo header. Pick the branch you wish to have merged using the Head branch dropdown.
                        <br />
                        <a href="https://help.github.com/articles/creating-a-pull-request/">
                          Further Reading
                        </a>
                      </Panel>

                      <Panel
                        header="Q. How to do local setup to run the application?"
                        eventKey="2"
                        bsStyle="info"
                      >
                        Refer the below link. <br />
                        <a href="https://github.com/CognizantStudio/mock-aps/tree/f/143302021-tips-tricks">
                          Click Here
                        </a>
                      </Panel>

                      <Panel
                        header="Q. How to comment on pull request?"
                        eventKey="3"
                        bsStyle="info"
                      >
                        After you open a pull request in a repository, collaborators or team members can comment on the comparison of files between the two specified branches,
                        
                        or leave general comments on the project as a whole.
                        You can also comment on specific sections of a file on a pull request's Files changed tab in the form of individual line comments or as part of a pull request review. Adding line comments is a great way to discuss questions about implementation,or provide feedback to the author.
                        <br />
                        <a href="https://github.com/CognizantStudio/mock-aps/pull/5">
                          Related Link
                        </a>
                      </Panel>

                    </Accordion>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </div>
          </Row>
        </Tab.Container>

        <Modal.Footer style={{ textAlign: "center" }}>
          <a href="https://www.cognizant.com">
            {" "}©2017 Cognizant, all rights reserved{" "}
          </a>
        </Modal.Footer>
      </div>
    );
  }
}

export default App;
