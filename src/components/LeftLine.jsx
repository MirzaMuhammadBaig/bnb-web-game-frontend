import React from "react";

const LeftLine = () => {
  return (
    <div>
      <div>
        <div
          class="w-[2vw] p-4"
          style={{ backgroundColor: "rgba(59,51,100,255)", height: "25vh" }}
        ></div>
        <div
          class="w-[2vw] p-4 border-2 border-t-yellow-400 border-b-yellow-400 border-s-0 border-e-0"
          style={{ backgroundColor: "rgba(44,37,72,255)", height: "7vh" }}
        ></div>
        <div
          class="w-[2vw] p-4"
          style={{ backgroundColor: "rgba(59,51,100,255)", height: "68vh" }}
        ></div>
      </div>
    </div>
  );
};

export default LeftLine;
