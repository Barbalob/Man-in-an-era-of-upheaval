import React, { FC } from 'react';
import srcArrowMain from '../assets/arrowMain.png'

const After:FC<{optionsQuestion:any, setOptionsQuestion:any, dataQuestion:any}> = ({optionsQuestion, setOptionsQuestion, dataQuestion}) => {
    const NextQuestionHandler = () => {
        setOptionsQuestion({...optionsQuestion, id: optionsQuestion.id + 1, textAfter:''})
    }
    return (
        <div className='choice'>
            <ul className='choice-upper'>
                <li className='choice-upper-item'><p className='choice-upper-item-text'>{optionsQuestion.textAfter}</p></li>
                <li className='choice-upper-item choice-upper-item-container decor'><img className='choice-upper-item-img' src={dataQuestion.srcImg} alt="" /></li>
            </ul>
            <button onClick={NextQuestionHandler}  className='characters-btn'>
                <p className='characters-btn-text'>Далее</p>
                <img className='characters-btn-img' src={srcArrowMain} alt="" />
            </button>
        </div>
    );
};

export default After;