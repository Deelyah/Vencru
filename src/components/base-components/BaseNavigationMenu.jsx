import logo from "../../assets/logo.svg";
import logoTitle from "../../assets/logo-title.svg";
import search from "../../assets/search.svg";
import home from "../../assets/navigation-icons/home.svg";
import dashboard from "../../assets/navigation-icons/dashboard.svg";
import projects from "../../assets/navigation-icons/projects.svg";
import tasks from "../../assets/navigation-icons/tasks.svg";
import reporting from "../../assets/navigation-icons/reporting.svg";
import users from "../../assets/navigation-icons/users.svg";
import support from "../../assets/navigation-icons/support.svg";
import settings from "../../assets/navigation-icons/settings.svg";
import avatar from "../../assets/avatar.png";
import { Link, useLocation } from "react-router-dom";
import logOut from "../../assets/log-out.svg";
const BaseNavigationMenu = ({ height, onClick }) => {
  const links = [
    { page: "Home", image: home },
    { page: "Dashboard", image: dashboard },
    { page: "Projects", image: projects },
    { page: "Tasks", image: tasks },
    { page: "Reporting", image: reporting },
    { page: "Users", image: users },
  ];

  const bottomLinks = [
    { page: "Support", image: support },
    { page: "Settings", image: settings },
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className="px-6 bg-white">
      <div className="flex items-center pl-2 mb-6 pt-4 md:pt-8" id="logo">
        <img src={logo} alt="logo" className="mr-2.5" />
        <img src={logoTitle} alt="company name" />
      </div>
      <div className="search-input flex border items-center py-2.5 px-3.5 rounded-lg box-shadow mb-6">
        <img src={search} />
        <input
          type="text"
          className="w-full focus:outline-none border-none ml-2 placeholder-[#667085] cursor-pointer"
          placeholder="Search"
        />
      </div>
      <div className={`flex flex-col ${height}`}>
        <ul>
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="mb-1 hover:bg-[#F9FAFB] rounded-md"
                onClick={onClick}
              >
                <Link
                  to={`/${link.page.toLowerCase()}`}
                  className={`${
                    currentPath === `/${link.page.toLowerCase()}`
                      ? "bg-[#F9FAFB]"
                      : "bg-transparent"
                  } pl-3 flex items-center py-2 rounded-md`}
                >
                  <img src={link.image} alt={link.page} />
                  <h3 className="pl-3 font-medium">{link.page}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto">
          <ul className="mb-5">
            {bottomLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="mb-1 hover:bg-[#F9FAFB] rounded-md"
                  onClick={onClick}
                >
                  <Link
                    to={`/${link.page.toLowerCase()}`}
                    className={`${
                      currentPath.includes(`/${link.page.toLowerCase()}`)
                        ? "bg-[#F9FAFB]"
                        : "bg-transparent"
                    } pl-3 flex items-center py-2 rounded-md`}
                  >
                    <img src={link.image} alt={link.page} />
                    <h3 className="pl-3 font-medium">{link.page}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex border-t pt-6 w-full">
            <div className="flex items-center">
              <img src={avatar} alt="avatar" />
              <div className="ml-3">
                <h3 className="text-[#344054] text-sm font-medium">
                  Olivia Rhye
                </h3>
                <a
                  href="mailto:olivia@untitledui.com"
                  className="no-underline text-[#667085] text-sm"
                >
                  olivia@untitledui.com
                </a>
              </div>
            </div>
            <button className="ml-auto py-1.5 px-2.5 hover:bg-[#F9FAFB] rounded-md">
              <img src={logOut} alt="logout icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BaseNavigationMenu;
