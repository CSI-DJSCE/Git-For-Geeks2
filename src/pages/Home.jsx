import React from "react";

import UsersData from "../data/User";

const Home = () => {
  console.log(UsersData);
  return (
    <>
      <div className="w-full flex justify-center bg-[url('../public/assets/images/home/homeback.png')] sm:bg-cover sm:bg-no-repeat bg-center">
        <div className="relative box-border mx-auto my-10 border-solid border-2 border-black rounded-t-2xl">
          {/* Floating images start */}
          <img
            src="/assets/images/home/element.png"
            className="-z-1 block absolute object-contain z-2 top-[50%] -left-[35%]"
            alt=""
          />
          <img
            src="/assets/images/home/2.png"
            className=" -z-1 block absolute object-contain z-2 top-[10%] -right-[30%]"
            alt=""
          />
          {/* Floating images end */}

          {/* Header start */}
          <div className="flex flex-row justify-between items-center bg-brightOlive rounded-t-2xl px-2">
            {/* Three Button */}
            <div className="flex items-center justify-center">
              <div className="mx-2 m-0.5 mt-2.5 w-6 h-6 border-solid border-2 border-black rounded-3xl bg-icon1"></div>
              <div className="mx-2 m-0.5 mt-2.5 w-6 h-6 border-solid border-2 border-black rounded-3xl bg-icon2"></div>
              <div className="mx-2 m-0.5 mt-2.5 w-6 h-6 border-solid border-2 border-black rounded-3xl bg-icon3"></div>
            </div>
            {/* Three buttons end*/}
            <div className="flex items-center justify-center">
              <div className="text-2xl mt-1 font-gothic -mr-4">BROUGHT TO YOU BY</div>
              <div className="">
                <img src="/assets/images/home/logo.png" alt="" />
              </div>
            </div>
          </div>
          {/* Header ens */}

          {/* GFG Body start */}
          <div className="bg-white px-36">
            <div
              className="flex flex-row max-w-80 p-10 
										text-9xl text-center font-gothic font-normal tracking-wider ml-20"
            >
              <p>GIT</p>
              <img src="/assets/images/home/git.png" alt="" />
            </div>
            <div className="text-7xl text-center font-gothic font-normal tracking-wider mb-20 ">
              FOR GEEKS!
            </div>

            {/* <div className="flex flex-row justify-center items-center max-w-md font-bold text-center mx-20 bg-darkOlive  border-solid border-2 border-black rounded-full mb-[3rem]">
						<div className="pb-5 mr-20 mt-5 font-gothic font-medium uppercase text-center text-xl">Search Your Name Here
						</div>
						<div>
						<img src="/assets/images/home/searchbar.png" className="ml-40"alt="" />
						</div>
						</div> */}
            <div className="flex justify-center items-center">
              <div className="w-[30rem] border-b-8 p-2 flex justify-between space-x-1 text-black font-bold text-center mx-20 bg-darkOlive  border-solid border-2 border-black rounded-3xl mb-[3rem]">
                <input
                  type="text"
                  className="border-none font-bold text-center text-black bg-darkOlive py-2 placeholder-black focus:outline-none "
                  placeholder="SEARCH YOUR NAME HERE"
                />
                <button className="px-4 text-white bg-black rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 py-5 text-center text-bold">
              <div className="name-pills primary-btn-click">Murtaza</div>
              <div className="name-pills primary-btn-click">Mahek Jain</div>
              <div className="name-pills primary-btn-click">Priyanka Ramachandran</div>
              <div className="name-pills primary-btn-click">Name 4</div>
              <div className="name-pills primary-btn-click">Name 5</div>
              <div className="name-pills primary-btn-click ">Name 6</div>
              <div className="name-pills primary-btn-click">Name 7</div>
              <div className="name-pills primary-btn-click">Name 8</div>
              <div className="name-pills primary-btn-click">Name 9</div>
              <div className="name-pills primary-btn-click">Name 10</div>
            </div>
          </div>
          {/* GFG Body end */}
        </div>
      </div>
    </>
  );
};

export default Home;
