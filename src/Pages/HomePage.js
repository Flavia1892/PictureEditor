import React from "react";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";

function HomePage() {
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

  return (
    <div className={theme}>
      <p class="text-4xl text-center pt-3">Mini Me</p>
      <Switch onClick={toggleTheme}></Switch>
    </div>
  );
}

export default HomePage;
