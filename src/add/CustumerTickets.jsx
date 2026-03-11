import React from "react";

const CustumerTickets = ({customer, btnProgress, setBtnProgress, handleProgress}) => {

  
  return (
    <div onClick={()=>handleProgress(customer)}>
      <div className="bg-white md:p-5 p-2 rounded-lg space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{customer.title}</h1>
          <p>{customer.status}</p>
        </div>
        <p className="text-base">{customer.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-xs flex justify-between items-center gap-4">
            <h1>{customer.id}</h1>
            <p className="text-red-600 font-bold">{customer.priority}</p>
          </div>

          <div className="text-xs flex justify-between items-center gap-4">
            <p>{customer.customer.name}</p>
            <p>{customer.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustumerTickets;
