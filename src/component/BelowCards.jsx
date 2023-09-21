import React from "react";

const BelowCards = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-0 mt-8 text-gray-300">
        <div
          className="p-4 shadow-custom rounded-lg relative"
          style={{ backgroundColor: "rgba(59,51,100,255)" }}
        >
          <h2 className="text-xl font-semibold mb-2 text-amber-300">
            PROFITABILITY METRICS
          </h2>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Tickets Needed To Be FIRST PLACE:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">1 Ticket</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Cost Of Tickets:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              0.00795 BNB
            </span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Percentage That The First Place Wins:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">20%</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Amount To Be Won:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              8.000000600 BNB
            </span>
          </div>
          &nbsp;
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Tickets Needed To Be SECOND PLACE:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">1 Ticket</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Cost Of Tickets:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              0.00795 BNB
            </span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Percentage That The First Seconds Wins:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">10%</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Amount To Be Won:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              4.000000300 BNB
            </span>
          </div>
          &nbsp;
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Tickets Needed To Be THIRD PLACE:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">1 Ticket</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Cost Of Tickets:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              0.00795 BNB
            </span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Percentage That The Third Place Wins:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">5%</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Amount To Be Won:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              2.000000150 BNB
            </span>
          </div>
        </div>

        {/* ////////////////////////////////// */}

        <div
          className="col-span-2 p-4 m-2 shadow-md rounded-lg relative"
          style={{ backgroundColor: "rgba(59,51,100,255)" }}
        >
          <h2 className="text-xl font-semibold mb-2">Middle Card</h2>
          <p>Content of middle card</p>
        </div>

        {/* ///////////////////////////////////////// */}

        <div
          className="p-4 shadow-md rounded-lg relative"
          style={{ backgroundColor: "rgba(59,51,100,255)" }}
        >
          <h2 className="text-xl font-semibold mb-2">ROUND STATISTICS</h2>
          <p className="mb-1 font-light text-xs">
            Total Tickets Bought: <span>0 Tickets</span>
          </p>
          &nbsp;
          <p className="mb-1 font-light text-xs">
            BNB Spent On Tickets: <span>0 BNB</span>
          </p>
          &nbsp;
          <p className="mb-1 font-light text-xs">
            Tokens Bought Back And Burned: <span>0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BelowCards;
