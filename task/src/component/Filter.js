import React, { useState } from 'react';
import '../css/Filter.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const [showDropdown2, setShowDropdown2] = useState(false);

    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
    }
    const [showDropdown3, setShowDropdown3] = useState(false);

    const toggleDropdown3 = () => {
        setShowDropdown3(!showDropdown3);
    }
    const [showDropdown4, setShowDropdown4] = useState(false);

    const toggleDropdown4 = () => {
        setShowDropdown4(!showDropdown4);
    }
    const [showDropdown5, setShowDropdown5] = useState(false);

    const toggleDropdown5 = () => {
        setShowDropdown5(!showDropdown5);
    }
    const [showDropdown6, setShowDropdown6] = useState(false);

    const toggleDropdown6 = () => {
        setShowDropdown6(!showDropdown6);
    }
    return <div>
        <div className="filter">
            <div className="filterbox filterboxCUSTOMIZABLE">   
                <span className='radiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Customizble</span>
            </div>

            <div className="filterbox">
                <div className="filterboxupperrow"  onClick={toggleDropdown}>
                    <span className="filtertype">IDEAL FOR</span>
                    <span className="filterdownicon"><MdOutlineKeyboardArrowDown/></span>   
                </div>
                <div className="filterbottomrow">ALL</div>
                {showDropdown && (
                    <div className="FilterDropdownContent">
                        <p className='filterdropdownununsekectall'>Unselect all</p>
                        <div className="filtercatogery">
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Men</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Women</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Baby & Kids</span></div>

                        </div>
                      
                        
                    </div>
                )}
            </div>

            <div className="filterbox">
                <div className="filterboxupperrow"  onClick={toggleDropdown2}>
                    <span className="filtertype">IDEAL FOR</span>
                    <span className="filterdownicon"><MdOutlineKeyboardArrowDown/></span>   
                </div>
                <div className="filterbottomrow">ALL</div>
                {showDropdown2 && (
                    <div className="FilterDropdownContent">
                        <p className='filterdropdownununsekectall'>Unselect all</p>
                        <div className="filtercatogery">
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Men</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Women</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Baby & Kids</span></div>

                        </div>
                      
                        
                    </div>
                )}
            </div>

            <div className="filterbox">
                <div className="filterboxupperrow"  onClick={toggleDropdown3}>
                    <span className="filtertype">IDEAL FOR</span>
                    <span className="filterdownicon"><MdOutlineKeyboardArrowDown/></span>   
                </div>
                <div className="filterbottomrow">ALL</div>
                {showDropdown3 && (
                    <div className="FilterDropdownContent">
                        <p className='filterdropdownununsekectall'>Unselect all</p>
                        <div className="filtercatogery">
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Men</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Women</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Baby & Kids</span></div>

                        </div>
                      
                        
                    </div>
                )}
            </div>

            <div className="filterbox">
                <div className="filterboxupperrow"  onClick={toggleDropdown4}>
                    <span className="filtertype">IDEAL FOR</span>
                    <span className="filterdownicon"><MdOutlineKeyboardArrowDown/></span>   
                </div>
                <div className="filterbottomrow">ALL</div>
                {showDropdown4 && (
                    <div className="FilterDropdownContent">
                        <p className='filterdropdownununsekectall'>Unselect all</p>
                        <div className="filtercatogery">
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Men</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Women</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Baby & Kids</span></div>

                        </div>
                      
                        
                    </div>
                )}
            </div>

            <div className="filterbox">
                <div className="filterboxupperrow"  onClick={toggleDropdown5}>
                    <span className="filtertype">IDEAL FOR</span>
                    <span className="filterdownicon"><MdOutlineKeyboardArrowDown/></span>   
                </div>
                <div className="filterbottomrow">ALL</div>
                {showDropdown5 && (
                    <div className="FilterDropdownContent">
                        <p className='filterdropdownununsekectall'>Unselect all</p>
                        <div className="filtercatogery">
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Men</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Women</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Baby & Kids</span></div>

                        </div>
                      
                        
                    </div>
                )}
            </div>

            <div className="filterbox">
                <div className="filterboxupperrow"  onClick={toggleDropdown6}>
                    <span className="filtertype">IDEAL FOR</span>
                    <span className="filterdownicon"><MdOutlineKeyboardArrowDown/></span>   
                </div>
                <div className="filterbottomrow">ALL</div>
                {showDropdown6 && (
                    <div className="FilterDropdownContent">
                        <p className='filterdropdownununsekectall'>Unselect all</p>
                        <div className="filtercatogery">
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Men</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Women</span></div>
                        <div className='filtercatogeryitems'><span className='filterRadiobutton'><input type="checkbox" className='radiobutton' name="filterOption" /></span><span>Baby & Kids</span></div>
                        </div>
                      
                        
                    </div>
                )}
            </div>
            
            
            
        </div>
    </div>;
}


export default Filter;