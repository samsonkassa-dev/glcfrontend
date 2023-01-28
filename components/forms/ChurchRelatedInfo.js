import Required from "../Required";
import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { validateInputs } from "../../utils/validateInputs";
import { FormControlLabel, Checkbox } from "@mui/material";

function ChurchRelatedInfo({ labels, locale }) {
  const { userData, setUserData } = useStepperContext();
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
          : name === "inviterPhone" 
          ? validateInputs(name, value, locale)
          : null,
      },
    });
  };
  return (
    <div className=" ">
      <div className="md:flex flex-row gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.whenSaved}</label>
          <div className="input-div-style">
            <input
              type="text"
              title={labels.textInputRequired}
              onChange={handleChange}
              value={userData["whenSaved"]?.value || ""}
              name="whenSaved"
              className="input-style"
            />
          </div>
          <p className="text-xs text-red-500">{userData["whenSaved"]?.error}</p>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.whichChurch}</label>
          <div className="input-div-style">
            <input
              type="text"
              title={labels.textInputRequired}
              onChange={handleChange}
              value={userData["whichChurch"]?.value || ""}
              name="whichChurch"
              className="input-style"
            />
          </div>
        </div>
      </div>

      <div className="md:flex  flex-row gap-10">
        <div className=" sm:w-1/2 mx-2 md:w-2/3  flex-1">
          <label className="label-style">{labels.whoInvited[0]}</label>
          <div className="w-full md:mx-4  mt-3 sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.whoInvited[1]}</label>
            <p className="text-xs text-slate-400">{labels.whoInvited[2]}</p>
            <div className="input-div-style">
              <input
                type="text"
                title={labels.textInputRequired}
                onChange={handleChange}
                value={userData["inviterName"]?.value || ""}
                name="inviterName"
                className="input-style"
              />
            </div>
            <p className="text-xs text-red-500">
              {userData["inviterName"]?.error}
            </p>
          </div>

          <div className="w-full md:mx-4  mt-3 sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.whoInvited[3]}</label>
            <div className="input-div-style">
              <input
                type="text"
                title={labels.textInputRequired}
                onChange={handleChange}
                value={userData["inviterPhone"]?.value || ""}
                name="inviterPhone"
                className="input-style"
              />
            </div>
            <p className="text-xs text-red-500">
              {userData["inviterPhone"]?.error}
            </p>
          </div>
          <div className="flex md:mx-4 gap-10 mt-5">
            <div className="flex space-x-1 items-center">
              <label className="">
              {labels.whoInvited[4]}
              </label>
              <input
                onChange={handleChange}
                value="Male"
                name="gender"
                type="radio"
              />
            </div>
            <div className="flex space-x-1 items-center">
              <label className="">{labels.whoInvited[5]}</label>

              <input
                onChange={handleChange}
                value="Female"
                name="gender"
                type="radio"
              />
            </div>
          </div>
        </div>

        <div className="mx-2 w-full md:mt-6 sm:w-1/2 md:w-2/3 flex-1">
          <div className="flex flex-col  mt-3">
            <FormControlLabel
              label={labels.restoration}
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
            <FormControlLabel
              label={labels.foundation1}
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
            <FormControlLabel
              label={labels.foundation2}
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
            <FormControlLabel
              label={labels.ministerTraining}
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
          </div>
        </div>
      </div>

    
        <div className=" mt-3 mx-2 sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.whichDepartement}</label>
          <div className="input-div-style">
            <input
              type="text"
              onChange={handleChange}
              value={userData["departmentServes"]?.value || ""}
              name="departmentServes"
              className="input-style"
            />
          </div>
        </div>
  
    </div>
  );
}
export default ChurchRelatedInfo;
