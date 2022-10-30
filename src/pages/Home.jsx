import React, { useMemo, useRef, useState } from "react";
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import UsersData from "../data/User";
import { motion } from "framer-motion";

const Home = () => {
  const inputRef = useRef(null);
  const userIds = useMemo(() => Object.keys(UsersData), []);
  const [query, setQuery] = useState("");

  const handleSearchClick = (e) => {
    inputRef.current.focus();
  };

  const keys = ["name"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => UsersData[item][key]?.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 bg-[url('../public/assets/images/home/homeback.png')] sm:bg-cover sm:bg-no-repeat bg-center relative overflow-x-hidden px-4 md:px-20 h-screen">
      {/* Floating images start */}
      <img
        src="/assets/images/home/element.png"
        className="hidden w-[20rem] md:block absolute object-contain z-[10000]  md:w-[14rem] md:top-[60%] md:left-[0%] "
      />

      <img
        src="/assets/images/home/STARRR.png"
        className="hidden  absolute object-contain md:block z-[10000]  md:w-[12rem] md:top-[60%] md:right-[3%]"
        alt=""
      />
      <img
        src="/assets/images/home/Date.png"
        className="hidden z-[10000]  absolute object-contain md:block md:w-[14rem] md:top-[15%] md:left-[1%]"
        alt=""
      />

      <img
        src="/assets/images/home/Location.png"
        className="hidden  absolute object-contain md:block z-[10000] md:w-[17rem] md:top-[15%] md:right-[0%]"
        alt=""
      />

      {/*<img
        src="/assets/images/home/image-removebg-preview.png"
        className="hidden w-[20rem]  absolute object-contain  md:block md:top-[11%] md:-left-[22%] "
        alt=""
      />
      <img
        src="/assets/images/home/2nov.png"
        className="hidden   absolute z-2 object-contain md:block  md:top-[17%] md:-left-[18%]"
        alt=""
      /> */}
      {/* Floating images end */}

      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white md:max-w-5xl mx-auto rounded-2xl w-[90%] md:w-[60rem] max-h-[90vh]
        overflow-y-scroll relative scrollbar-thin  md:scrollbar scrollbar-thumb-[#D9D9D9] scrollbar-thumb-rounded-lg scrollbar-track-rounded-full mt-6 border-3 border-black pb-4"
      >
        {/* Header start */}
        <div className="flex flex-row justify-between items-center bg-[#D3E4CD] rounded-t-[0.75rem] px-2 shadow-xl sticky top-0 z-10 border-b-3 border-black">
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
        <div className="bg-white md:px-20">
          <div
            className="flex flex-row justify-center max-w-80 mt-14
            text-3xl md:text-[4.5rem] text-center font-gothic font-normal tracking-[5%] md:ml-[2rem] items-center"
          >
            <p className="tracking-[5%] mr-2 md:mr-8 font-black">GIT</p>

            <p className="font-black flex items-center justify-center">
              F<AiOutlineGithub className="text-3xl md:text-[4.5rem]" />R{" "}
            </p>
            <p className="ml-2 md:ml-6 font-black">GEEKS</p>
          </div>
          <div className="-mt-2 -ml-2 md:ml-0  text-center font-caveat text-3xl mb-8 md:text-7xl md:-mt-2 md:mb-12">
            Second Commit
          </div>
          <div className="flex justify-center items-center pb-6">
            <div className="w-[30rem] border-b-8 p-2 md:p-3 md:px-4 flex justify-between space-x-1 text-black font-bold text-center mx-4 bg-darkOlive  border-solid border-2 border-black rounded-3xl mb-[1rem] md:mb-[1.75rem]">
              <input
                type="text"
                className="border-none text-sm md:text-lg font-semibold text-black bg-darkOlive py-2 placeholder-black focus:outline-none md:flex-grow"
                placeholder="Search your name here"
                ref={inputRef}
                onChange={(e) => setQuery(e.target.value)}
              />
              <AiOutlineSearch
                size={"2.5rem"}
                className="mt-2 w-6 h-6 md:w-10 md:h-10 md:mt-0 cursor-pointer focus:text-transparent"
                onClick={handleSearchClick}
              />
            </div>
          </div>

          <div className=" md:pb-8 grid md:grid-cols-2 sm:grid-cols-1 gap-y-4 md:gap-8 px-10 md:px-12 min-w-[80%] text-center text-bold">
            {search(userIds).map((userId) => {
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
        </div>
      </motion.div>
      <p className="text-center text-lg font-gothic">Built with ❤️ by DJCSI Tech Team</p>
    </div>
  );
};

export default Home;

// scrollbar-thin  md:scrollbar scrollbar-thumb-[#D9D9D9] scrollbar-thumb-rounded-lg scrollbar-track-rounded-full
