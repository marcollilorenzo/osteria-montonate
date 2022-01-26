import React from 'react';

// router
import { NavLink } from "react-router-dom";

//logo
import logo from "../img/logo.png"

function Header() {

    return <header className='flex flex-row justify-between items-center py-4 mx-auto max-w-6xl px-4'>
        <NavLink to="/">
            <img src={logo} className='h-20' />
        </NavLink>

        <nav className='flex space-x-4'>
            <NavLink style={({ isActive }) => ({
                color: isActive ? '#fff' : '',
                background: isActive ? '#b02718' : '',
            })} className='hover:bg-osteriaRed text-darkBrown hover:text-white font-regular text-xl cursor-pointer px-4 py-2 rounded-xl' to="/menu">Menù</NavLink>
            <NavLink style={({ isActive }) => ({
                color: isActive ? '#fff' : '',
                background: isActive ? '#b02718' : '',
            })} className='hover:bg-osteriaRed text-darkBrown hover:text-white font-regular text-xl  cursor-pointer px-4 py-2 rounded-xl' to="contatti">Contatti</NavLink>
        </nav>
    </header>
}

export default Header;
