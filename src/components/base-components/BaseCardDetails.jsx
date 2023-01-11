import BaseCircleCheckbox from "./BaseCircleCheckbox";

const BaseCardDetails = ({ children }) => {
  return (
    <button
      type="button"
      className={`bg-white w-full rounded-md p-4 border flex `}
    >
      <div>{children}</div>
      <div className="ml-auto">
        <BaseCircleCheckbox />
      </div>
    </button>
  );
};

export default BaseCardDetails;
