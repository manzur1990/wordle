import { AppContext } from '../App';
import React, { useContext } from 'react';

function Key({ keyVal, bigKey }) {
    const { board, setBoard } = useContext(AppContext);
    const selectLetter = () => {
        const newBoard = [...board];
        newBoard[0][0] = keyVal;
        setBoard(newBoard);
        console.log('clicked', newBoard);
    };
    return (
        <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
            {keyVal}
        </div>
    );
}

export default Key;
