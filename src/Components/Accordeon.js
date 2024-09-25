import React from "react";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

function Accordeon({ children, eventKey }) {
  let theme = localStorage.getItem("theme");
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );
  return (
    <button
      type="button"
      className={theme}
      style={{width:"100%", backgroundColor:{theme},fontSize:"30px"}}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default Accordeon;
