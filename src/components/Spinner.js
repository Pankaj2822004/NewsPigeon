import React from "react";
import ch from "./h.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      {/* Use rgba() to specify a background color with opacity */}
      <img
        src={ch}
        alt="Loading..."
        style={{
          height: "280px",
          opacity: 0.8
        }}
      />
    </div>
  );
};

export default Spinner;
