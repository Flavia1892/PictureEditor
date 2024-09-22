import React, { useState, useEffect } from "react";
import founder from "../Props/fondatoare.jpg";
import founder2 from "../Props/blacky.jpg";
import founder3 from "../Props/founders3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Transition } from "react-transition-group";
import { HashLoader } from "react-spinners";

function AboutUs() {
  let theme = localStorage.getItem("theme");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 900);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible2(!isVisible2);
    }, 1700);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible3(!isVisible3);
    }, 2500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible4(!isVisible4);
    }, 2900);
  }, []);

  //Loading
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 700);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            width: "100px",
            margin: "auto",
            paddingTop: "30px",
            paddingBottom: "90px",
            marginBottom: "300px",
            marginTop: "300px",
          }}
        >
          <HashLoader />
        </div>
      ) : (
        <div className={theme}>
          <Transition in={isVisible} timeout={1000}>
            {(state) => (
              <div
                style={{
                  transition: "opacity 1s ease-in-out",
                  opacity: state === "entered" ? 1 : 0,
                }}
              >
                <p class="text-center text-6xl pt-3 pb-3 mb-4">Who are we?</p>
              </div>
            )}
          </Transition>
          <div class="pb-3">
            <Container>
              <Row>
                <Col>
                  <Transition in={isVisible2} timeout={1000}>
                    {(state) => (
                      <div
                        style={{
                          transition: "opacity 1s ease-in-out",
                          opacity: state === "entered" ? 1 : 0,
                        }}
                      >
                        <img
                          className="imgShadow"
                          src={founder}
                          height="400px"
                          width="400px"
                        ></img>
                        <p class="mt-4">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum."
                        </p>
                      </div>
                    )}
                  </Transition>
                </Col>
                <Col>
                  <Transition in={isVisible3} timeout={1200}>
                    {(state) => (
                      <div
                        style={{
                          transition: "opacity 1s ease-in-out",
                          opacity: state === "entered" ? 1 : 0,
                        }}
                      >
                        <img
                          className="imgShadow"
                          src={founder3}
                          height="400px"
                          width="400px"
                        ></img>
                        <p class="mt-4">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum."
                        </p>
                      </div>
                    )}
                  </Transition>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <Transition in={isVisible4} timeout={1000}>
                    {(state) => (
                      <div
                        style={{
                          transition: "opacity 1s ease-in-out",
                          opacity: state === "entered" ? 1 : 0,
                        }}
                      >
                        <img
                          className="imgShadow"
                          src={founder2}
                          height="400px"
                          width="400px"
                        ></img>
                        <p class="mt-4">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum."
                        </p>
                      </div>
                    )}
                  </Transition>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutUs;
