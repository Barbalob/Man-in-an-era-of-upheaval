import Header from '../Components/Header/Header';
import GameChoise from '../Components/GameChoice/GameChoice';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChoiceSection:FC<{data:any}> = ({data}) => {
    const nav = useNavigate()
    const [optionsQuestion, setOptionsQuestion] = useState({
        id:0,
        isEnd: false
    })
    const [dataQuestion, setDataQuestion] = useState(data ? data[optionsQuestion.id] : [])

    
    useEffect(()=>{
        if (!data) {
            nav('/Man-in-an-era-of-upheaval/character-selection')
        } 
    }, [])

    useEffect(()=>{
        if (optionsQuestion.isEnd) {
            nav('/end')
        } else {}
        if (optionsQuestion.id >= data?.length ){
            nav('/end')
        }
        
        setDataQuestion(data ? data[optionsQuestion.id] : [])

    },[optionsQuestion])

    return (
        <>
            <Header />
            {data ? <GameChoise dataQuestion={dataQuestion} optionsQuestion={optionsQuestion} setOptionsQuestion={setOptionsQuestion}/>:""}
            
        </>
    );
};

export default ChoiceSection;