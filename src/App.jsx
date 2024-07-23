import React, { useState } from "react";
import BunkAttendace from "./bunk";
import CurrentAttendace from "./current";
import ExamAttendance from "./examatnd";
const App = () => {
  const data = [
    { id: 0, title: "Current Attendance" },
    { id: 1, title: "Attendance Till Exam" },
    { id: 2, title: "Bunk Calculator" },
  ];

  const btnClick = (id) => {
    setSelectedItemId(id);
  };
  const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <>
      <div className="main w-[550px]  md:w-full h-[120vh] flex justify-center">
        <div className="conatiner  h-[790px] w-[500px] bg-gray-900   flex justify-center items-center flex-col p-4  border-2 border-white rounded-xl  ">
          <div className="selection w-96 h-[120px] bg-gray-900 flex justify-between">
            {data.map((item) => (
              <div
                className={`box1 h-24 w-28 rounded-md font-bold text-center text-xs flex flex-col justify-center items-center border-2 transition ease-in-out duration-300 hover:bg-gray-800 ${
                  selectedItemId === item.id
                    ? "border-white"
                    : "border-gray-600"
                }`}
                key={item.id}
                onClick={() => btnClick(item.id)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="cal bg-gray-900 w-full h-full mt-10 flex justify-start items-start">
            {selectedItemId == 0 ? (
              <CurrentAttendace />
            ) : selectedItemId == 1 ? (
              <ExamAttendance />
            ) : (
              <BunkAttendace />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
