import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import srcIconRules from '../../assets/icon/iconRules.svg'
import srcIconDict from '../../assets/icon/iconDict.svg'
import srcIconAuthors from '../../assets/icon/iconAuthors.svg'
 
const Header = () => {
    return ( 
        <nav>
            <ul className="header-list"> 
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconRules} alt="" />
                    <img className="header-list-item-img" src="/Man-in-an-era-of-upheaval/src/assets/icon/iconRules.svg" alt="" />
                    <NavLink className="header-list-item-a" to='test'>Правила</NavLink>  
                </li>
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconDict} alt="" />
                    <img className="header-list-item-img" src="/src/assets/icon/iconDict.svg" alt="" />
                    <NavLink className="header-list-item-a" to='#'>Cловарь</NavLink>  
                </li>
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconAuthors} alt="" />
                    <NavLink className="header-list-item-a" to='#'>Об авторах</NavLink>  
                </li>
            </ul>
        </nav>
    );
};

export default Header;