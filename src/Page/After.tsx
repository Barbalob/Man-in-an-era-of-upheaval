import React, { FC } from 'react';
import srcArrowMain from '../assets/arrowMain.png'

const After:FC<{optionsQuestion:any, setOptionsQuestion:any}> = ({optionsQuestion, setOptionsQuestion}) => {
    const NextQuestionHandler = () => {
        setOptionsQuestion({...optionsQuestion, id: optionsQuestion.id + 1, textAfter:''})
    }
    return (
        <div>
                <h1>{optionsQuestion.textAfter}</h1>
                <button onClick={NextQuestionHandler} className=''>
                    <p className='choice-btn-text'>Далее</p>
                    <img className='choice-btn-img' src={srcArrowMain} alt="" />
                </button>
        </div>
    );
};

export default After;