import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Settings = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const options = [
    { name: "My details", id: 0, path: "my-details" },
    { name: "Profile", id: 1 },
    { name: "Password", id: 2 },
    { name: "Team", id: 3 },
    { name: "Plan", id: 4 },
    { name: "Billing ", id: 5 },
    { name: "Notifications", id: 6 },
    { name: "Integrations", id: 7 },
    { name: "API", id: 8 },
  ];
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full">
      <div className="pt-8">
        <div className="mb-8" id="headerSection">
          <div className="px-4 md:px-0 mb-6" id="pageHeader">
            <h2 className="text-2xl font-medium md:text-3xl text-[#101828]">
              Settings
            </h2>
            <p className="text-[#667085]">
              Manage your team and preferences here.
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-2">
            <div className="w-fit rounded-md border">
              <div id="buttonGroup" className="flex w-full">
                {options.map((option, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/settings/${
                        option.name == "My details"
                          ? option.path
                          : option.name.toLowerCase()
                      }`}
                      className="block"
                    >
                      <button
                        type="button"
                        className={`${
                          index == 0 ? "border-l-none" : "border-l"
                        } text-sm py-2.5 px-4 text-center whitespace-nowrap font-medium bg-white`}
                      >
                        {option.name}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Settings;
