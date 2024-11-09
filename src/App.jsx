import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    fullName: "",
    department: "",
    year: "",
    university: "",
    semester: "",
    streetAddress: "",
    city: "",
    area: "",
    postalCode: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (formNo === 1 && state.fullName && state.department && state.year) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      state.university &&
      state.semester &&
      state.streetAddress
    ) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fill up all input fields");
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const finalSubmit = () => {
    if (state.city && state.area && state.postalCode) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Please fill up all input fields");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-[370px] rounded-md shadow-md bg-white p-5">
        <div className="flex justify-center items-center">
          {formArray.map((v, i) => (
            <>
              <div
                className={`w-[35px] my-3 text-white rounded-full ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? "bg-[#16a34a]"
                    : "bg-slate-400"
                } h-[35px] flex justify-center items-center`}
              >
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  className={`w-[85px] h-[2px] ${
                    formNo === i + 2 || formNo === formArray.length
                      ? "bg-[#16a34a]"
                      : "bg-slate-400"
                  }`}
                ></div>
              )}
            </>
          ))}
        </div>

        {formNo === 1 && (
          <div>
            <div className="flex flex-col mb-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                value={state.fullName}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-[#16a34a] rounded-md"
                type="text"
                name="fullName"
                placeholder="Full Name"
                id="fullName"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="department">Department</label>
              <input
                value={state.department}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-[#16a34a] rounded-md"
                type="text"
                name="department"
                placeholder="Department"
                id="department"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="year">Year</label>
              <input
                value={state.year}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-[#16a34a] rounded-md"
                type="number"
                name="year"
                placeholder="Year"
              />
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#16a34a]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 2 && (
          <div>
            <div className="flex flex-col mb-2">
              <label className="text-slate-500" htmlFor="university">
                University
              </label>
              <input
                value={state.university}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-[#16a34a] rounded-md"
                type="text"
                name="university"
                placeholder="University Name"
                id="university"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-slate-500" htmlFor="semester">
                Semester
              </label>
              <input
                value={state.semester}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-[#16a34a] rounded-md"
                type="text"
                name="semester"
                placeholder="Semester"
                id="semester"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-slate-500" htmlFor="streetAddress">
                Street Address
              </label>
              <textarea
                value={state.streetAddress}
                onChange={inputHandle}
                row="10"
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-[#16a34a] rounded-md"
                type="text"
                name="streetAddress"
                placeholder="Street Address"
              ></textarea>
            </div>
            <div className="mt-4 gap-3 flex justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#16a34a]"
              >
                Previous
              </button>
              <button
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#16a34a]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 3 && (
          <div>
            <div className="flex flex-col mb-2">
              <label htmlFor="city">City</label>
              <input
                value={state.city}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-[#16a34a] rounded-md"
                type="text"
                name="city"
                placeholder="City"
                id="city"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="area">Area</label>
              <input
                value={state.area}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-[#16a34a] rounded-md"
                type="text"
                name="area"
                placeholder="Area"
                id="area"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                value={state.postalCode}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-[#16a34a] rounded-md"
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                id="postalCode"
              />
            </div>
            <div className="mt-4 gap-3 flex justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#16a34a]"
              >
                Previous
              </button>
              <button
                onClick={finalSubmit}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#16a34a]"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
