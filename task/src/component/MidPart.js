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

import  redheart  from "../images/red heart.png";
import { IoIosHeart } from "react-icons/io";



// import  t3  from "../images/t3.jpg";





const MidPart = () => {

    const [hearts, setHearts] = useState(Array(18).fill(true));

 
    const toggleHeart = (index) => {
        setHearts((prevHearts) => 
            prevHearts.map((heart, i) => (i === index ? !heart : heart))
        );
    };

    

    const [filter, setFilter] = useState(true);
    const toggleFilter = () => setFilter(!filter);

    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const cardsData = [
        { id: 1, img: b1, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 2, img: b2, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 3, img: b3, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 4, img: b4, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 5, img: b5, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 6, img: b6, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 7, img: t1, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 8, img: t2, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 9, img: d1, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 10, img: e3, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 11, img: d2, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 12, img: d3, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 13, img: d4, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 14, img: d5, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" },
        { id: 15, img: d6, name: "AJAY DRESS KDSL S IJSDF", about: "JDSLJ FPO APOD FA OJD OIF JDFSJ ISDJ" }
    ];


    return <div>
        <div className="midpartrow">
            <div className="itemsnumber">3425 ITEMS</div>
            <div className="filterbutton">
    <span onClick={toggleFilter}> 
        {
            filter ? 
            <div className='' >
                <span className='midparttoprowicons'><IoIosArrowDown/></span>
                <span>SHOW FILTER</span>
            </div> :
            <div className=''>
                <span className='midparttoprowicons'><MdKeyboardArrowLeft/></span>
                <span>CLOSE FILTER</span>
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
                    {cardsData.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="cardimg">
                                <img src={card.img} alt={card.name} />
                            </div>
                            <div className="cardname">{card.name}</div>
                            <div className="cardlastrow">
                                <div className="cardabout">{card.about}</div>
                                <div className="heart" onClick={() => toggleHeart(index)}>
                                    {hearts[index] ? (
                                        <div className='whiteheart'><CiHeart /></div>
                                    ) : (
                                        <div className='redheart'><IoIosHeart/></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>;
}



export default MidPart;