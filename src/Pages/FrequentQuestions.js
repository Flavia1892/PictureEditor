import React from "react";
import { HashLoader } from "react-spinners";
import { useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Accordeon from "../Components/Accordeon";
import { Banner } from "../Components/Banner";

function FrequentQuestions() {
  //Banner
  const images = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  //end of banner
  let theme = localStorage.getItem("theme");
  let bgColor = "";
  let textColor = "";
  if (theme !== "light") {
    bgColor = " rgb(34, 34, 34)";
    textColor = "white";
  } else {
    bgColor = "whitesmoke";
    textColor = "black";
  }
  //Loading
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
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
          <div class="text-4xl text-center pt-3 pb-3 mb-5 ">
            Frequently Asked Questions
          </div>

          <Accordion defaultActiveKey="0">
            <Card style={{ backgroundColor: bgColor, color: textColor }}>
              <Card.Header>
                <Accordeon eventKey="0">Question 1</Accordeon>
              </Card.Header>
              <Accordion.Collapse eventKey="0" className="accordeon">
                <Card.Body class="pl-20 pr-20 pt-7 pb-7 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: bgColor, color: textColor }}>
              <Card.Header>
                <Accordeon eventKey="1">Question 2</Accordeon>
              </Card.Header>
              <Accordion.Collapse eventKey="1" className="accordeon">
                <Card.Body class="pl-20 pr-20 pt-7 pb-7 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: bgColor, color: textColor }}>
              <Card.Header>
                <Accordeon eventKey="3">Question 3</Accordeon>
              </Card.Header>
              <Accordion.Collapse eventKey="3" className="accordeon">
                <Card.Body class="pl-20 pr-20 pt-7 pb-7 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: bgColor, color: textColor }}>
              <Card.Header>
                <Accordeon eventKey="4">Question 3</Accordeon>
              </Card.Header>
              <Accordion.Collapse eventKey="4" className="accordeon">
                <Card.Body class="pl-20 pr-20 pt-7 pb-7 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: bgColor, color: textColor }}>
              <Card.Header>
                <Accordeon eventKey="5">Question 3</Accordeon>
              </Card.Header>
              <Accordion.Collapse eventKey="5" className="accordeon">
                <Card.Body class="pl-20 pr-20 pt-7 pb-7 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <div>
            <Banner images={images} speed={15000} />
          </div>
        </div>
      )}
    </>
  );
}

export default FrequentQuestions;
