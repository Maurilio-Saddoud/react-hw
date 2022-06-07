import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="counterContainer" style={{ textAlign: "center" }}>
      {num}
      <div>
        <button
          style={{ margin: 10, width: 50, height: 25 }}
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +
        </button>
        <button
          style={{ margin: 10, width: 50, height: 25 }}
          onClick={() => {
            setNum(num - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
