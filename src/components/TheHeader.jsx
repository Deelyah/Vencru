import logo from "../assets/logo.svg";
import logoTitle from "../assets/logo-title.svg";
import hamburgerMenu from "../assets/hamburger.svg";
import BaseNavigationMenu from "./base-components/BaseNavigationMenu";
import close from "../assets/close.svg";
import { useState } from "react";
const TheHeader = () => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false);
  return (
    <div className="relative md:hidden max-w-full">
      <header className="w-full fixed left-0 right-0 z-40">
        <div className="flex items-center pl-4 pr-3 py-4 bg-white">
          <div className="flex items-center" id="logo">
            <img src={logo} alt="logo" className="mr-2.5" />
            <img src={logoTitle} alt="company name" />
          </div>
          <div className="ml-auto">
            <button
              onClick={() => {
                setSideMenuIsVisible(true);
              }}
              type="button"
              className={`${
                sideMenuIsVisible ? "hidden" : "block"
              } px-2.5 py-2 rounded-md hover:bg-[#F9FAFB]`}
            >
              <img src={hamburgerMenu} alt="menu" />
            </button>
          </div>
        </div>
      </header>
      {sideMenuIsVisible && (
        <div className="w-full z-50 bg-[#34405499] relative flex">
          <div className="w-10/12 bg-white">
            <BaseNavigationMenu
              height="h-[75vh]"
              onClick={() => {
                setSideMenuIsVisible(false);
              }}
            />
          </div>
          <div
            className={`${
              sideMenuIsVisible ? "block" : "hidden"
            } ml-auto pr-3 pt-5`}
          >
            <button
              onClick={() => {
                setSideMenuIsVisible(false);
              }}
              type="button"
              className="p-3 rounded-md hover:bg-[#34405454]"
            >
              <img src={close} alt="menu" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheHeader;
