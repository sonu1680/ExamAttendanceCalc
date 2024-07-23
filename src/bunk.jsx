import { useState } from "react";

function BunkAttendace() {
  const [slotAttend, setSlotAttend] = useState("");
  const [slotsAbsent, setSlotAbsent] = useState("");
  const [bunk, setBunk] = useState("");
  const [currentAttendance, setCurrentAttendance] = useState();

 
  const getAttendance = () => {
    let totalSlot = parseInt(slotAttend) + parseInt(slotsAbsent);
    let result;
    let slotAttends = parseInt(slotAttend);
    let bunkslots = 0;
    do {
      result = (slotAttends * 100) / totalSlot;
      if (bunkslots === 0) {
        setCurrentAttendance(result.toFixed(2));
      }

      if (result < 75) {
        break;
      }
      slotAttends--;
      bunkslots++;
      console.log(result);
    } while (result > 75);
    setBunk(bunkslots);
    console.log(bunkslots, "bunkslots");
  };

  return (
    <>
      <div className="container bg-blue-950 w-[100%] h-full flex justify-center items-start">
        <div className="box h-full w-[500px] bg-gray-900 flex items-center flex-col ">
         
          <div className="inputfield w-full p-4 mt-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Enter present slots</span>
              </div>
              <input
                type="number"
                placeholder="Enter"
                className="input input-bordered w-full"
                onChange={(e) => setSlotAttend(e.target.value)}
                value={slotAttend}
              />
            </label>

            <label className="form-control w-full mt-4">
              <div className="label">
                <span className="label-text">Enter absent slots</span>
              </div>
              <input
                type="number"
                placeholder="Enter"
                className="input input-bordered w-full"
                onChange={(e) => setSlotAbsent(e.target.value)}
                value={slotsAbsent}
              />
            </label>
          </div>
          <button className="btn btn-wide" onClick={() => getAttendance()}>
            Calculate
          </button>
          <div className="result h-28 w-full mt-4 rounded-md border border-white flex flex-col justify-center items-center font-bold "  >
            <p>Your current Attendance is {currentAttendance}%</p>
            <p>You can Bunk total {bunk} slots</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BunkAttendace;
