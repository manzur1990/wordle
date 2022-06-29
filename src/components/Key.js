import { AppContext } from '../App';
import React, { useContext } from 'react';

function Key({ keyVal, bigKey }) {
    const selectLetter = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { board, setBoard } = useContext(AppContext);
        const newBoard = [...board];
        newBoard[0][0] = keyVal;
        setBoard(newBoard);
    };
    return (
        <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
            {keyVal}
        </div>
    );
}

export default Key;
