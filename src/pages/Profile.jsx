import React from "react";
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineArrowLeft} from 'react-icons/ai';
import {BsGlobe} from 'react-icons/bs'
const Profile = () => {
	return (
		<div className="min-h-screen w-full 
						bg-[url('../public/assets/images/profile/popup_bg.jpg')] 
						bg-cover bg-no-repeat bg-left-bottom bg-fixed flex flex-col justify-center">
		
		<div className="max-w-xl w-full mb-9 mx-auto px-8 py-3 border-3 rounded-3xl border-black bg-white relative">
		<div className="max-w-fit text-black bg-darkOlive px-8 py-3 font-gothic border-3 rounded-3xl text-xl border-b-8 absolute -top-[10%] left-[33%] border-black">
			Mahek Jain
		</div>
			<div className="text-xl text-center text-black font-gothic leading-7 mb-7 mt-5">
				IT | Technical
			</div>


			<div className="font-normal text-xl text-center text-black font-gothic tracking-wider">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nibh nec magna pretium iaculis et in sapien. Nullam in felis quis sem tincidunt sagittis quis vel odio. Donec vel urna a sem lacinia convallis.
			</div>

			<div className="flex mt-5 items-center justify-center ">
			<div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
				<AiFillGithub className="w-[4.5rem] pb-2 text-2xl" size={'4.5rem'}/>
				<a href="#" className="font-[Candara] ">Github</a>
			</div>
			<div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
				<AiFillLinkedin className="w-[4.5rem] pb-2 text-2xl" size={'4.5rem'}/>
				<a href="#" className="font-[Candara] ">Linkedin</a>
			</div>
			<div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
				<AiFillInstagram className="w-[4.5rem] pb-2 text-2xl" size={'4.5rem'}/>
				<a href="#" className="font-[Candara] ">Instagram</a>
			</div>
			<div className="flex flex-col px-5 items-center pb-5 hover:text-[#525C52] hover:font-bold">
				<BsGlobe className="w-[3.5rem] pb-2 text-2xl" size={'4.5rem'}/>
				<a href="#" className="font-[Candara] ">Portfolio</a>
			</div>
			</div>
		</div>
		
		<div className="max-w-fit mx-auto text-black bg-darkOlive border-3 border-b-8 border-black px-8 py-3 font-gothic rounded-3xl text-xl flex hover:border-b-4 cursor-pointer">
		   <AiOutlineArrowLeft className="mr-2"/> BACK
		</div>
		</div>
	);
};

export default Profile;
