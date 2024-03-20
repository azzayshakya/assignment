import React from 'react';
import '../css/navbar.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsFlower2 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
    return <div>
        <div className="navbar">
            <div className="toplayer">
                <div className='navbariconside'>
                <div className=" navicon navicon2"><IoMdMenu/></div>

                <div className="navicon"><BsFlower2/></div>
                </div>
                
                <div className="navmidname">LOGO</div>
                <div className="links">
                    <div className="icon"><CiSearch/></div>
                    <div className="icon"><CiHeart/></div>
                    <div className="icon "><IoBagHandleOutline/></div>
                    <div className="icon usericon"><CiUser/></div>
                    <div className="icon naveng"><span className='naveng'>ENG</span><MdOutlineKeyboardArrowDown/></div>
                    
                </div>
            </div>
            <div className="bottomlayer">
                <ul className='bottomlayernormal'>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
                <ul className='forResponsiveNavbar'>
                <li className='ResponsiveNavShop'>SHOP</li>
                <li>HOME</li>

                </ul>
            </div>
            
        </div>
       

    </div>;
}


export default Navbar;
