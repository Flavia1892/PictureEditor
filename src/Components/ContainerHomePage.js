import React from "react";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Carousel from "./Carousel";
import cat1 from "../Props/cat1.webp";
import cat2 from "../Props/cat2.jpeg";
import dog from "../Props/dog1.jpg";
import animals from "../Props/animals.jpeg";

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

  const images = [ cat1 , cat2 ,  dog ,  animals ];
  

  return (
    <div className={theme}>
      <p class="text-6xl text-center pt-3 ">Photo AI Editor</p>
      <Switch onClick={toggleTheme}></Switch>
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="text-2xl">Please upload your image here</p>
            <br></br>
            <div class="pb-4 pt-3">
              <input type="file" onChange={handleChange} />
              <img src={file} />
            </div>
          </div>
          <div class="col"></div>
        </div>
        <div class="row pb-4">
          <h1>Simple React Carousel</h1>
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
}

export default ContainerHomePage;
