import { useState } from "react";

function CurrentAttendace() {
  const [slotAttend, setSlotAttend] = useState("");
  const [slotsHappend, setSlotHappend] = useState("");
  const [result, setResult] = useState(false);

  const getAttendace = () => {
    console.log(slotsHappend, slotAttend);
    let totalslots = parseInt(slotAttend) + parseInt(slotsHappend);
    const num = (slotAttend * 100) / totalslots;
    setResult(num.toFixed(2));
    console.log(num, "%");
  };

  return (
    <>
      <div className="container bg-gray-900 w-[100%] h-full flex justify-center items-start ">
        <div className="box h-full w-[500px] bg-gray-900 flex items-center flex-col ">
          

          <div className="inputfield w-full  p-4 mt-6  ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text  ">
                  Enter Present Slots
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter"
                className="input input-bordered w-full "
                onChange={(e) => setSlotAttend(e.target.value)}
                value={slotAttend}
              />
            </label>

            <label className="form-control w-full mt-4 ">
              <div className="label">
                <span className="label-text">
                  Enter Absent Slots
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter"
                className="input input-bordered w-full "
                onChange={(e) => setSlotHappend(e.target.value)}
                value={slotsHappend}
              />
            </label>
          </div>
          <button className="btn btn-wide" onClick={() => getAttendace()}>
            Calculate
          </button>
          <div className="result h-28 w-full  mt-4 rounded-md border border-white  flex justify-center items-center font-semibold text-xl  ">Your curret Attendace is : {result}%</div>
        </div>
      </div>
    </>
  );
}

export default CurrentAttendace;
