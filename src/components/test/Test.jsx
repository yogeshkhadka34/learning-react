import "./test.css";

import React from "react";

const Test = () => {
  const [data, setData] = React.useState(true);
  return (
    <div className="test__content">
      <div className="test__first" style={{ opacity: data ? 100 : 0 }}>
        First div is showing
      </div>

      <button onClick={() => setData((prevState) => !prevState)}>
        Show first
      </button>
    </div>
  );
};

export default Test;
