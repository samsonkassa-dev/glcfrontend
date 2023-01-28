import React from "react";
import ImageUploading from "react-images-uploading";
import { useStepperContext } from "../../contexts/StepperContext";

function UploadFile() {

  const [images, setImages] = React.useState([]);
  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: {
        value,
        required,
      },
    });
  };
  
  const onChange = (imageList) => {
    // data for submit
    console.log(imageList);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        name="image"
        onChange={onChange}
        onImageUpload={handleChange}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="text-sm">
            <div className="flex flex-row ">
              <button
                className="bg-[#E5D9B6] w-48 py-3.5 mt-3 text-black rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
            </div>
            {imageList.map((image, index) => (
              <>
                <div key={index} className="mt-3 ml-7 ">
                  <img src={image.data_url} alt="" width="100" />
                </div>
                <div className="ml-9  items-center mt-2">
                  <button
                    className="bg-[#E5D9B6] w-20 py-1 mt-3 text-black rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
                    onClick={() => onImageRemoveAll(index)}
                  >
                    Remove
                  </button>
                </div>
              </>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadFile;
