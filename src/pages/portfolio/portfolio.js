import React, { useState, useEffect } from "react";
import Filter from "../../assets/filter.png";
import Search from "../../assets/search.png";
import Bag from "../../assets/bag.png";
import fillBag from "../../assets/fillBell.png";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API}/api/projects?populate=*`
      );
      const data = await res.json();
      console.log(data.data[0].projectImage.url);
      setProjects(data.data);
    } catch (error) {
      console.log("Enable to fetch data from strapi", error);
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    if (search === "") {
      return true;
    }
    return (
      project.Title.toLowerCase().includes(search.toLowerCase()) ||
      project.desc.toLowerCase().includes(search.toLowerCase()) ||
      project.author.toLowerCase().includes(search.toLowerCase()) ||
      project.designation.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#d3d3d3] w-full h-auto flex justify-center">
      <div className="bg-[#ffffff] lg:rounded-[15px] lg:mt-[30px] p-[22px] w-full lg:w-[1132px] lg:my-[30px]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[22px] leading-[25.78px] font-bold text-[#000000]">
              Portfolio
            </h3>
          </div>
          <div className="flex lg:hidden items-center gap-[20px]">
            <img src={Bag} alt="bag" className="w-[20px] h-[20px]" />
            <img src={fillBag} alt="fillBag" className="w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[533px]">
            <div className="flex gap-[45px] mt-[30px]">
              <h3 className="cursor-pointer text-red-600 font-extrabold">
                Project
              </h3>
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
              lg:mb-0
              mb-4
              "
            ></div>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="hidden lg:flex items-end cursor-pointer">
              <img src={Filter} alt="filter" />
              <h3>Filter</h3>
            </div>
            <div className="flex justify-between items-center border px-3 h-[50px] lg:h-[44px] w-[450px] lg:w-[343px] rounded-[13px]">
              <input
                type="text"
                placeholder="Search a project"
                className="w-[280px] outline-none"
                onChange={handleSearch}
              />
              <img src={Search} alt="search" />
            </div>
          </div>
        </div>
        {/* Portfolio Cards */}
        {filteredProjects.map((project) => {
          return (
            <>
              {project === undefined ? (
                <div className="w-full h-[100px] flex items-center justify-center">
                  <p>No Projects Found</p>
                </div>
              ) : (
                <div
                  key={project.id}
                  className="mt-[22px] flex gap-[20px] lg:w-[811px] h-auto border rounded-[10px]"
                >
                  <div>
                    {project.projectImage ? (
                      <img
                        src={project.projectImage.url}
                        alt={project.Title}
                        className="w-[253px] h-[161px] object-cover rounded-l-[10px]"
                      />
                    ) : (
                      <div className="w-[253px] h-[161px] bg-gray-300 rounded-l-[10px] flex items-center justify-center">
                        <p>No Image</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-5 w-[520px]">
                    <h2 className="text-[18px] leading-[18px] font-bold">
                      {project.Title}
                    </h2>
                    <p className="text-[12px] leading-[14px] text-[#9E95A2] font-bold mt-[8px]">
                      {project.desc}
                    </p>
                    <div className="flex justify-between mt-[19px] items-center">
                      <div>
                        <h3 className="text-[12px] leading-[14px] font-semibold text-[#303030]">
                          {project.author}
                        </h3>
                        <p className="text-[12px] leading-[14px] font-semibold text-[#9E95A2]">
                          {project.designation}
                        </p>
                      </div>
                      <div>
                        <button className="btn-gradient text-white lg:w-[98px] h-[39px] mr-[20px] lg:mr-0 px-3 lg:px-0 rounded-[5px]">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
