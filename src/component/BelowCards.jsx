import React from "react";

const BelowCards = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-0 mt-8 text-center text-white">
        <div className="p-4 shadow-md rounded-lg relative" style={{backgroundColor:"rgba(59,51,100,255)"}}>
          <h2 className="text-xl font-semibold mb-2">PROFITABILITY METRICS</h2>
          <p className="mb-1 font-light text-xs">Tickets Needed To Be FIRST PLACE: <span>1 Ticket</span></p>
          <p className="mb-1 font-light text-xs">Cost Of Tickets: <span>0.00795 BNB</span></p>
          <p className="mb-1 font-light text-xs">Percentage That The First Place Wins: <span>20%</span></p>
          <p className="mb-1 font-light text-xs">Amount To Be Won: <span>8.000000600 BNB</span></p>
          &nbsp;
          <p className="mb-1 font-light text-xs">Tickets Needed To Be SECOND PLACE: <span>1 Ticket</span></p>
          <p className="mb-1 font-light text-xs">Cost Of Tickets: <span>0.00795 BNB</span></p>
          <p className="mb-1 font-light text-xs">Percentage That The First Seconds Wins: <span>10%</span></p>
          <p className="mb-1 font-light text-xs">Amount To Be Won: <span>4.000000300 BNB</span></p>
          &nbsp;
          <p className="mb-1 font-light text-xs">Tickets Needed To Be THIRD PLACE: <span>1 Ticket</span></p>
          <p className="mb-1 font-light text-xs">Cost Of Tickets: <span>0.00795 BNB</span></p>
          <p className="mb-1 font-light text-xs">Percentage That The Third Place Wins: <span>50%</span></p>
          <p className="mb-1 font-light text-xs">Amount To Be Won: <span>2.000000150 BNB</span></p>
        </div>





        {/* ////////////////////////////////// */}





        <div className="col-span-2 p-4 shadow-md rounded-lg relative" style={{backgroundColor:"rgba(59,51,100,255)"}}>
          <h2 className="text-xl font-semibold mb-2">Middle Card</h2>
          <p>Content of middle card</p>
        </div>


        {/* ///////////////////////////////////////// */}






        <div className="p-4 shadow-md rounded-lg relative" style={{backgroundColor:"rgba(59,51,100,255)"}}>
          <h2 className="text-xl font-semibold mb-2">ROUND STATISTICS</h2>
          <p className="mb-1 font-light text-xs">Total Tickets Bought: <span>0 Tickets</span></p>
          &nbsp;
          <p className="mb-1 font-light text-xs">BNB Spent On Tickets: <span>0 BNB</span></p>
          &nbsp;
          <p className="mb-1 font-light text-xs">Tokens Bought Back And Burned: <span>0</span></p>
        </div>
      </div>
    </div>
  );
};

export default BelowCards;
