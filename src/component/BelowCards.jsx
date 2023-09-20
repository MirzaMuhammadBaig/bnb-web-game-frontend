import React from "react";

const BelowCards = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-0 mt-8 text-center">
        <div className="bg-white p-4 shadow-md rounded-lg relative">
          <h2 className="text-xl font-semibold mb-2">Top Cards</h2>
          <p>Content of top cards</p>
        </div>
        <div className="col-span-2 bg-white p-4 shadow-md rounded-lg relative">
          <h2 className="text-xl font-semibold mb-2">Top Cards</h2>
          <p>Content of top cards</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg elative">
          <h2 className="text-xl font-semibold mb-2">Top Cards</h2>
          <p>Content of top cards</p>
        </div>
      </div>
    </div>
  );
};

export default BelowCards;
