import { MdDashboardCustomize } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoMdCalendar } from "react-icons/io";
import { IoMdBusiness } from "react-icons/io";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import {FaBars} from 'react-icons/fa'

import logo from '../../assets/6.png';

import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';


import './sidebar.css'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<MdDashboardCustomize />
        },
        {
            path:"/business",
            name:"Business",
            icon:<IoMdBusiness/>
        },
        {
            path:"/calender",
            name:"Calender",
            icon:<IoMdCalendar/>
        },
        {
            path:"/currency",
            name:"Currency",
            icon:<HiMiniCurrencyDollar/>
        },
        {
            path:"/question",
            name:"FA Question",
            icon: <RxQuestionMarkCircled />
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<IoMdSettings/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "100px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}}><img src={logo} alt="logo" className="logo" /></h1>
                   <div style={{marginLeft: isOpen ? "60px" : "0px"}} className="bars">
                       <FaBars className="d-flex flex-row justify-content-end" onClick={toggle} />
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;