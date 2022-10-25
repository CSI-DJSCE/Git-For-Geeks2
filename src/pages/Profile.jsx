import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineArrowLeft } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { useParams } from "react-router-dom";
import UsersData from "../data/User";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
const Profile = () => {
  const params = useParams();
  const { userId } = params;
  const userData = UsersData[userId];
  const { name, branch, description, links } = userData;

  if (UsersData[userId] === undefined) {
    return <ErrorPage />;
  }
  return (
    <div
      className="min-h-screen w-full bg-[url('../public/assets/images/profile/popup_mobile.png')]
						md:bg-[url('../public/assets/images/profile/popup_bg.jpg')] 
						bg-cover bg-no-repeat bg-[left_center] flex flex-col justify-center items-center"
    >
      <div className="max-w-[22rem] md:max-w-xl w-full mb-9 mx-3 md:mx-auto px-5 md:px-8 py-2 border-3 text-center rounded-3xl border-black bg-white justify-center">
        <div className="primary-btn -mt-10 text-center">{name}</div>
        <div className="text-xl text-center text-black font-gothic leading-7 mb-7 mt-5">
          {branch}
        </div>

        <div className="font-light text-lg text-center text-black font-gothic tracking-normal">
          {description}
        </div>

        <div className="flex mt-5 items-center justify-center ">
          {links.github && (
            <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
              <a href={links.github} className="font-[Candara] font-semibold ">
                <AiFillGithub
                  className="w-[3.5rem] md:w-[4.5rem] pb-1 ml-1 md:pb-2 text-2xl"
                  size={"4.5rem"}
                />
                Github
              </a>
            </div>
          )}
          {links.instagram && (
            <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
              <a href={links.linkedin} className="font-[Candara] font-semibold ">
                <AiFillLinkedin
                  className="w-[3.5rem] md:w-[4.5rem] ml-1 pb-1 md:pb-2 text-2xl"
                  size={"4.5rem"}
                />
                Linkedin
              </a>
            </div>
          )}
          {links.linkedin && (
            <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
              <a href={links.instagram} className="font-[Candara] font-semibold">
                <AiFillInstagram
                  className="w-[3.5rem] md:w-[4.5rem] pb-1 md:pb-2 md:ml-0 ml-2 text-2xl"
                  size={"4.5rem"}
                />
                Instagram
              </a>
            </div>
          )}
          {links.portfolio && (
            <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
              <a href={links.portfolio} className="font-[Candara] font-semibold">
                <BsGlobe
                  className="w-[3rem] md:w-[3.25rem] ml-2 pb-1 md:pb-2 md:ml-1 text-2xl"
                  size={"4.5rem"}
                />
                Portfolio
              </a>
            </div>
          )}
        </div>
      </div>

      <Link to="/">
        <div className="primary-btn primary-btn-click">
          <AiOutlineArrowLeft className="mr-2" /> BACK
        </div>
      </Link>
    </div>
  );
};

export default Profile;
