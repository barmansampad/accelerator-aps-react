import React, { Component } from "react";
import { Tab, Accordion,Row, Panel } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
        <Row>
      <Tab.Content>
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
            <Panel header="Industry Players" eventKey="2" bsStyle="info">
              Content of Industry Players
            </Panel>
            <Panel header="Industry Articles" eventKey="3" bsStyle="info">
              Content of Industry Articles
            </Panel>
          </Accordion>
        </Tab.Pane>
      </Tab.Content>
      </Row>
    );
  }
}

export default Home;
