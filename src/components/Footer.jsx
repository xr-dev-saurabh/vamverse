import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa';
import {AiOutlineYoutube} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='w-full'>
    <div className="new_footer_area">
    <div className='text-[#4b505e] py-6'>
    <h3 className="f-title f_600 t_color f_size_18  text-center">Social Media</h3>
         <div className='py-2 text-sm cursor-pointer text-center  place-content-center flex flex-wrap gap-5'>
        <a href="https://www.facebook.com/people/Vamverse/100086556952988/" target="_blank" rel="noreferrer"><FaFacebookSquare size={30} /></a>
        <a href="https://www.instagram.com/reealtech" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
        <a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"><FaTwitterSquare size={30} /></a>
        <a href="https://www.youtube.com/channel/UCULWXOwErviOPCbfaoOqd7w" target="_blank" rel="noreferrer"><AiOutlineYoutube size={30} /></a>
 </div>
 </div>
    <div className="new_footer_top flex flex-row "> 
        <div className="footer_bg">
        <div className="footer_bg_one"></div>
        <div className="footer_bg_two"></div>
        </div>
        </div>
       
        <div className="footer_bottom text-center">             
              <h3 className='text-center'>© Uprising Tradex LLP. 2022 All rights reserved.</h3>
               <h3 className=' flex place-content-center text-center '><span>Made with ❤️ by Vamverse</span></h3>        
        </div>
    </div>
    </div>
  );
};

export default Footer;
