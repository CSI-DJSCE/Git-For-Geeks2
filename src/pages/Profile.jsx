import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineArrowLeft } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div
      className="min-h-screen w-full bg-[url('../public/assets/images/profile/popup_mobile.png')]
						md:bg-[url('../public/assets/images/profile/popup_bg.jpg')] 
						bg-cover bg-no-repeat bg-[left_center] flex flex-col justify-center items-center"
    >
      <div className="max-w-[22rem] md:max-w-xl w-full mb-9 mx-3 md:mx-auto px-5 md:px-8 py-2 border-3 text-center rounded-3xl border-black bg-white justify-center">
        <div className="primary-btn -mt-10 text-center">Priyanka Ramachandran</div>
        <div className="text-xl text-center text-black font-gothic leading-7 mb-7 mt-5">
          IT | Technical
        </div>

        <div className="font-light text-lg text-center text-black font-gothic tracking-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nibh nec magna pretium
          iaculis et in sapien. Nullam in felis quis sem tincidunt sagittis quis vel odio. Donec vel
          urna a sem lacinia convallis.
        </div>

        <div className="flex mt-5 items-center justify-center ">
          <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <AiFillGithub
              className="w-[3.5rem] md:w-[4.5rem] pb-1 md:pb-2 text-2xl"
              size={"4.5rem"}
            />
            <a href="#" className="font-[Candara] ">
              Github
            </a>
          </div>
          <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <AiFillLinkedin
              className="w-[3.5rem] md:w-[4.5rem] pb-1 md:pb-2 text-2xl"
              size={"4.5rem"}
            />
            <a href="#" className="font-[Candara] ">
              Linkedin
            </a>
          </div>
          <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <AiFillInstagram
              className="w-[3.5rem] md:w-[4.5rem] pb-1 md:pb-2 text-2xl"
              size={"4.5rem"}
            />
            <a href="#" className="font-[Candara] ">
              Instagram
            </a>
          </div>
          <div className="flex flex-col px-3 md:px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
            <BsGlobe className="w-[3rem] md:w-[3.25rem] pb-1 md:pb-2 text-2xl" size={"4.5rem"} />
            <a href="#" className="font-[Candara] ">
              Portfolio
            </a>
          </div>
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
