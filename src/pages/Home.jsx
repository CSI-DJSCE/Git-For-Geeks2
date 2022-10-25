import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import UsersData from "../data/User";

const Home = () => {
  console.log(UsersData);
  const userIdArray = Object.keys(UsersData);
  return (
    <>
      <div className="w-full flex justify-center bg-[url('../public/assets/images/home/homeback.png')] sm:bg-cover sm:bg-no-repeat bg-center">
        <div className="bg-white md:max-w-5xl relative box-border mx-auto my-10 md:border-solid border-2 border-b-0 lg:border-b-4 border-black rounded-t-2xl w-[90%] md:w-[60rem]">
          {/* Floating images start */}
          <img
            src="/assets/images/home/element.png"
            className="hidden w-[20rem]  md:block absolute object-contain z-[2] md:top-[60%] md:-left-[22%] "
          />
          <img
            src="/assets/images/home/2.png"
            className="hidden z-[2]  absolute object-contain md:block md:top-[5%] md:-right-[30%]"
            alt=""
          />
          <img
            src="/assets/images/home/STARRR.png"
            className="hidden  absolute object-contain md:block z-[2]  md:top-[70%] md:-right-[15%]"
            alt=""
          />

          <img
            src="/assets/images/home/classroom6.png"
            className="hidden  absolute object-contain md:block z-[2]  md:top-[15%] md:-right-[16%]"
            alt=""
          />

          <img
            src="/assets/images/home/image-removebg-preview.png"
            className="hidden w-[20rem]  absolute object-contain  md:block md:top-[11%] md:-left-[22%] "
            alt=""
          />
          <img
            src="/assets/images/home/1Nov.png"
            className="hidden   absolute z-2 object-contain md:block  md:top-[17%] md:-left-[18%]"
            alt=""
          />

          {/* Floating images end */}

          {/* Header start */}
          <div className="flex flex-row justify-between items-center bg-[#D3E4CD]  border-solid border-b-2 md:border-2 md:border-b-4 border-black rounded-t-[0.75rem] px-2">
            {/* Three Button */}
            <div className="flex items-center justify-center">
              <div className="md:mx-2 m-0.5 mt-2 w-4 h-4 md:w-8 md:h-8 border-solid border-2 md:border-4 md:ml-2 border-black rounded-3xl bg-icon1"></div>
              <div className="md:mx-2 m-0.5 mt-2 w-4 h-4 md:w-8 md:h-8 border-solid border-2 md:border-4  md:ml-4 border-black rounded-3xl bg-icon2"></div>
              <div className="md:mx-2 m-0.5 mt-2 w-4 h-4 md:w-8 md:h-8 border-solid border-2 md:border-4 md:ml-4 border-black rounded-3xl bg-icon3"></div>
            </div>
            {/* Three buttons end*/}
            <div className="flex items-center justify-center">
              <div className="tracking-wider text-sm md:text-2xl mt-1 font-gothic -mr-2 md:-mr-4">
                BROUGHT TO YOU BY
              </div>
              <div className="">
                <img src="/assets/images/home/logo.png" className=" mt-1 w-24 md:w-auto" alt="" />
              </div>
            </div>
          </div>
          {/* Header ens */}

          {/* GFG Body start */}
          <div className=" scrollbar-thin h-screen md:scrollbar scrollbar-thumb-[#D9D9D9] overflow-y-scroll scrollbar-thumb-rounded-lg scrollbar-track-rounded-full">
            <div className="bg-white md:px-20  pb-[20%] md:pb-[15%] md:border-solid md:border-2 md:border-t-0 md:border-black  md:border-b-0">
              <div
                className="flex flex-row  justify-center max-w-80 p-10 
										md:-mb-[1.5rem] text-7xl md:text-9xl text-center font-gothicBold font-normal tracking-[5%] md:ml-[2rem]"
              >
                <p>GIT</p>
                <img
                  src="/assets/images/home/git.png"
                  className="ml-2 h-16 mt-1.5 md:w-auto md:h-auto"
                  alt=""
                />
              </div>
              <div className="text-5xl md:text-7xl text-center font-gothicBold font-normal tracking-[5%] mb-10 md:mb-16 ">
                FOR GEEKS!
              </div>

              <div className="flex justify-center items-center pb-6">
                <div className="w-[30rem] border-b-8 p-2 md:p-3 md:px-4 flex justify-between space-x-1 text-black font-bold text-center mx-20 bg-darkOlive  border-solid border-2 border-black rounded-3xl mb-[1rem] md:mb-[1.75rem]">
                  <input
                    type="text"
                    className="  border-none font-bold text-black bg-darkOlive py-2 placeholder-black focus:outline-none "
                    placeholder="SEARCH YOUR NAME HERE"
                  />
                  <AiOutlineSearch
                    size={"2.5rem"}
                    className="mt-2 w-6 h-6 md:w-10 md:h-10 md:mt-0"
                  />
                </div>
              </div>

              <div className=" md:pb-8 grid md:grid-cols-2 sm:grid-cols-1 gap-y-4 md:gap-8 px-4 md:px-12 min-w-[80%] text-center text-bold">
                {userIdArray.map((userId) => {
                  const userData = UsersData[userId];
                  return (
                    <Link key={userId} to={`/profile/${userId}`}>
                      <div className="cursor-pointer name-pills  primary-btn-click">
                        {userData?.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <p className="text-center text-lg font-gothic">Build with ♥️ by DJCSI Tech Team</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
