import React from 'react';
import Header from '../Components/Header/Header';
import src1 from '../assets/authors/Сергей-Рябов.jpg'
import src2 from '../assets/authors/Елена-Худякова.jpg'
import src3 from '../assets/authors/Maria-min.jpg'
import src4 from '../assets/authors/Lisa-min.jpg'
import src5 from '../assets/authors/Artem-min.jpg'
import src6 from '../assets/authors/Andrey-min.jpg'
import src7 from '../assets/authors/Дарья-Кадошникова.jpg'
import src8 from '../assets/authors/Илья-Кушков.jpg'
import src9 from '../assets/authors/Артём-Степанов.jpg'
import src10 from '../assets/authors/Александр-Чирва.jpg'
import src11 from '../assets/authors/Алексей-Звездин.jpg'
import './Authors.scss'
const Authors = () => {
    return (
        <>
            <Header />
            <h1 className='authors-title'>Об авторах</h1>
            <ul className='authors-list'>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src1} alt="" />
                        <h2  className='authors-list-items-name'>Рябов Сергей</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Куратор проекта</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src2} alt="" />
                        <h2  className='authors-list-items-name'>Худякова Елена</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Куратор СОКМ</p>
                    </div>
                </li>
            </ul>
            <ul className='authors-list'>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src3} alt="" />
                        <h2  className='authors-list-items-name'>Кузнецова Мария</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Тимлид, аналитик</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src4} alt="" />
                        <h2  className='authors-list-items-name'>Федорова Елизавета</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Дизайнер</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src5} alt="" />
                        <h2  className='authors-list-items-name'>Кунщиков Артем</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Frontend-разработчик</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src6} alt="" />
                        <h2  className='authors-list-items-name'>Ситников Андрей</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Frontend-разработчик</p>
                    </div>
                </li>
            </ul>
            <ul className='authors-list'>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src7} alt="" />
                        <h2  className='authors-list-items-name'>Кадошникова Дарья</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Тимлид команды историков</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src8} alt="" />
                        <h2  className='authors-list-items-name'>Кушков Илья</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Контент-мейкер</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src9} alt="" />
                        <h2  className='authors-list-items-name'>Степанов Артем</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Контент-мейкер</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src10} alt="" />
                        <h2  className='authors-list-items-name'>Чирва Александр</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Аналитик</p>
                    </div>
                </li>
                <li className='authors-list-items'>
                    <div  className='authors-list-items-wrapper'>
                        <img className='authors-list-items-image' src={src11} alt="" />
                        <h2  className='authors-list-items-name'>Звездин Алексей</h2>
                        <div className="authors-list-items-line"/>
                        <p  className='authors-list-items-description'>Контент-мейкер</p>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Authors;