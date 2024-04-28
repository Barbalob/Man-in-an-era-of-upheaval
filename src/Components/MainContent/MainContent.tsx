import './MainContent.scss'
import srcMainImg from '../../assets/mainImg.png'
import srcArrowMain from '../../assets/arrowMain.png'
import { NavLink } from 'react-router-dom';

const MainContent = () => {
    return (
        <div className='main-content'>
            <h1 className='main-content-title'>Человек в эпоху потрясений:<br/> Урал на рубеже XIX-XX веков</h1>
            <img className='main-content-img' src={srcMainImg} alt="" />
            <div className="main-content-wrapper">
                <h2 className='main-content-description'>Исторический квест, посвященный истории Урала рубежа XIX–XX веков</h2>
                <NavLink to='character-selection' className='main-content-btn'>
                    <p className='main-content-btn-text'>Начать игру</p>
                    <img className='main-content-btn-img' src={srcArrowMain} alt="" />
                </NavLink>
            </div>
        </div>
    );
};

export default MainContent;