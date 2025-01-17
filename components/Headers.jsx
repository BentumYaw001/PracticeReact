import React, { useState } from "react";
import "../src/index.css";
function Headers(props) {
  const [display, setDisplay] = useState("interface");
  return (
    <>
      <nav>
        <p className="NavItem  bg-slate-600" id="learn">
          Learn {props.hithere}
        </p>

        <input
          type="text"
          name="text"
          onChange={(e) => {
            setDisplay(e.target.value);
          }}
        />
        <p className="NavItem">{display}</p>
        <p className="NavItem">Community</p>

        <p className="NavItem">Blog</p>
      </nav>
    </>
  );
}

export default Headers;
