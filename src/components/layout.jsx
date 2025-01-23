import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import DashboardImg from "../assets/dashboard.png";
import PortfolioImg from "../assets/portfolio.png";
import InputsImg from "../assets/input.png";
import ProfileImg from "../assets/profile.png";
import Logo from "../assets/logo.png";
import Bell from "../assets/bell.png";
import Avatar from "../assets/avatar.png";
import DropDown from "../assets/dropdown.png";
import Filter from "../assets/filter.png";
import DashboardM from "../assets/dashboard-m.png";
import PortfolioM from "../assets/portfolio-m.png";
import InputsM from "../assets/input-m.png";
import ProfileM from "../assets/profile-m.png";

function AppLayout() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex bg-[#DF5532] w-[236px]">
        <div className="space-y-[22px] text-center text-white w-full">
          <div className="flex items-center ml-[22px] mb-[98px] mt-[27px] gap-[7px] cursor-pointer">
            <img src={Logo} alt="logo" className="w-[30px] h-[30px]" />
            <h1 className="text-[14px] font-bold text-white uppercase">Logo</h1>
          </div>
          <Link
            to="/dashboard"
            className={`flex items-center gap-[17px] text-[14px] leading-[16.41px] cursor-pointer py-[11px] ${
              isActive("/dashboard") ? "link-gradient rounded-l-xl" : ""
            }`}
          >
            <img
              src={DashboardImg}
              alt="dashboard"
              className="w-[20px] h-[20px] ml-[28px]"
            />
            <h3>Dashboard</h3>
          </Link>
          <Link
            to="/portfolio"
            className={`flex items-center gap-[15px] text-[14px] leading-[16.41px] cursor-pointer py-[11px] ${
              isActive("/portfolio") ? "link-gradient rounded-l-xl" : ""
            }`}
          >
            <img
              src={PortfolioImg}
              alt="portfolio"
              className="w-[24px] h-[24px] ml-[28px]"
            />
            <h3>Portfolio</h3>
          </Link>
          <Link
            to="/inputs"
            className={`flex items-center gap-[15px] text-[14px] leading-[16.41px] cursor-pointer py-[11px] ${
              isActive("/inputs") ? "link-gradient rounded-l-xl" : ""
            }`}
          >
            <img
              src={InputsImg}
              alt="inputs"
              className="w-[24px] h-[24px] ml-[28px]"
            />
            <h3>Inputs</h3>
          </Link>
          <Link
            to="/profile"
            className={`flex items-center gap-[15px] text-[14px] leading-[16.41px] cursor-pointer py-[11px] ${
              isActive("/profile") ? "link-gradient rounded-l-xl" : ""
            }`}
          >
            <img
              src={ProfileImg}
              alt="profile"
              className="w-[24px] h-[24px] ml-[28px]"
            />
            <h3>Profile</h3>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Navbar */}
        <div className="hidden lg:flex items-center justify-end bg-[#FFFFFF] border-[0.5px] border-b-[#848484] w-full h-[80px] pr-10">
          <img
            src={Bell}
            alt="bell"
            className="w-[24px] h-[24px] mr-[40px] cursor-pointer"
          />
          <div className="flex items-center cursor-pointer">
            <img
              src={Avatar}
              alt="avatar"
              className="w-[40px] h-[40px] mr-[15px]"
            />
            <div>
              <h4 className="text-[14px] leading-[16.41px] font-bold text-[#000000]">
                Lorem lps
              </h4>
              <p className="text-[14px] leading-[16.41px] text-[#848484] mt-[6px]">
                Manager
              </p>
            </div>
          </div>
          <img
            src={DropDown}
            alt="dropdown"
            className="w-[24px] h-[24px] ml-[15px]"
          />
        </div>

        {/* Page Content */}
        <div className="pb-[60px] lg:pb-0">
          <Outlet />
        </div>

        {/* Bottom Navigation for Mobile Screens */}
        <div className="lg:hidden fixed bottom-20 left-0 right-0 text-white flex justify-center">
          <div className="bg-[#DF5532] w-28 flex justify-center items-center h-10 rounded-full cursor-pointer">
            <img src={Filter} alt="filter" className="w-[24px] h-[24px]" />
            Filter
          </div>
        </div>
        <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center h-[60px] border-t bg-[#FFFFFF] text-white rounded-l-3xl rounded-r-3xl">
          <Link to="/dashboard" className="text-center">
            <img
              src={DashboardM}
              alt="dashboard"
              className="w-[24px] h-[24px] mx-auto"
            />
            <p className={`text-[12px] ${
              isActive("/dashboard") ? "text-[#DF5532]" : "text-[#848484]"
            }`}>Dashboard</p>
          </Link>
          <Link to="/portfolio" className="text-center">
            <img
              src={PortfolioM}
              alt="portfolio"
              className="w-[24px] h-[24px] mx-auto"
            />
            <p className={`text-[12px] ${
              isActive("/portfolio") ? "text-[#DF5532]" : "text-[#848484]"
            }`}>Portfolio</p>
          </Link>
          <Link to="/inputs" className="text-center">
            <img
              src={InputsM}
              alt="inputs"
              className="w-[24px] h-[24px] mx-auto"
            />
            <p className={`text-[12px] ${
              isActive("/inputs") ? "text-[#DF5532]" : "text-[#848484]"
            }`}>Inputs</p>
          </Link>
          <Link to="/profile" className="text-center">
            <img
              src={ProfileM}
              alt="profile"
              className="w-[24px] h-[24px] mx-auto"
            />
            <p className={`text-[12px] ${
              isActive("/profile") ? "text-[#DF5532]" : "text-[#848484]"
            }`}>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
