import './Header.scss'
import { NavLink } from 'react-router-dom';
import srcIconRules from '../../assets/icon/iconRules.svg'
import srcIcons from '../../assets/icon/home-page.png'
import srcIconAuthors from '../../assets/icon/iconAuthors.svg'

 
const Header = () => {
    return ( 
        <nav className='header'>
            <ul className="header-list"> 
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIcons} alt="" />         
                    <NavLink className="header-list-item-a" to='/Man-in-an-era-of-upheaval'>В начало</NavLink>  
                </li>
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconRules} alt="" />         
                    <NavLink className="header-list-item-a" to='#'>Правила</NavLink>  
                </li>
                {/* <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconDict} alt="" />
                    <NavLink className="header-list-item-a" to='#'>Cловарь</NavLink>  
                </li> */}
                <li className="header-list-item">
                    <img className="header-list-item-img" src={srcIconAuthors} alt="" />
                    <NavLink className="header-list-item-a" to='authors'>Об Aвторах</NavLink>  
                </li>
            </ul>

        </nav>
    );
};

export default Header;