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



// import  t3  from "../images/t3.jpg";





const MidPart = () => {

    const [heart,setheart]=useState(true);
    const toggleheart=()=>{
        setheart(!heart);
    }
    const [heart2,setheart2]=useState(true);
    const toggleheart2=()=>{
        setheart2(!heart2);
    }
    const [heart3,setheart3]=useState(true);
    const toggleheart3=()=>{
        setheart3(!heart3);
    }
    const [heart4,setheart4]=useState(true);
    const toggleheart4=()=>{
        setheart4(!heart4);
    }
    const [heart5,setheart5]=useState(true);
    const toggleheart5=()=>{
        setheart5(!heart5);
    }
    const [heart6,setheart6]=useState(true);
    const toggleheart6=()=>{
        setheart6(!heart6);
    }
    const [heart7,setheart7]=useState(true);
    const toggleheart7=()=>{
        setheart7(!heart7);
    }
    const [heart8,setheart8]=useState(true);
    const toggleheart8=()=>{
        setheart8(!heart8);
    }
    const [heart9,setheart9]=useState(true);
    const toggleheart9=()=>{
        setheart9(!heart9);
    }
    const [heart10,setheart10]=useState(true);
    const toggleheart10=()=>{
        setheart10(!heart10);
    }

    const [heart11,setheart11]=useState(true);
    const toggleheart11=()=>{
        setheart11(!heart11);
    }
    const [heart12,setheart12]=useState(true);
    const toggleheart12=()=>{
        setheart12(!heart12);
    }
    const [heart13,setheart13]=useState(true);
    const toggleheart13=()=>{
        setheart13(!heart13);
    }
    const [heart14,setheart14]=useState(true);
    const toggleheart14=()=>{
        setheart14(!heart14);
    }
    const [heart15,setheart15]=useState(true);
    const toggleheart15=()=>{
        setheart15(!heart15);
    }
    const [heart16,setheart16]=useState(true);
    const toggleheart16=()=>{
        setheart16(!heart16);
    }
    const [heart17,setheart17]=useState(true);
    const toggleheart17=()=>{
        setheart17(!heart17);
    }
    const [heart18,setheart18]=useState(true);
    const toggleheart18=()=>{
        setheart18(!heart18);
    }

    

    const [filter, setfilter] = useState(true)
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
                        <div className="heart" onClick={toggleheart}>
                        {
                            heart ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart2}>
                        {
                            heart2 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart3}>
                        {
                            heart3 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart4}>
                        {
                            heart4 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart5}>
                        {
                            heart5 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart6}>
                        {
                            heart6 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart7}>
                        {
                            heart7 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart8}>
                        {
                            heart8 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart9}>
                        {
                            heart9 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart10}>
                        {
                            heart10 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart11}>
                        {
                            heart11 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart12}>
                        {
                            heart12 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart13}>
                        {
                            heart13 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart14}>
                        {
                            heart14 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart15}>
                        {
                            heart15 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart16}>
                        {
                            heart16 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart17}>
                        {
                            heart17 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

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
                        <div className="heart" onClick={toggleheart18}>
                        {
                            heart18 ? 
                            <div className='whiteheart'><CiHeart/></div>
                            :
                            <div className='redheart'> <img src={redheart} alt="" /></div>
                        }
                        
                            

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
        </div>

    </div>;
}



export default MidPart;