import React, { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        This amazing button is better than Vikas!
      </button>
      <p>Counter: {count}</p>
    </div>
  );
}

export default CounterButton;
