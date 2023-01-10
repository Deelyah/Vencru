import { Outlet } from "react-router-dom";
import BaseNavigationMenu from "../components/base-components/BaseNavigationMenu";

const Overview = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* <div> */}
      <div className="hidden md:block w-2/6">
        <BaseNavigationMenu height="h-[80vh]" />
      </div>
      {/* </div> */}
      <div className="w-4/6 min-h-screen">
        <div className="w-full min-h-screen bg-[#F9FAFB] px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Overview;
