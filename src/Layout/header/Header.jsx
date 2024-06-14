import React from 'react';
import './Header.scss'
import Logo from '../../images/Group 1399.png'
const Header = () => {
    return (
     
        <header className='header'>
            <div className="header__container container">
                <div className="header__logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className='header__lists'>
                <li>Home</li>
                    <li>Categories</li>
                    <li>My Collections  </li>
                    <li>Blog</li>
                </ul>
                <div class="header__auth">
                    <p>Login</p>
                    <button>Sign Up</button>
                </div>
                </div>
        </header>  
       
    );
};

export default Header;