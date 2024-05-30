import Header from '../Components/Header/Header';
import EndGame from '../Components/EndGame/EndGame';
import { FC} from 'react';

const ResultSection:FC<{setData:any}> = ({setData}) => {
    return (
        <>
            <Header />
            <EndGame setData={setData} />
        </>
    );
};

export default ResultSection;