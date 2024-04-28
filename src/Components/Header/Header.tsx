import './Header.scss'
import { NavLink } from 'react-router-dom';
import srcIconRules from '../../assets/icon/iconRules.svg'
import srcIconDict from '../../assets/icon/iconDict.svg'
import srcIconAuthors from '../../assets/icon/iconAuthors.svg'
 
const Header = () => {
    return ( 
        <nav className='header'>
            <ul className="header-list"> 
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconRules} alt="" />         
                    <NavLink className="header-list-item-a" to='test'>Правила</NavLink>  
                </li>
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconDict} alt="" />
                    <NavLink className="header-list-item-a" to='#'>Cловарь</NavLink>  
                </li>
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconAuthors} alt="" />
                    <NavLink className="header-list-item-a" to='#'>Aвторы</NavLink>  
                </li>
            </ul>
        </nav>
    );
};

export default Header;