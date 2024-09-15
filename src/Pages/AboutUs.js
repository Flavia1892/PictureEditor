import React from "react";
import founder from "../Props/fondatoare.jpg";
import founder2 from "../Props/blacky.jpg";
import { useState } from "react";

function AboutUs() {
  let theme = localStorage.getItem("theme");
  return (
    <div className={theme}>
      
      <p class="text-center text-6xl">
        Who are we?
      </p>
      <div class="container">
        <div class="row">
          <div class="col">
            <img src={founder}></img>
          </div>
          <div class="col">
            <img src={founder2}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
