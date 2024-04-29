import { useState } from 'react';
import './Characters.scss'
import srcPeapeasantImg from '../../assets/characters/peasantImg.png'
import srcNoblemanImg from '../../assets/characters/noblemanImg.png'
import srcTestImg from '../../assets/characters/testImg.png'
import srcArrowMain from '../../assets/arrowMain.png'

const Characters = () => {
    const [active, setActive] = useState(false)
    const [characters, setCharacters] = useState([
        {
            name:'Дворянин',
            href:'',
            srcImg:srcPeapeasantImg,
            active: false
        },
        {
            name:'Купец',
            href:'',
            srcImg:srcNoblemanImg,
            active: false
        },
        {
            name:'Крестьянин',
            href:'',
            srcImg:srcTestImg,
            active: false
        },
        {
            name:'Рабочий',
            href:'',
            srcImg:srcTestImg,
            active: false
        }, 
    ])

    const ClickHandler = (index:number) => {
        setActive(true)
        let t = characters.map(el =>  {return {...el, active:false}})
        t[index].active = true
        setCharacters(t)
    }
    return (
        <div className='characters'>
            <h2 className='characters-title'>Выбор ветки </h2>
            <ul  className='characters-list'>
                {characters.map((character, index) => {
                    return (
                        <li key={character.name} className={`characters-list-item ${character.active?"active":""}`}>
                            <button onClick={()=>ClickHandler(index)}  className='characters-list-item-btn'>
                                <img className='characters-list-item-img' src={character.srcImg} alt="" />
                                <p className='characters-list-item-text'>{character.name}</p>
                            </button>
                        </li>
                    )
                })}
            </ul>
            <button disabled={!active} className='characters-btn'>
                    <p className='characters-btn-text'>Далее</p>
                    <img className='characters-btn-img' src={srcArrowMain} alt="" />
            </button>
            
        </div>
    );
};

export default Characters;