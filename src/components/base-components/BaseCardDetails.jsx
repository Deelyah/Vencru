import { useState } from "react";
import BaseCircleCheckbox from "./BaseCircleCheckbox";
const BaseCardDetails = ({ icon, type, expiry }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      type="button"
      onClick={() => {
        setIsChecked(!isChecked);
      }}
      className={`${
        isChecked ? "bg-[#d6bbfb28] border-[#7F56D9]" : "bg-white"
      } relative bg-white w-full rounded-xl p-4 border flex`}
    >
      <div className="flex">
        <div>
          <img src={icon} alt={type} />
        </div>
        <div className="ml-3">
          <h5
            className={`${
              isChecked ? "text-[#53389E]" : "text-[#344054]"
            } text-sm medium`}
          >
            {type} ending in 1234
          </h5>
          <p
            className={`text-left text-sm ${
              isChecked ? "text-[#7F56D9]" : "text-[#667085]"
            }`}
          >
            Expiry {expiry}
          </p>
          <div className="flex mt-2 text-sm">
            <p
              className={` ${
                isChecked ? "text-[#9E77ED]" : " text-[#667085]"
              } mr-3 font-medium`}
            >
              Set as default
            </p>
            <p className="text-[#6941C6] font-medium">Edit</p>
          </div>
        </div>
      </div>
      <div className="absolute right-4">
        <BaseCircleCheckbox status={isChecked} />
      </div>
    </div>
  );
};

export default BaseCardDetails;
