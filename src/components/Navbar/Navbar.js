import React from 'react';
import { IoMdHome } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className='navbar_container'>
        <ul>
            <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/'><IoMdHome size={26}/><div>Home</div></NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/chats'><IoChatbubbleEllipsesOutline size={26}/><div>Chats</div></NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/doctors'><FaUserDoctor size={26}/><div>Doctors</div></NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/profile'><CiUser size={26}/><div>Profile</div></NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar