import React, { Component } from "react";
import { Tab } from "react-bootstrap";

class CodeSpike extends Component {
  render() {
    return (
      <Tab.Content>
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
      </Tab.Content>
    );
  }
}

export default CodeSpike;
