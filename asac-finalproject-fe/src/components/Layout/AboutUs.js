import React from "react";

import "../Homepage/home.css";

import { Collapse } from "antd";
import HeaderHomePage from "../Homepage/headerHomePage";
import ChatbotComponent from "../../Chatbot/ChatbotComponent";
import FooterComponent from "../Layout/FooterComponent";

const { Panel } = Collapse;

const AboutUs = () => {
  return (
    <>
      <div>
        <ChatbotComponent />
        <HeaderHomePage />
        <div className="banner"></div>
        <div className="collapse-container" style={{ padding: "30px" }}>
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="ASAC Group" key="1">
              <p className="collapse-text">
                Raffles Medical Group (RMG) is a leading private healthcare
                provider in Asia, operating medical facilities across 13 cities
                in Singapore, China, Japan, Vietnam and Cambodia. It is the only
                private medical provider in Singapore that owns and operates a
                fully intergrated healthcare organisation comprising of a
                hospital, a network of family medicine and dental clinics,
                insurance services, Japanese and Chinese medicine clinics,
                insurance services, and a consumer healthcare division.
              </p>
              <p className="collapse-text">
                Founded in 1976 with two clinics in central Singapore, RMG has
                grown consistently over the years to now serve over 2 million
                patients today and more than 6,800 corporate clients each year.
                RMG has a staff strength of 2,500, including 370 physicians.
                From primary care at its network of Raffles Medical clinics to
                specialist and tertiary care at Raffles Hospital, the Group
                prides itself on offering a seamless continuum of care to all
                its patients.
              </p>
            </Panel>
            <Panel header="ASAC Group Vietnam" key="2">
              <p className="collapse-text">
                In 2015, a joint venture between with Raffles Medical Group and
                International SOS was formed to enhance and expand the services
                of our clinics in China, Vietnam and Cambodia. From 5 June 2017,
                the three clinics in Vietnam have been rebranded to Raffles
                Medical Vietnam. These fully-licensed clinics are staffed by
                well trained and specialized professionals to ensure quality,
                comprehensive medical care.
              </p>
              <p className="collapse-text">
                Patients will receive the same high level of service and
                renowned quality of care, with continued access to our panel of
                international and local doctors. Patients and onshore panel of
                doctors can also expect to benefit from access to the clinical
                expertise and support from the Raffles specialists in Singapore.
              </p>
              <p className="collapse-text">
                We look forward to being your trusted partner for health
                throughout Vietnam.
              </p>
            </Panel>
            <Panel header="Mission & Vision" key="3">
              <ul className="collapse-text">
                <li className="collapse-text">
                  Mission:
                  <p className="collapse-text-1">
                    Our mission is to enhence health and well-being by providing
                    the best total healthcare.
                  </p>
                </li>
                <li className="collapse-text">
                  Vision :
                  <p className="collapse-text-1">
                    Our trusted partner for health.
                  </p>
                </li>
              </ul>
            </Panel>
            <Panel header="Quality Policy" key="4">
              <p className="collapse-text">
                We pledge to set and practise high standards through an
                effective quality management system to assure that our services
                meet and exceed the expected requirements of our clients and
                patients.
              </p>
            </Panel>
          </Collapse>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default AboutUs;
