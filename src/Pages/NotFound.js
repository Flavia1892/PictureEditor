import React from "react";
import imgCat from "../Props/pagenotfound.jpg";

function NotFound() {
  return (
    <>
    <p class="text-6xl text-center"> Error</p>
      <img src={imgCat} class="m-auto" width="1300px" height="800px"></img>
    </>
  );
}

export default NotFound;
