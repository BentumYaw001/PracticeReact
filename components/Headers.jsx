import React, { useState } from "react";

function Headers(props) {
  const [display, setDisplay] = useState("interface");
  return (
    <>
      <nav>
        <p className="NavItem" id="learn">
          Learn {props.hithere}
        </p>

        <input
          type="text"
          name="text"
          id=""
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
