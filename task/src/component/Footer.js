import React from 'react';
import '../css/Footer.css'

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import {gpay} from '../images/google-pay.svg'
import  gpay  from "../images/google-pay.svg";
import  razorpay  from "../images/razorpay.6e46f6f.svg";
import  upi  from "../images/upi.6114ac6.svg";
import  applepay  from "../images/apple-pay.svg";
import  mastercard  from "../images/master-card.svg";
import  paypal  from "../images/paypal.png";
import  usaflag  from "../images/usaflag.jpg";



import { MdCameraAlt } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
const Footer = () => {
    return <div >
        <div className="footer">

        <div className="footerTop">
            <div className="topFooterLeftSide">
                <p className="tf1">BE THE FIRST TO KNOW</p>
                <p className="tf2">Sign up for updates from meta muse</p>
                <div className="SearchInFooter">
                    <div className="inputinfoooter">
                        <input type="text" />
                    </div>
                    <div className="buttoninFooter">
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="topFooterRightSide">
                <p className='contacatusinfooter'>CONTACT US</p>
                <p>+44 212 321 2211</p>
                {/* <p className='custmermail'>customer2@mettamuse.com</p> */}
                <p className='currensyinfooter'>CURRENCY</p>
                <p className='usdinfooter'><div className="flag"><img src={usaflag} alt="" /></div><div className="dot"><LuDot/></div><div className='usdinTopFooterRightSide'>USD</div></p>
                <p className='aboutTransactionInFooter'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                
            </div>

        </div>
    <div className="footerBottom">
            
 
        <div className="leftinbottomfooter">

        <p className='bottomfutterboldline resinfooter activebottomfutter'><span>mettā muse </span> <span  className='bottomfutterdownarrow'><MdOutlineKeyboardArrowDown/></span></p>
            <p className='bottomfooterbottomitems'>About Us</p>
            <p className='bottomfooterbottomitems'>Stories</p>
            <p className='bottomfooterbottomitems'>Artisans</p>
            <p className='bottomfooterbottomitems'>Boutiques</p>
            <p className='bottomfooterbottomitems'>Contact Us</p>
            <p className='bottomfooterbottomitems'>EU Compliances Docs</p>
            

        </div>

        <div className="midinbottomfooter">

        <p className='bottomfutterboldline resinfooter resinfooter2'><span>Quick Links </span> <span className='bottomfutterdownarrow'><MdOutlineKeyboardArrowDown/></span></p>
            <p className='bottomfooterbottomitems'>Orders & Shipping</p>
            <p className='bottomfooterbottomitems'>Join/Login as a Seller</p>
            <p className='bottomfooterbottomitems'>Payment & Pricing</p>
            <p className='bottomfooterbottomitems'>Return & Refunds</p>
            <p className='bottomfooterbottomitems'>FAQs</p>
            <p className='bottomfooterbottomitems'>Privacy Policy</p>
            <p className='bottomfooterbottomitems'>Terms & Conditions</p>

        </div>

        <div className="lastinbottomfooter">
            <p className='bottomfutterboldline bottomfutterboldlineFollowUs'>FOLLOW US</p>
            <p className='bottomfootericons'>
                <p><MdCameraAlt/></p> 
                 <p><FaLinkedin/></p>
            </p>
            <p>metta musse ACCEPTS</p>
            <p className='trans_images'>
            <img src={gpay} alt="" />
            <img src={paypal} alt="" />
            <img src={mastercard} alt="" />
            <img src={upi} alt="" />
            <img src={applepay} alt="" />
            <img src={razorpay} alt="" />
            </p>

        </div>
        
    </div> 

    <div className="copyrightfooter">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div> 


    </div>
            
    
    </div>;
}


export default Footer;