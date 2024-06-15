import Header from '../Components/Header/Header';
import Characters from '../Components/Characters/Characters';
import { FC } from 'react';

const CharacterSelection:FC<{setData:any, setEnd:any}> = ({setData, setEnd}) => {
    return (
        <>
            <Header />
            <Characters setData={setData} setEnd={setEnd} />
        </>
    );
};

export default CharacterSelection;