import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineArrowLeft } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { useParams } from "react-router-dom";
import UsersData from "../data/User";
import ErrorPage from "./ErrorPage";
const Profile = () => {
  const params = useParams();
  const { userId } = params;
  console.log("This is userId", userId);
  if (UsersData[userId] === undefined) {
    return <ErrorPage />;
  }
  return (
    <div
      className="min-h-screen w-full 
						bg-[url('../public/assets/images/profile/popup_bg.jpg')] 
						bg-cover bg-no-repeat bg-left-bottom bg-fixed flex flex-col justify-center"
    >
      <div className="max-w-xl w-full mb-9 mx-auto px-8 py-3 border-3 rounded-3xl border-black bg-white relative">
        <div className="primary-btn absolute -top-[10%] left-[33%]">
          {UsersData[userId]?.name && UsersData[userId].name}
        </div>

        <div className="text-xl text-center text-black font-gothic leading-7 mb-7 mt-5">
          {UsersData[userId]?.branch && UsersData[userId].branch}
        </div>

        <div className="font-normal text-xl text-center text-black font-gothic tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nibh nec magna pretium
          iaculis et in sapien. Nullam in felis quis sem tincidunt sagittis quis vel odio. Donec vel
          urna a sem lacinia convallis.
        </div>

        <div className="flex mt-5 items-center justify-center ">
          <div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <AiFillGithub className="w-[4.5rem] pb-2 text-2xl" size={"4.5rem"} />
            <a href="#" className="font-[Candara] ">
              Github
            </a>
          </div>
          <div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <AiFillLinkedin className="w-[4.5rem] pb-2 text-2xl" size={"4.5rem"} />
            <a href="#" className="font-[Candara] ">
              Linkedin
            </a>
          </div>
          <div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <AiFillInstagram className="w-[4.5rem] pb-2 text-2xl" size={"4.5rem"} />
            <a href="#" className="font-[Candara] ">
              Instagram
            </a>
          </div>
          <div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <BsGlobe className="w-[3.5rem] pb-2 text-2xl" size={"4.5rem"} />
            <a href="#" className="font-[Candara] ">
              Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="primary-btn primary-btn-click">
        <AiOutlineArrowLeft className="mr-2" /> BACK
      </div>
    </div>
  );
};

export default Profile;
