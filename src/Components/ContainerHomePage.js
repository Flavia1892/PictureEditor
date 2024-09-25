import React from "react";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Carousel from "./Carousel";
import cat1 from "../Props/cat1.webp";
import cat2 from "../Props/cat2.jpeg";
import dog from "../Props/dog1.jpg";
import animals from "../Props/animals.jpeg";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DownloadButton from "./DownloadButton";
import { Transition } from "react-transition-group";

function ContainerHomePage() {
  const [theme, setTheme] = useState(() => {
    const initalTheme = localStorage.getItem("theme");
    return initalTheme ? initalTheme : "light";
  });

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      console.log(theme);
      return newTheme;
    });
  }
  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  //Image upload handling
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  //End of image handling

  const images = [cat1, cat2, dog, animals];

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", true);
    Cookies.set("theme", theme);
  };

  const handleRejectCookies = () => {
    Cookies.remove("cookieConsent","theme");
  };

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("modalDisplayed", "true");
  };

  const modalDisplayed = sessionStorage.getItem("modalDisplayed");

  //Modal for success Message at cookie agreement
  const [success, setSuccess] = useState(false);
  const handleSuccess = () => {
    setSuccess(true);
  };
  const handleFail = () => {
    setSuccess(false);
  };

  //Transition of carrousel and other elements
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTitleVisible(!isVisible);
    }, 100);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setTextVisible(!isVisible);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1700);
  }, []);

  return (
    <div className={theme}>
      <Transition in={titleVisible} timeout={500}>
        {(state) => (
          <div
            style={{
              transition: "opacity 1s ease-in-out",
              opacity: state === "entered" ? 1 : 0,
            }}
          >
            <p class="text-6xl text-center pt-3 ">Photo AI Editor</p>
          </div>
        )}
      </Transition>
      <Switch onClick={toggleTheme}></Switch>

      <div class="container">
        <Transition in={textVisible} timeout={1000}>
          {(state) => (
            <div
              style={{
                transition: "opacity 1s ease-in-out",
                opacity: state === "entered" ? 1 : 0,
              }}
            >
              <div class="row">
                <div class="col">
                  <p class="text-2xl">Please upload your image here</p>
                  <br></br>
                  <div class="pb-4 pt-3">
                    <input type="file" onChange={handleChange} />
                    <img src={file} fileName="picture" />
                  </div>
                </div>
                <div class="col">
                  <DownloadButton file={file} />
                </div>
              </div>
            </div>
          )}
        </Transition>

        <div class="row pb-4">
          <Transition in={isVisible} timeout={1000}>
            {(state) => (
              <div
                style={{
                  transition: "opacity 1s ease-in-out",
                  opacity: state === "entered" ? 1 : 0,
                }}
              >
                <Carousel images={images} />
              </div>
            )}
          </Transition>
        </div>
      </div>

      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        {!modalDisplayed && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cookie Agreement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This website uses cookies to improve your experience. Do you
              accept cookies?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose();
                  handleAcceptCookies();
                  handleSuccess();
                }}
              >
                Agree and close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleClose();
                  handleRejectCookies();
                  handleSuccess();
                }}
              >
                Reject and close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
      <Modal show={success} onHide={handleFail}>
        <Modal.Header closeButton>
          <Modal.Title>Your options have been saved</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your choice!</Modal.Body>
      </Modal>

      <sub>Cookie set: {Cookies.get("cookieConsent")}</sub>
    </div>
  );
}

export default ContainerHomePage;
