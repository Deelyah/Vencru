import { Outlet } from "react-router-dom";
import BaseNavigationMenu from "../components/base-components/BaseNavigationMenu";

const Overview = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block w-3/12 lg:w-2/12">
        <BaseNavigationMenu height="h-[80vh]" />
      </div>
      <div className="w-full md:w-9/12 lg:w-10/12 min-h-screen">
        <div className="w-full min-h-screen bg-[#F9FAFB] md:px-8 mt-[74px] md:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Overview;
