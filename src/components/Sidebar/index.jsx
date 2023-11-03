import React, {  useState } from "react";
import Styles from "./Sidebar.module.css";
import { navLinks } from "./data";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaShareAlt, FaBars, FaTimes } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import Logo from "../../assets/logo.png"



const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 const closeSidebar=()=>{
  setIsOpen(false)
 }

  return (
    <>
    <nav  className={`${Styles.topNav} ${isOpen ? Styles.open : ""}`}>

      <div  className="d-flex flex-column justify-content-between p-3">
        
        <ul>
           {navLinks.map(({ id, title, link }) => (
             <li key={id}>
               <NavLink onClick={closeSidebar} className="d-block p-2 text-white" to={link}>{title}</NavLink>
             </li>
           ))}
        </ul>

       
            
        <div className="copyright ">
          <div className="social-icons">
            <Link to="https://facebook.com" target="blank">
            <FaFacebookF className="cursor text-white" size="1.5rem"/>
            </Link>
            <Link to="https://twitter.com" target="blank">
            <FaTwitter className="mx-3 cursor text-white" size="1.5rem"/>
            </Link>
            <Link to="https://youtube.com" target="blank">
            <BsYoutube className="cursor text-white"  size="1.5rem"/>
            </Link>
          </div>
  
          <p className="mt-4">
            Copyright © 2023 All Rights Reserved.
            Designed by <br />
          <span>Kareem Ebraheem</span>
          </p>
     
         

        </div>

        
      </div>

      <div  className="text-black px-2 py-3 d-flex flex-column justify-content-between align-items-center">

        <NavLink  to="/" onClick={closeSidebar}>
          <img
            src={Logo}
            className={`${Styles.logo} cursor`}
            alt="Yummy Logo"
          />
        </NavLink>
      
        {isOpen ? <FaTimes onClick={toggleSidebar}className="cursor"size="1.5rem" />
        :  <FaBars onClick={toggleSidebar} className="cursor" size="1.5rem"/>
        }

        <div className="icons d-flex flex-column gap-2">
        <FaShareAlt className="cursor" size="1.5rem"/>
         <BiWorld  className=" cursor" size="1.5rem"/>
        </div>
      </div>

    </nav>
  </>
  );
};

export default Sidebar;
