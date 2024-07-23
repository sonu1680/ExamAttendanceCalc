import { useState } from "react";

function ExamAttendance() {
  const [slotAttend, setSlotAttend] = useState("");
  const [slotsHappend, setSlotHappend] = useState("");
  const [AbsentSlot, setAbsentslot] = useState("");
  const [weeks, setWeeks] = useState("");
  const [weekSlot, setWeekslot] = useState("");
  const [result, setResult] = useState();
  const [availableSlotstillexam, setAvailableSlotstillexam] = useState("");

  const getAttendace = () => {
    let toalSlot = parseInt(AbsentSlot) + parseInt(slotAttend);
    setSlotHappend(parseInt(toalSlot));
    console.log(toalSlot);

    const num1 = parseInt(weeks) * parseInt(weekSlot);
    setAvailableSlotstillexam(num1);
    const willAttend = parseInt(slotAttend) + num1;
    const willHapped = toalSlot + num1;

    const result = (willAttend * 100) / willHapped;
    console.log("numbe rof require to get");
    setResult(result.toFixed(2));
    console.log(result);

    // console.log(num, "%");
  };

  return (
    <>
      <div className="container bg-gray-950 w-[100%] h-full flex justify-center items-start ">
        <div className="box h-full w-[500px] bg-gray-900 flex items-center flex-col ">
          <div className="inputfield w-full  p-4 mt-6  ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text  ">Enter Present Slots</span>
              </div>
              <input
                type="number"
                placeholder="Enter"
                className="input input-bordered w-full "
                onChange={(e) => setSlotAttend(e.target.value)}
                value={slotAttend}
              />
            </label>

            <label className="form-control w-full mt-4 ">
              <div className="label">
                <span className="label-text">Enter Absent Slots</span>
              </div>
              <input
                type="number"
                placeholder="Enter"
                className="input input-bordered w-full "
                onChange={(e) => setAbsentslot(e.target.value)}
                value={AbsentSlot}
              />
            </label>
            <label className="form-control w-full mt-4 ">
              <div className="label">
                <span className="label-text">
                  Enter total no. of weeks available till exam
                </span>
              </div>
              <input
                type="number"
                placeholder="Enter"
                className="input input-bordered w-full "
                onChange={(e) => setWeeks(e.target.value)}
                value={weeks}
              />
            </label>
            <label className="form-control w-full mt-4 ">
              <div className="label">
                <span className="label-text">
                  Enter total slots happen per week (excluding libray slot)
                </span>
              </div>
              <input
                type="number"
                placeholder="Enter"
                className="input input-bordered w-full "
                onChange={(e) => setWeekslot(e.target.value)}
                value={weekSlot}
              />
            </label>
          </div>
          <button className="btn btn-wide" onClick={() => getAttendace()}>
            Calculate
          </button>
          <div className="result h-28 w-full  mt-4 rounded-md border border-white flex justify-center items-center font-bold ">
            Your attendance till Exam will be : {result}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamAttendance;
