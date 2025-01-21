import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-[#d3d3d3] w-full h-[100vh] flex justify-center">
      <div className="bg-[#ffffff] lg:rounded-[15px] lg:mt-[30px] p-[22px] w-full max-w-[1200px] max-h-[879px] lg:my-[30px]">
        <h3 className="text-[22px] leading-[25.78px] font-bold text-[#000000]">
          Portfolio
        </h3>
        <div className="hidden lg:block">
          <div className="w-[533px]">
            <div className="flex gap-[45px] mt-[30px]">
              <h3 className="cursor-pointer">Project</h3>
              <h3 className="cursor-pointer">Saved</h3>
              <h3 className="cursor-pointer">Shared</h3>
              <h3 className="cursor-pointer">Achievement</h3>
            </div>
            <div
              className="divider
              w-full
              h-[1px]
              bg-[#848484]
              mt-[15px]
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
