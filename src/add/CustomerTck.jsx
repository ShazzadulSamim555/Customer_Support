import React from "react";
import CustumerTickets from "./CustumerTickets";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const CustomerTck = ({
  customers,
  setBtnProgress,
  btnProgress,
  handleProgress,
  addResolved,
  setResolved,
  resolved,
}) => {
  return (
    <div className="md:max-w-11/12 mx-auto flex md:flex-row flex-col gap-7">
      <div className="md:w-9/12 space-y-5">
        <h2 className="text-xl font-semibold">Customer Tickets</h2>

        <div className="grid md:grid-cols-2  gap-4">
          {customers.map((customer) => (
            <CustumerTickets
              btnProgress={btnProgress}
              setBtnProgress={setBtnProgress}
              customer={customer}
              handleProgress={handleProgress}
            ></CustumerTickets>
          ))}
        </div>
      </div>

      <div className="md:w-3/12 space-y-5">
        <h2 className="text-xl font-semibold">Task Status</h2>

        {btnProgress && btnProgress.length > 0 ? (
          <div className="grid md:grid-cols-1 grid-cols-2 gap-3">
            {btnProgress.map((addTask) => (
              <TaskStatus
                addTask={addTask}
                btnProgress={btnProgress}
                addResolved={addResolved}
                resolved={resolved}
                setResolved={setResolved}
              ></TaskStatus>
            ))}
          </div>
        ) : (
          <p className="text-sm italic text-gray-500 text-center">
            No Task In-Progress
          </p>
        )}

        <div className="space-y-3 mt-7">
          <h2 className="text-xl font-semibold">Resolved Status</h2>
          <div className="grid md:grid-cols-1 grid-cols-2 gap-3">
            {resolved.length > 0 ? (
              resolved.map((item) => (
                <ResolvedTask addResolve={item}></ResolvedTask>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic text-center">
                No Resolved Task are here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTck;
