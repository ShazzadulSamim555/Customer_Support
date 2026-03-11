import React from "react";
import CustumerTickets from "./CustumerTickets";
import TaskStatus from "./TaskStatus";

const CustomerTck = ({ customers,setBtnProgress, btnProgress, handleProgress }) => {
  
  return (
    <div className="md:max-w-11/12 mx-auto flex md:flex-row flex-col gap-7">
      <div className="md:w-9/12 space-y-5">
        <h2 className="text-xl font-semibold">Customer Tickets</h2>

        <div className="grid md:grid-cols-2  gap-4">
          {customers.map((customer) => (
            <CustumerTickets btnProgress={btnProgress} setBtnProgress={setBtnProgress}  customer={customer} handleProgress={handleProgress}></CustumerTickets>
          ))}
        </div>
      </div>

      <div className="md:w-3/12 space-y-5">
        <h2 className="text-xl font-semibold">Task Status</h2>

        <TaskStatus></TaskStatus>
      </div>
    </div>
  );
};

export default CustomerTck;
