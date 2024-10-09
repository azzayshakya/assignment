import React, { useState } from 'react';
import '../css/Filter.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ filterType, index, isActive, toggleDropdown }) => {
    return (
        <div className="filterbox">
            <div className="filterboxupperrow" onClick={() => toggleDropdown(index)}>
                <span className="filtertype">{filterType}</span>
                <span className="filterdownicon"><MdOutlineKeyboardArrowDown /></span>
            </div>
            <div className="filterbottomrow">ALL</div>
            {isActive && (
                <div className="FilterDropdownContent">
                    <p className='filterdropdownununsekectall'>Unselect all</p>
                    <div className="filtercatogery">
                        {["Option 1", "Option 2", "Option 3"].map((option, idx) => (
                            <div className='filtercatogeryitems' key={idx}>
                                <span className='filterRadiobutton'>
                                    <input type="checkbox" className='radiobutton' name="filterOption" />
                                </span>
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Filter = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className="filter">
            <div className="filterbox filterboxCUSTOMIZABLE">
                <span className='radiobutton'>
                    <input type="checkbox" className='radiobutton' name="filterOption" />
                </span>
                <span>Customizable</span>
            </div>

            {["IDEAL FOR", "GENDER", "CATEGORY", "BRAND", "PRICE", "DISCOUNT"].map((filterType, index) => (
                <Dropdown
                    key={index}
                    filterType={filterType}
                    index={index}
                    isActive={activeDropdown === index}
                    toggleDropdown={toggleDropdown}
                />
            ))}
        </div>
    );
};

export default Filter;
