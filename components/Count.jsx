import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Click count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Count;
