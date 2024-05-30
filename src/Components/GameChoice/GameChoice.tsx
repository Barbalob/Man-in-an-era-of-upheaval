import { FC, useEffect, useState } from 'react';
import './GameChoice.scss'
import srcArrowMain from '../../assets/arrowMain.png'
import srcArrowChoice from '../../assets/arrow2.svg'

const GameChoice:FC<{dataQuestion:any, setOptionsQuestion:any, optionsQuestion:any}> = ({dataQuestion, setOptionsQuestion, optionsQuestion}) => {
    const [active, setActive] = useState(false)
    const [answers, setAnswers] = useState(dataQuestion.choice.map((el:any) => {return {...el, active: false}}))

    useEffect(()=>
        {
            setAnswers(dataQuestion.choice.map((el:any) => {return {...el, active: false}}))
            setActive(false)
        },
        [dataQuestion]
    )

    const ClickHandler = (index:number) => {
        setActive(true)
        let t = answers.map((el:any) =>  {return {...el, active:false}})
        t[index].active = true
        setAnswers(t)
    }

    const NextQuestionHandler = () => {
        const activeAnswer = answers.filter((el:any) => el.active === true)
        const oldId = optionsQuestion.id
        const isEnd = activeAnswer[0].isEnd
        const textAfter = activeAnswer[0].textAfter
        setOptionsQuestion({...optionsQuestion, isEnd, textAfter, })
    }

    return (
        <div className='choice'>
            <ul className='choice-upper'>
                <li className='choice-upper-item'><p className='choice-upper-item-text'>{dataQuestion.description}</p></li>
                <li className='choice-upper-item choice-upper-item-container decor'><img className='choice-upper-item-img' src={dataQuestion.srcImg} alt="" /></li>
            </ul>

            <ul className ='choice-section'>
                <li><p className='choice-section-call'>{dataQuestion.textQuestion}</p></li>
                <li><img className='choice-section-arrow' src={srcArrowChoice} alt="" /></li>
                <li><ul className='choice-section-answers'>
                {answers.map((answer:any, index:number) => {
                    return (
                        <li key={index} className={`${answer.active?"active":""}`}>
                            <button onClick={()=>ClickHandler(index)} className='choice-section-answers-btn'>
                                <p className='choice-section-answers-text'>{answer.textAnswer}</p>
                            </button>
                        </li>
                    )
                })}
                </ul></li>
                <li><button onClick={NextQuestionHandler} disabled={!active} className='choice-btn'>
                    <p className='choice-btn-text'>Далее</p>
                    <img className='choice-btn-img' src={srcArrowMain} alt="" />
                </button></li>
            </ul>    
            
        </div>    
    );
};

export default GameChoice;