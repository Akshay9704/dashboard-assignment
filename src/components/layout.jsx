import React from "react";
import { Outlet } from "react-router-dom";
import DashboardImg from "../assets/dashboard.png";
import PortfolioImg from "../assets/portfolio.png";
import InputsImg from "../assets/input.png";
import ProfileImg from "../assets/profile.png";
import Logo from "../assets/logo.png";

function AppLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div className="hidden lg:flex bg-[#DF5532] w-[236px]">
        <div className="space-y-[22px] text-center text-white w-full">
          {/* Logo */}
          <div className="flex items-center ml-[22px] mb-[98px] mt-[27px] gap-[7px] cursor-pointer">
            <img src={Logo} alt="logo" className="w-[30px] h-[30px]" />
            <h1 className="text-[14px] font-bold text-white uppercase">Logo</h1>
          </div>
          {/* Menu Items */}
          <div className="flex gap-[17px] text-[14px] leading-[16.41px] cursor-pointer py-[11px]">
            <img
              src={DashboardImg}
              alt="dashboard"
              className="w-[20px] h-[20px] ml-[28px]"
            />
            <h3>Dashboard</h3>
          </div>
          <div className="flex gap-[15px] text-[14px] leading-[16.41px] cursor-pointer py-[11px]">
            <img
              src={PortfolioImg}
              alt="portfolio"
              className="w-[24px] h-[24px] ml-[28px]"
            />
            <h3>Portfolio</h3>
          </div>
          <div className="flex text-[14px] gap-[15px] leading-[16.41px] cursor-pointer py-[11px]">
            <img
              src={InputsImg}
              alt="inputs"
              className="w-[24px] h-[24px] ml-[28px]"
            />
            <h3>Inputs</h3>
          </div>
          <div className="flex gap-[15px] text-[14px] leading-[16.41px] cursor-pointer py-[11px]">
            <img
              src={ProfileImg}
              alt="profile"
              className="w-[24px] h-[24px] ml-[28px]"
            />
            <h3>Profile</h3>
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
