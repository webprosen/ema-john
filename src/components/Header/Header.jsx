import { useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

useState

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header-nav'>
                <a href="/shop">Shop</a>
                <a href="">Order</a>
                <a href="">Inventory</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};

export default Header;