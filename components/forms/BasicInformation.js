import React from "react";
import { useState } from "react";
import Required from "../Required";
import { useStepperContext } from "../../contexts/StepperContext";
import { validateInputs } from "../../utils/validateInputs";

function BasicInformation({ labels, locale }) {
  const { userData, setUserData } = useStepperContext();
  const [workStatus, setWorkStatus] = useState("");
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: {
        value,
        required,
        error: required
          ? validateInputs(name, value, locale)
          : name === "phoneNumber"
          ? validateInputs(name, value, locale)
          : null,
      },
    });
  };
  return (
    <>
    <div className="md:flex flex-row gap-10">
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">{labels.fullName}</label>
        <Required />
        <p className="text-xs text-slate-400">{labels.fullNameDesc}</p>
        <div className="input-div-style">
          <input
            required
            className="input-style"
            onChange={handleChange}
            value={userData["fullName"]?.value || ""}
            name="fullName"
            type="text" />
        </div>
        <p className="text-xs text-red-500">{userData["fullName"]?.error}</p>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3 md:mt-4  flex-1">
        <label className="label-style">{labels.phoneNumber} </label>
        <Required />
        <div className="input-div-style">
          <input
            required
            onChange={handleChange}
            value={userData["phoneNumber"]?.value || ""}
            name="phoneNumber"
            className="input-style" />
        </div>
        <p className="text-xs text-red-500">{userData["phoneNumber"]?.error}</p>
      </div>
    </div>

      <div className="md:flex flex-row gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.city} </label>
          <p className="text-xs text-slate-400">{labels.cityDesc}</p>

          <div className="input-div-style">
            <input
              type="text"
              onChange={handleChange}
              value={userData["city"]?.value || ""}
              name="city"
              className="input-style" />
          </div>
        </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3 md:mt-4  flex-1">
        <label className="label-style">{labels.subCity} </label>
        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData["subCity"]?.value || ""}
            name="subCity"
            className="input-style"
            type="text" />
        </div>
      </div>

    </div>
    
    <div className="md:flex mx-2 flex-col">
        <div className="sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.educationStatus} </label>
          <div className="input-div-style">
            <select
              name="educationLevel"
              value={userData["educationLevel"]?.value || ""}
              onChange={handleChange}
              className="select-style md:w-2/3"
              type="text"
            >
              <option value="">{labels.educationStatusOptions[0]}</option>
              <option>{labels.educationStatusOptions[1]}</option>
              <option>{labels.educationStatusOptions[2]}</option>
              <option>{labels.educationStatusOptions[3]}</option>
              <option>{labels.educationStatusOptions[4]}</option>
              <option>{labels.educationStatusOptions[5]}</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="md:flex mx-2 flex-col">
        <div className="sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.workStatus} </label>
          <div className="input-div-style">
            <select
              name="workStatus"
              value={workStatus}
              onChange={(i) => setWorkStatus(i.target.value)}
              className="select-style md:w-2/3"
              type="text"
            >
              <option value="">{labels.workStatusOptions[0]}</option>
              <option>{labels.workStatusOptions[1]}</option>
              <option>{labels.workStatusOptions[2]}</option>
            </select>
          </div>
          {(workStatus !== "" && workStatus === "Student") ||
            workStatus === "ተማሪ" ? (
            <div className="flex gap-4">
              <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                <label className="label-style">
                  {labels.studentOptions[0]}
                </label>
                <p className="text-xs text-slate-400">
                  {labels.studentOptions[1]}
                </p>

                <div className="input-div-style">
                  <input
                    required
                    type="text"
                    onChange={handleChange}
                    value={userData["schoolName"]?.value || ""}
                    name="schoolName"
                    className="input-style" />
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                <label className="label-style">
                  {labels.studentOptions[2]}
                </label>
                <p className="text-xs text-slate-400">
                  {labels.studentOptions[3]}
                </p>

                <div className="input-div-style">
                  <input
                    required
                    type="text"
                    onChange={handleChange}
                    value={userData["fieldofStudy"]?.value || ""}
                    name="fieldofStudy"
                    className="input-style" />
                </div>
              </div>
            </div>
          ) : (workStatus !== "" && workStatus === "Employee") ||
            workStatus === "ሰራተኛ" ? (
            <>
              <div className="flex gap-4">
                <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                  <label className="label-style">
                    {labels.employeOptions[0]}
                  </label>
                  <p className="text-xs text-slate-400">
                    {labels.employeOptions[1]}
                  </p>

                  <div className="input-div-style">
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      value={userData["whatWork"]?.value || ""}
                      name="whatWork"
                      className="input-style" />
                  </div>
                </div>
                <div className=" w-full sm:w-1/2 md:w-2/3  flex-1">
                  <label className="label-style">
                    {labels.employeOptions[2]}
                  </label>
                  <p className="text-xs text-slate-400">
                    {labels.employeOptions[3]}
                  </p>

                  <div className="input-div-style">
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      value={userData["placeWork"]?.value || ""}
                      name="placeWork"
                      className="input-style" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                <label className="label-style">
                  {labels.employeOptions[4]}
                </label>
                <p className="text-xs text-slate-400">
                  {labels.employeOptions[5]}
                </p>

                <div className="input-div-style">
                  <input
                    required
                    type="text"
                    onChange={handleChange}
                    value={userData["whereWork"]?.value || ""}
                    name="whereWork"
                    className="input-style" />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
      
      </div>
    </div>
      
      </>
   
  );
}

export default BasicInformation;
