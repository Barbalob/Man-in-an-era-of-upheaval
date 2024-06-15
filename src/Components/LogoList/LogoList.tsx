import srcURFULogo from '../../assets/UrFULog.png'
import srcLogo2 from '../../assets/Logo2.png'
import srcLogo3 from '../../assets/Logo3.png'
import './LogoList.scss'

const LogoList = () => {
    return (
        <ul className='list-logo'>
            <li className='list-logo-item'><img className='list-logo-item-image' src={srcURFULogo} alt="" /></li>
            <li className='list-logo-item'><img className='list-logo-item-image image-center' src={srcLogo2} alt="" /></li>
            <li className='list-logo-item image-rigth'><img className='list-logo-item-image' src={srcLogo3} alt="" /></li>
        </ul>
    );
};

export default LogoList;