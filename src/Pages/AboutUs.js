import React from "react";
import founder from "../Props/fondatoare.jpg";
import founder2 from "../Props/blacky.jpg";
import founder3 from "../Props/founders3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUs() {
  let theme = localStorage.getItem("theme");
  return (
    <div className={theme}>
      <p class="text-center text-6xl pt-3 pb-3 mb-4">Who are we?</p>
      <div class="pb-3">
        <Container>
          <Row>
            <Col>
              <div>
                <img
                  className="imgShadow"
                  src={founder}
                  height="400px"
                  width="400px"
                ></img>
                <p class="mt-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </Col>
            <Col>
              <img
                className="imgShadow"
                src={founder3}
                height="400px"
                width="400px"
              ></img>
              <p class="mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <img
                className="imgShadow"
                src={founder2}
                height="400px"
                width="400px"
              ></img>
              <p class="mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutUs;
