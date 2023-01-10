import { useState } from "react";

const BaseRadioButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex items-center w-full">
      <button
        onClick={() => {
          setIsChecked(!isChecked);
        }}
        className={`${
          isChecked ? "bg-[#7f56d910] border-[#7F56D9]" : "bg-white"
        } flex justify-center items-center h-[18px] w-[18px] rounded-full border hover:bg-[#7f56d910] hover:border-[#7F56D9]`}
      >
        <div
          className={`h-1.5 w-1.5 rounded-full ${
            isChecked ? "bg-[#7F56D9]" : "bg-transparent"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default BaseRadioButton;
