import React, { useState } from 'react';
import Filter from './Filter';
import {Link} from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import '../css/Midpart.css';
import  b1  from "../images/b1.jpg";
import  b2  from "../images/b2.jpg";
import  b3  from "../images/b3.jpg";
import  b4  from "../images/b4.jpg";
import  b5  from "../images/b5.jpg";
import  b6  from "../images/b6.jpg";
import  d1  from "../images/d1.jpg";
import  d2  from "../images/d2.jpg";
import  d3  from "../images/d3.jpg";
import  d4  from "../images/d4.jpg";
import  d5 from "../images/d5.jpg";
import  d6  from "../images/d6.jpg";

import  d7  from "../images/d7.jpg";
import  e1  from "../images/e1.jpg";
import  e2  from "../images/e2.jpg";
import e3 from "../images/e3.jpg";
import  t1  from "../images/t1.jpg";
import  t2  from "../images/t2.jpg";


// import  t3  from "../images/t3.jpg";





const MidPart = () => {
  

    const [filter, setfilter] = useState(false)
    const openfilter=()=>{
        setfilter(!filter);
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    return <div>
        <div className="midpartrow">
            <div className="itemsnumber">3425 ITEMS</div>
            <div className="filterbutton">
                <span onClick={openfilter}>
                    {
                        filter ? 
                        <div >
                            <span>SHOW FILTER</span>
                            <span><IoIosArrowDown/></span>
                        </div> :
                        <div>
                            <span>CLOSE FILTER</span>
                            <span><MdKeyboardArrowLeft/></span>
                        </div>
                    }
                    </span>
            </div>
            <div className="RecommenedButton" onClick={toggleDropdown}>
                <span>RECOMMENDED</span> <span><MdOutlineKeyboardArrowDown/></span>  
            
            {showDropdown && (
                    <div className="dropdownContent">
                        <p className='dropdownactive'> <span><FaCheck/></span>RECOMMENDED</p>
                        <p>NEWEST FIRST</p>
                        <p>POPULAR</p>
                        <p>PRICE : HIGH TO LOW</p>
                        <p>PRICE : LOW TO HIGH</p>
                    </div>
                )}
                </div>
        </div>
        <div className='cardsside'>
        {
            filter ? 
            <div>
                
            </div>
            :
            <div className="leftpart">
            <Filter/>
        </div>
        }
       
        <div className="rightpart">
            <div className="rightpartcards">
                <div className="card">
                    <div className="cardimg">
                        <img src={b1} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={b2} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={b3} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={b4} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={b5} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={b6} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={t1} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={t2} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={d1} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>


                <div className="card">
                    <div className="cardimg">
                        <img src={e3} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={d2} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={d3} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={d4} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={d5} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={d6} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={d7} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={e2} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={e1} alt="" />
                    </div>
                    <div className="cardname">
                        AJAY DRESS KDSL S IJSDF

                    </div>
                    <div className="cardlastrow">
                        <div className="cardabout">
                            JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ

                        </div>
                        <div className="heart">
                            <CiHeart/>

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
        </div>

    </div>;
}



export default MidPart;