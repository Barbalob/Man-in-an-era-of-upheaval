import { FC, useState } from 'react';
import './Characters.scss'
import srcPeapeasantImg from '../../assets/characters/peasantImg.png'
import srcNoblemanImg from '../../assets/characters/noblemanImg.png'
import srcTestImg from '../../assets/characters/testImg.png'
import srcArrowMain from '../../assets/arrowMain.png'
import { useNavigate } from 'react-router-dom';
import { dataPeapeasant } from '../../data/Peapeasant/dataPeapeasant';

const Characters:FC<{setData:any, setEnd:any}> = ({setData, setEnd}) => {
    const [active, setActive] = useState(false)
    const nav = useNavigate()
    const [characters, setCharacters] = useState([
        {
            name:'Дворянин',
            href:'',
            srcImg:srcPeapeasantImg,
            data: dataPeapeasant[0],
            active: false,
            end:["test1", "test2"],
        },
        {
            name:'Купец',
            href:'',
            srcImg:srcNoblemanImg,
            data: dataPeapeasant[1],
            active: false,
            end:["test1", "test2"],
        },
        {
            name:'Крестьянин',
            href:'',
            srcImg:srcTestImg,
            data: dataPeapeasant[2],
            active: false,
            end:["test1", "test2"],
        },
        {
            name:'Рабочий',
            href:'',
            srcImg:srcTestImg,
            data: dataPeapeasant[3],
            active: false,
            end:["test1", "test2"],
        }, 
    ])

    const ClickHandler = (index:number) => {
        setActive(true)
        let t = characters.map(el =>  {return {...el, active:false}})
        t[index].active = true
        setCharacters(t)
    }

    const choiceHandle = ( ) => {
        const activeData = characters.filter(el => el.active === true)
        setData(activeData[0].data)
        setEnd(activeData[0].end)
        nav('/Man-in-an-era-of-upheaval/game')
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
            <button disabled={!active} onClick={choiceHandle} className='characters-btn'>
                    <p className='characters-btn-text'>Далее</p>
                    <img className='characters-btn-img' src={srcArrowMain} alt="" />
            </button>
            
        </div>
    );
};

export default Characters;