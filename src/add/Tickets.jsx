import React from "react";
import bgImg from "../assets/vector1.png";

const Tickets = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex space-x-10 h-56">
        <div
          className=" w-full rounded-lg flex justify-center items-center"
          style={{
            background: `url(${bgImg}), url(${bgImg}), linear-gradient(to right, #22d3ee, #0e7490)`,
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundPosition: "left center, right center, center",
            backgroundSize: "contain, contain, cover",
          }}
        >
          <div className="text-white flex flex-col justify-center items-center gap-4">
            <h4 className="text-2xl">In-Progress</h4>
            <h1 className="text-5xl font-bold">0</h1>
          </div>
        </div>

        <div
          className="w-full flex justify-center items-center rounded-lg"
          style={{
            background: `url(${bgImg}), url(${bgImg}), linear-gradient(to right, #84cc16, #166534)`,
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundPosition: "left,right,center",
          }}
        >
          <div className="text-white flex flex-col justify-center items-center gap-4">
            <h4 className="text-2xl">Resolved</h4>
            <h1 className="text-5xl font-bold">0</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
