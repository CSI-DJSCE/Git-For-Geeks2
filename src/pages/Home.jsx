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
    <div className="w-full flex flex-col items-center space-y-3 bg-[url('../public/assets/images/home/homeback.png')] sm:bg-cover sm:bg-no-repeat bg-center relative overflow-x-hidden px-4 lg:px-20 h-screen pt-8">
      {/* Floating images start */}
      <img
        src="/assets/images/home/element.png"
        className="hidden w-[20rem] xl:block absolute object-contain z-[10000]  xl:w-[18rem] xl:top-[60%] xl:left-[4%] "
      />

      <img
        src="/assets/images/home/STARRR.png"
        className="hidden  absolute object-contain xl:block z-[10000]  xl:w-[15rem] xl:top-[60%] xl:right-[7%]"
        alt=""
      />
      <img
        src="/assets/images/home/Date.png"
        className="hidden z-[10000]  absolute object-contain xl:block xl:w-[15rem] xl:top-[18%] xl:left-[6%]"
        alt=""
      />

      <img
        src="/assets/images/home/Location.png"
        className="hidden  absolute object-contain xl:block z-[10000] xl:w-[22rem] xl:top-[19%] xl:right-[3%]"
        alt=""
      />

      {/*<img
        src="/assets/images/home/image-removebg-preview.png"
        className="hidden w-[20rem]  absolute object-contain  lg:block lg:top-[11%] lg:-left-[22%] "
        alt=""
      />
      <img
        src="/assets/images/home/2nov.png"
        className="hidden   absolute z-2 object-contain lg:block  lg:top-[17%] lg:-left-[18%]"
        alt=""
      /> */}
      {/* Floating images end */}

      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white lg:max-w-5xl xl:min-w-[80%] mx-auto rounded-t-2xl w-[90%] lg:w-[60rem]
        overflow-y-scroll scrollbar-thin  lg:scrollbar scrollbar-thumb-[#D9D9D9] scrollbar-thumb-rounded-lg scrollbar-track-rounded-full mt-6 border-3 border-b-0 border-black"
      >
        {/* Header start */}
        <div className="flex flex-row justify-between items-center bg-[#D3E4CD] rounded-t-[0.75rem] px-2 shadow-xl sticky top-0 z-10 border-b-3 border-black">
          {/* Three Button */}
          <div className="flex items-center justify-center">
            <motion.a
              href="https://www.linkedin.com/in/mahek-jain-123aa022a/"
              target="_blank"
              whileHover={{ scale: 0.9 }}
              className="lg:mx-2 m-0.5 mt-2 w-4 h-4 lg:w-8 lg:h-8 border-solid border-2 lg:border-4 lg:ml-2 border-black rounded-3xl bg-icon1 cursor-pointer"
            ></motion.a>
            <motion.a
              href="https://www.linkedin.com/in/priyanka2503/"
              target="_blank"
              whileHover={{ scale: 0.9 }}
              className="lg:mx-2 m-0.5 mt-2 w-4 h-4 lg:w-8 lg:h-8 border-solid border-2 lg:border-4  lg:ml-4 border-black rounded-3xl bg-icon2 cursor-pointer"
            ></motion.a>
            <motion.a
              href="https://www.linkedin.com/in/murtaza-shikari-606450230/"
              target="_blank"
              whileHover={{ scale: 0.9 }}
              className="lg:mx-2 m-0.5 mt-2 w-4 h-4 lg:w-8 lg:h-8 border-solid border-2 lg:border-4 lg:ml-4 border-black rounded-3xl bg-icon3 cursor-pointer"
            ></motion.a>
          </div>
          {/* Three buttons end*/}
          <div className="flex items-center justify-center">
            <div className="tracking-wider text-xs sm:text-sm lg:text-2xl mt-1 font-gothic -mr-1 lg:-mr-4 font-semibold">
              BROUGHT TO YOU BY
            </div>
            <motion.a
              href="https://djcsi.co.in/"
              target="_blank"
              className="block"
              whileHover={{ scale: 0.95 }}
            >
              <img src="/assets/images/home/logo.png" className=" mt-1 w-16 lg:w-auto" alt="" />
            </motion.a>
          </div>
        </div>
        {/* Header ens */}

        {/* GFG Body start */}
        <div className="bg-white lg:px-20">
          <div
            className="flex flex-row justify-center max-w-80 mt-14
            text-3xl lg:text-[4.5rem] text-center font-gothic font-normal tracking-[5%] lg:ml-[2rem] items-center"
          >
            <p className="tracking-[5%] mr-2 lg:mr-8 font-black">GIT</p>

            <p className="font-black flex items-center justify-center">
              F<AiOutlineGithub className="text-3xl lg:text-[4.5rem]" />R{" "}
            </p>
            <p className="ml-2 lg:ml-6 font-black">GEEKS</p>
          </div>
          <div className="-mt-2 -ml-2 lg:ml-0  text-center font-caveat text-3xl mb-8 lg:text-7xl lg:-mt-2 lg:mb-12">
            Second Commit
          </div>
          <div className="flex justify-center items-center pb-6">
            <div className="w-[30rem] border-b-8 p-2 lg:p-3 lg:px-4 flex justify-between space-x-1 text-black font-bold text-center mx-4 bg-darkOlive  border-solid border-2 border-black rounded-3xl mb-[1rem] lg:mb-[1.75rem]">
              <input
                type="text"
                className="border-none text-sm lg:text-lg font-semibold text-black bg-darkOlive py-2 placeholder-black focus:outline-none lg:flex-grow"
                placeholder="Search your name here"
                ref={inputRef}
                onChange={(e) => setQuery(e.target.value)}
              />
              <AiOutlineSearch
                size={"2.5rem"}
                className="mt-2 w-6 h-6 lg:w-10 lg:h-10 lg:mt-0 cursor-pointer focus:text-transparent"
                onClick={handleSearchClick}
              />
            </div>
          </div>

          <div className=" lg:pb-8 grid lg:grid-cols-2 sm:grid-cols-1 gap-y-4 lg:gap-8 px-10 lg:px-12 min-w-[80%] text-center text-bold">
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
        <p className="text-center text-lg font-gothic my-4">Built with ❤️ by DJCSI Tech Team</p>
      </motion.div>
      {/* <p className="text-center text-lg font-gothic">Built with ❤️ by DJCSI Tech Team</p> */}
    </div>
  );
};

export default Home;

// scrollbar-thin  lg:scrollbar scrollbar-thumb-[#D9D9D9] scrollbar-thumb-rounded-lg scrollbar-track-rounded-full
