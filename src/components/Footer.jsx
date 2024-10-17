import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
          Address Jaffna, Sri Lanka
        </p>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>jeyantharan@gmail.com</p>
          <p>+94 77 9900 299</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>Social Media</p>

        <div className='flex gap-10 text-white text-2xl mb-10 '>
          <a href="https://github.com/jeyantharan" target="blank"><BsGithub className='hover:scale-125' /></a>
          <a href="https://www.facebook.com/vijay.jey.100?mibextid=LQQJ4d" target="blank"><BsFacebook className='hover:scale-125' /></a>
          <a href="https://www.instagram.com/jey.jeyanth/profilecard/?igsh=MTE2eWNxOGdibzF6NA==" target="blank"><BsInstagram className='hover:scale-125' /></a>
          <a href="https://www.linkedin.com/in/jeyantharan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="blank"><BsLinkedin className='hover:scale-110' /></a>
          
          
        </div>

        <p className='text-gray-400 text-md tracking-wider'>@2024 Jeyanth</p>
      </div>
    </footer>
  );
};

export default Footer;
