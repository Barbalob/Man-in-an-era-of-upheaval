import Header from '../Components/Header/Header';
import EndGame from '../Components/EndGame/EndGame';
import { FC } from 'react';

const ResultSection:FC<{end:any}> = ({end}) => {
    return (
        <>
            <Header />
            <EndGame end={end}/>
        </>
    );
};

export default ResultSection;