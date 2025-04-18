import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import logo from "../assets/meowbowbow.png";  
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiBadgeCheck } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import { useSelector } from 'react-redux';

const FooterComponent = () => {
    const { category } = useSelector((state) => state.category);

  return (
    <div className='bg-primary text-white  text-sm'>
        <div className='bg-secondary w-full flex justify-around text-base'>
            <div className='flex flex-col md:flex-row justify-around w-full '>
                <div className='flex items-center justify-center gap-2 bg-blue-500 w-full p-2'>
                    <LiaShippingFastSolid className='text-3xl'/> Fast & Secured Delivery
                </div>
                <div className='flex items-center justify-center gap-2 bg-yellow-500 w-full p-2.5'>
                    <RiSecurePaymentLine className='text-3xl' /> 100% Safe & Secure Payment
                </div>

            </div>
            <div className='flex flex-col md:flex-row justify-around w-full'>
            <div className='flex items-center justify-center gap-2 bg-secondary w-full p-2'>
                    <BiBadgeCheck className='text-3xl' /> Genuine & Authentic
                </div>
                <div className='flex items-center justify-center gap-2 bg-red-500 w-full p-2.5'>
                    <MdOutlineSentimentVerySatisfied className='text-3xl' /> 100% Customer Satisfied
                </div>
            </div>
        </div>
        <div className=' flex flex-col lg:flex-row p-4 justify-between gap-6'>
            {/* About Section */}
            <div className='lg:w-1/4 text-left'>
                <h3 className='border-b-2 pb-2 font-bold'>ABOUT US</h3>
                <img src={logo} alt="meowbowbow" className='mt-2 m-auto bg-white h-14 w-14 rounded-full'/>
                <p>We specialize in premium pet food, fun and functional accessories, grooming essentials, toys, and wellness products—everything your furry companions need to stay happy, healthy, and pampered.</p>
            </div>

            {/* Quick Links Section */}
            <div className='lg:w-1/4 text-left'>
                <h3 className='border-b-2 pb-2 font-bold'>QUICK LiNK</h3>
                <ul className='mt-2 space-y-2h'>
                    {["About US", "Contact Us", "Privacy Policy", "Terms and Condition"].map((item, index) => (
                        <li key={index} className='flex justify-start items-center gap-2' ><IoIosArrowForward /><NavLink to={`/${item.replaceAll(" ","-").toLowerCase()}`} className="hover:underline" >{item}</NavLink></li>
                    ))}
                </ul>
            </div>

            {/* Our Category Section */}
            {category && (
                <div className='lg:w-1/4 text-left'>
                    <h3 className='border-b-2 pb-2 font-bold'>OUR CATEGORY</h3>
                    <ul className='mt-2'>
                        {category.map((item, index) => {
                            if (index < 4) {
                                return <li key={index} className='flex justify-start items-center gap-2' ><IoIosArrowForward /><NavLink to={`/search-result/${item._id}`} className="hover:underline" >{item.name}</NavLink></li>
                            } else {
                                return
                            }
                        })}
                    </ul>
            </div>)}

            {/* Contact Section */}
            <div className='lg:w-1/4 text-left'>
                <h3 className='border-b-2 pb-2 font-bold'>GET IN TOUCH</h3>
                <div className='space-y-2 mt-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <MdOutlineEmail className='text-2xl' />
                        <a href="mailto:info@ungagros.com" target="_blank" rel="noopener noreferrer" className="">
                            info@meowbowbow.com
                        </a>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FiPhone className='text-2xl' />
                        <p>+91 9901876682</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <a href="" target="_blank" rel="noopener noreferrer" className='flex justify-start items-center gap-2' >
                            <GrMapLocation className='text-2xl' />
                            <p className='px-2'>MeowBowbow,  <br /> Bengaluru,<br /> Karnataka, India</p>
                        </a>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className='pt-4'>
                    <h3 className='border-b-2 pb-2 font-bold'>FOLLOW US</h3>
                    <div className='flex justify-start gap-4 text-2xl pt-2'>
                        <a href="https://www.facebook.com/profile.php?id=100091933407959" target="_blank" rel="noopener noreferrer" className='flex justify-start items-center gap-2' >
                            <AiOutlineFacebook className='cursor-pointer text-2xl mr-2' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100091933407959" target="_blank" rel="noopener noreferrer" className='flex justify-start items-center gap-2' >
                            <FaInstagram className='cursor-pointer text-2xl mr-2' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100091933407959" target="_blank" rel="noopener noreferrer" className='flex justify-start items-center gap-2' >
                            <AiOutlineYoutube className='cursor-pointer text-2xl mr-2' />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright Section */}
        <div className='text-center p-2 bg-secondary text-white mt-6'>
            <FaRegCopyright className='inline mr-2' /> 
            <p className='inline'>Meowbowbow 2025, All rights reserved. Developed by <a href="https://www.prajnansoftwares.com/aboutus" target='_blank'>Prajnan Softwares</a></p>
        </div>
    </div>
  )
}

export default FooterComponent