import React from 'react';
import {Link} from 'react-router-dom';



function TopNav() {
    return (
        <nav>
            <ul className="top-nav-links">
                <Link  to='/'>
                <li>Home</li>
                </Link>
               <Link to='/about'>
                <li>About</li>
               </Link>
               <Link to='/menu'>
                <li>Menu</li>
               </Link>
               <Link to='/contact'>
                <li>Contact</li>
               </Link>
            </ul>
        </nav>
    )
}
export default TopNav;
