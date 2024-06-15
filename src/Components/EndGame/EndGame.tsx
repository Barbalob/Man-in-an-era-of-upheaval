import './EndGame.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import srcArrowMain from '../../assets/arrowMain.png'
import { FC } from 'react';

const EndGame:FC<{end:any}> = ({end}) => {
    console.log(end);
    const nav = useNavigate()

    return (
        <div className='result'>
            <h2 className='characters-title'>Поздравляем, вы завершили квест!</h2>
            <ul className='result-upper'>
                <li className='result-upper-item'><p className='result-upper-item-text'>{end[0]}</p></li>
                <li className='result-upper-item'>
                    <p className='result-upper-item-text'>{end[1]}</p>
                    <div className='bibliogr'>
                        <NavLink className="bibliogr-item" to='#'>ПОДРОБНЕЕ</NavLink>   
                    </div>
                    </li>
            </ul>
            <button onClick={() => nav('/Man-in-an-era-of-upheaval') } className='result-btn'>
                    <p className='result-btn-text'>В начало</p>
                    <img className='result-btn-img' src={srcArrowMain} alt="" />
            </button>  
        </div>    
    );
};

export default EndGame;