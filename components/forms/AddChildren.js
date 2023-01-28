import { useState, useEffect } from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import { TiUserAdd } from 'react-icons/ti'; 
import { ImUserMinus } from 'react-icons/im'; 


function AddChildren({ children }) {
  const [childrenInfos, setChildrenInfos] = useState([
    { fullName: '', age: '',},
  ]);
  useEffect(() => {
    if (children?.length >= 1) {
      setChildrenInfos(children);
    }
  }, [children]);
  const { userData, setUserData } = useStepperContext();
  const inputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...childrenInfos];
    list[index][name] = value;
    setChildrenInfos(list);
    const validated = childrenInfos.every(
      (info) =>
        info.fullName.length > 1 &&
        (info.age >= 1 || info.age <= 100) &&
        info.gender !== ''
    );
    const filteredChildren = userData['children']?.filter(
      (info) =>
        info.fullName.length > 1 &&
        (info.age >= 1 || info.age <= 35) &&
        info.gender !== ''
    );
    setUserData({ ...userData, children: filteredChildren ?? [] });
    if (validated) {
      setUserData({ ...userData, children: childrenInfos });
    }
  };

  const addToList = () => {
    setChildrenInfos([...childrenInfos, { fullName: '', age: '' }]);
  };

  const removeFromList = (index) => {
    const list = [...childrenInfos];
    list.splice(index, 1);
    setChildrenInfos(list);
  };

  return (
    <div className="text-xs space-y-5 ">

      {childrenInfos?.map((x, index) => {
        return (
          <div className="flex flex-row  mt-4 gap-2 md:gap-2 md:space-x-3" key={index}>
            <button
              className=" md:text-xl flex text-lg  items-center  justify-center md:px-0 px-1 "
              onClick={addToList}
            >
              <TiUserAdd/>
            </button>
            <div className=''>
              <label>Full Name: </label>
              <input
                required
                type="text"
                name="fullName"
                className="appearance-none p-2.5 px-2 w-36 rounded border border-gray-300  text-gray-800 outline-none"
                value={x.fullName}
                onChange={(e) => inputChange(e, index)}
              />
            </div>
            <div>
              <label>Age: </label>

              <input
                required
                type="number"
                name="age"
                min={1}
                max={100}
                className="appearance-none p-2.5 px-2 w-14 rounded border border-gray-300  text-gray-800 outline-none"
                value={x.age}
                onChange={(e) => inputChange(e, index)}
              />
            </div>
            {/* <div>
              <label>Gender: </label>
              <select
                required
                className="p-2 outline-none border border-gray-300 bg-white rounded"
                value={x.gender}
                name="gender"
                onChange={(e) => inputChange(e, index)}
              >
                <option value="">- Select -</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div> */}
            {childrenInfos.length > 1 && (
              <button
              className=" md:text-xl text-lg  items-center  justify-center md:px-3 px-1 "
                onClick={() => removeFromList(index)}
              >
                <ImUserMinus/>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default AddChildren;
