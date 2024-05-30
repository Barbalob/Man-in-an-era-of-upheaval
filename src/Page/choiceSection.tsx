import Header from '../Components/Header/Header';
import GameChoise from '../Components/GameChoice/GameChoice';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import After from './After';

const ChoiceSection:FC<{data:any}> = ({data}) => {
    const nav = useNavigate()
    const [optionsQuestion, setOptionsQuestion] = useState({
        id:0,
        isEnd: false, 
        textAfter:'',
    })
    const [dataQuestion, setDataQuestion] = useState(data ? data[optionsQuestion.id] : [])
    
    useEffect(()=>{
        if (!data) {
            nav('/Man-in-an-era-of-upheaval/character-selection')
        } 
    }, [])

    useEffect(()=>{
        
        if (optionsQuestion.isEnd && !optionsQuestion.textAfter) {
            console.log(optionsQuestion.textAfter);
            nav('/Man-in-an-era-of-upheaval/end')
        } 
        if (optionsQuestion.id >= data?.length ){
            console.log(optionsQuestion.id);
            console.log(data?.length );
            console.log(2);
            nav('/Man-in-an-era-of-upheaval/end')
        }
        setDataQuestion(data ? data[optionsQuestion.id] : [])
    }, [optionsQuestion])
    console.log(optionsQuestion.textAfter);

    return (
        <>
            <Header />
            {data ? 
            (
                optionsQuestion.textAfter ? 
                <After 
                    optionsQuestion={optionsQuestion}
                    setOptionsQuestion={setOptionsQuestion}
                    dataQuestion={dataQuestion} 
                />
                :
                <GameChoise 
                    dataQuestion={dataQuestion} 
                    optionsQuestion={optionsQuestion} 
                    setOptionsQuestion={setOptionsQuestion}
                />
            ) 
            :""}
            
        </>
    );
};

export default ChoiceSection;