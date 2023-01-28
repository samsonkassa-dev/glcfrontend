import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { validateInputs } from "../../utils/validateInputs";
import Required from "../Required";
import { useState } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import UploadFile from "./UploadImage";

import AddChildren from "./AddChildren";


function ChurchRelatedInfo2({ labels, locale, data }) {
  const { userData, setUserData } = useStepperContext();
  const { checkedOption, setCheckedOption } = useState(null);
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
        error: required ? validateInputs(name, value, locale) : null,
      },
    });
  };


  return (
    <div>
      <div className="md:flex  flex-row gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/ flex-col  flex flex-1">
          <label className="label-style text-[15px]">{labels.maritalStatus}</label>
          <div className="flex flex-col  mt-3">
            <FormControlLabel
              label={labels.married}
              control={
                <Checkbox
                  color="warning"
                  value="Married"
                  name="married"
                  onChange={handleChange}
                />
              }
            />
            <FormControlLabel
              label={labels.single}
              control={
                <Checkbox
                  color="warning"
                  value="Single"
                  onChange={handleChange}
                />
              }
            />
            <FormControlLabel
              label={labels.divorced}
              control={
                <Checkbox
                  color="warning"
                  value="Divorced"
                  onChange={handleChange}
                />
              }
            />
            <FormControlLabel
              label={labels.widow}
              control={
                <Checkbox
                  color="warning"
                  value="Widow"
                  onChange={handleChange}
                />
              }
            />

            <label className="label-style">{labels.childChurch[0]}</label>
            <div className="flex md:mx-4 gap-10 mt-5">
              <div className="flex space-x-1 items-center">
                <label className="">{labels.childChurch[1]}</label>
                <input
                  onChange={handleChange}
                  value="Yes"
                  name="YorN"
                  type="radio"
                />
              </div>
              <div className="flex space-x-1 items-center">
                <label className="">{labels.childChurch[2]}</label>
                <input
                  onChange={handleChange}
                  value="No"
                  name="YorN"
                  type="radio"
                />
              </div>
            </div>
            <label className="label-style">{labels.childNumber} </label>
            <div className="flex mt-3 gap-10 ">
              <div className="flex  items-center">
                <div className="input-div-style">
                  <input
                    className="input-style"
                    onChange={handleChange}
                    value={userData["numberofChildren"]?.value || ""}
                    name="numberofChildren"
                    type="number"
                  />
                </div>
              </div>
            </div>

                <div className="flex flex-row gap-2 ">
                    <AddChildren/>
                </div>
          </div>
        </div>
        <div className=" sm:w-1/2 mt-3 mx-2 md:w-2/3  flex-1">
          <label className="label-style">
            {labels.ministryExperiance}
          </label>


          <div className="input-div-style">
            <textarea
              rows={2}
              onChange={handleChange}
              value={userData["ministryExperiance"]?.value || ""}
              name="wdyeftp"
              className="input-style"
            />
          </div>

          <label className="label-style">
            {labels.comment}
          </label>


          <div className="input-div-style">
            <textarea
              rows={2}
              onChange={handleChange}
              value={userData["comments"]?.value || ""}
              name="comments"
              className="input-style"
            />
          </div>

          <label className="label-style">Upload your Image</label>
          <UploadFile/>
          <p className="text-xs text-red-500">{userData["image"]?.error}</p>
        </div>
      </div>
    </div>
  );
}

export default ChurchRelatedInfo2;
