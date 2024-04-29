import { useState } from 'react';
import './GameChoice.scss'
import srcPeapeasantImg from '../../assets/characters/peasantImg.png'
import srcNoblemanImg from '../../assets/characters/noblemanImg.png'
import srcTestImg from '../../assets/characters/testImg.png'
import srcArrowMain from '../../assets/arrowMain.png'
import srcArrowChoice from '../../assets/arrow2.svg'
import srcChoiceImg from '../../assets/img/1.png'

const GameChoice = () => {
    const [active, setActive] = useState(false)
    const [answers, setAnswers] = useState([
        {
            id:'1',
            text:'Оплатить поездку на ирбитскую ярмарку',
            href:'',
            active: false
        },
        {
            id:'2',
            text:'Оплатить свадьбу сына',
            href:'',
            active: false
        },
        {
            id:'3',
            text:'Сыграть в карты в кабаке',
            href:'',
            active: false
        },
    ])

    const ClickHandler = (index:number) => {
        setActive(true)
        let t = answers.map(el =>  {return {...el, active:false}})
        t[index].active = true
        setAnswers(t)
    }
    return (
        <div className='choice'>
            <ul className='choice-upper'>
                <li className='choice-upper-item'><p className='choice-upper-item-text'>На дворе 1895 год. Вы – обычный крестьянин-середняк, которому совсем недавно исполнилось тридцать лет. За Вашей спиной стоит большая семья, состоящая из девяти человек, что, конечно, является несомненным преимуществом: все детки при деле и приносят копеечку. Подрабатывая то здесь, то там и продавая излишки, Ваш «семейный кооператив» смог накопить внушительную сумму.</p></li>
                <li className='choice-upper-item decor'><img className='choice-upper-item-img' src={srcChoiceImg} alt="" /></li>
            </ul>

            <ul className ='choice-section'>
                <li><p className='choice-section-call'>Перед Вами встает непраздный вопрос как ее потратить:</p></li>
                <li><img className='choice-section-arrow' src={srcArrowChoice} alt="" /></li>
                <li><ul className='choice-section-answers'>
                {answers.map((answer, index) => {
                    return (
                        <li key={answer.id} className={`${answer.active?"active":""}`}>
                            <button onClick={()=>ClickHandler(index)} className='choice-section-answers-btn'>
                                <p className='choice-section-answers-text'>{answer.text}</p>
                            </button>
                        </li>
                    )
                })}
                </ul></li>
                <li><button disabled={!active} className='choice-btn'>
                    <p className='choice-btn-text'>Далее</p>
                    <img className='choice-btn-img' src={srcArrowMain} alt="" />
                </button></li>
            </ul>    
            
        </div>    
    );
};

export default GameChoice;