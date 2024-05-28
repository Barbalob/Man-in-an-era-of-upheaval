import Header from '../Components/Header/Header';
import Characters from '../Components/Characters/Characters';
import { FC } from 'react';

const CharacterSelection:FC<{setData:any}> = ({setData}) => {
    return (
        <>
            <Header />
            <Characters setData={setData} />
        </>
    );
};

export default CharacterSelection;