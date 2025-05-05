import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isHovered, setHovering] = useState(false);

  function HandleClick() {
    setHeadingText("Submitted");
  }

  function HandleMouseOver() {
    setHovering(true);
  }

  function HandleMouseOut() {
    setHovering(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ background: isHovered ? "black" : "white" }}
        onClick={HandleClick}
        onMouseOver={HandleMouseOver}
        onMouseOut={HandleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
