import { useEffect, useState } from "react";
import tick from "../../assets/tick.svg";
const BaseCircleCheckbox = ({ status }) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(status);
    console.log(status);
  }, [status]);
  return (
    <div className="flex items-center w-full">
      <button
        onClick={() => {
          setIsChecked(!isChecked);
        }}
        className={`${
          isChecked ? "bg-[#7f56d910] bg-[#7F56D9]" : "bg-white"
        } flex justify-center items-center h-[18px] w-[18px] rounded-full border hover:bg-[#7f56d910] hover:border-[#7F56D9]`}
      >
        <div
          className={`${
            isChecked ? "block" : "hidden"
          } flex justify-center items-center pb-0.5`}
        >
          <img src={tick} alt="check mark" />
        </div>
      </button>
    </div>
  );
};

export default BaseCircleCheckbox;
