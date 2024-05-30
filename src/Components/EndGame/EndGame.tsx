import { FC, useEffect, useState } from 'react';
import './EndGame.scss'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import srcArrowMain from '../../assets/arrowMain.png'

const EndGame:FC<{dataQuestion:any, setOptionsQuestion:any, optionsQuestion:any}> = ({dataQuestion, setOptionsQuestion, optionsQuestion}) => {
    // const results = [
    //     {
    //         id:'1',
    //         textFirst:'',
    //         textSecond:'',
    //     },
    // ]
    const nav = useNavigate()

    return (
        <div className='result'>
            <h2 className='characters-title'>Поздравляем, вы завершили квест!</h2>
            <ul className='result-upper'>
                <li className='result-upper-item'><p className='result-upper-item-text'>Несмотря на то долог или короток был Ваш путь, большинство уральских крестьян в конце XIX – начале XX века проживали насыщенную и полную различных событий жизнь. Судьбы многих людей складывались иногда невообразимым, причудливым образом. Главное же, что каждому из них довелось внести тот или иной вклад в судьбу нашего Отечества.</p></li>
                <li className='result-upper-item'>
                    <p className='result-upper-item-text'>Их положению, деятельности и месте в российской истории посвящено немало трудов и научных исследований. С некоторыми из них команда проекта предлагает Вам познакомиться прямо сейчас:</p>
                    <div className='bibliogr'>
                        <NavLink className="bibliogr-item" to='#'>ПОДРОБНЕЕ</NavLink>   
                    </div>
                    </li>
            </ul>
            <button onClick={e => nav('/Man-in-an-era-of-upheaval') } disabled='' className='result-btn'>
                    <p className='result-btn-text'>В начало</p>
                    <img className='result-btn-img' src={srcArrowMain} alt="" />
            </button>  
        </div>    
    );
};

export default EndGame;